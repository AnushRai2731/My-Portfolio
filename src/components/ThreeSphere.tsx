import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeSphere: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 400;
    let height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00d2ff, 2.5);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const purpleLight = new THREE.PointLight(0xbd00ff, 2);
    purpleLight.position.set(-5, -5, -5);
    scene.add(purpleLight);

    // Outer Wireframe Tech Sphere
    const geometry = new THREE.IcosahedronGeometry(1.6, 12);
    const material = new THREE.MeshPhongMaterial({
      color: 0x00d2ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      emissive: 0x00d2ff,
      emissiveIntensity: 0.4,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Outer Ring
    const ringGeom = new THREE.TorusGeometry(2.1, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00fdee, transparent: true, opacity: 0.4 });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    // Inner Glowing Core
    const coreGeom = new THREE.IcosahedronGeometry(0.85, 2);
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0xbd00ff,
      emissive: 0xbd00ff,
      emissiveIntensity: 0.8,
      shininess: 100,
    });
    const core = new THREE.Mesh(coreGeom, coreMat);
    scene.add(core);

    camera.position.z = 4.2;

    // Mouse Tracking Parallax
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 400;
      height = container.clientHeight || 500;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    let reqId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      sphere.rotation.y += 0.006;
      sphere.rotation.x += 0.003;

      ring.rotation.z -= 0.004;

      core.rotation.y -= 0.01;
      core.scale.setScalar(1 + Math.sin(elapsedTime * 2.2) * 0.06);

      // Smooth Parallax
      camera.position.x += (mouseX * 1.2 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 1.2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[350px] lg:min-h-[500px] relative flex items-center justify-center filter drop-shadow-[0_0_50px_rgba(0,210,255,0.25)]"
    />
  );
};
