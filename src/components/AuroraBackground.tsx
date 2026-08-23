import React, { useEffect, useRef } from 'react';

export const AuroraBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) return;

    let animationFrameId: number;

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      void main() {
          vec2 uv = v_texCoord;
          vec3 color = vec3(0.027, 0.043, 0.078); // #070B14 dark navy base

          float t = u_time * 0.12;
          vec2 mouse = u_mouse / u_resolution;

          vec3 cyan = vec3(0.133, 0.827, 0.933);    // #22D3EE
          vec3 violet = vec3(0.655, 0.545, 0.980);  // #A78BFA
          vec3 sky = vec3(0.220, 0.741, 0.973);     // #38BDF8

          // Blob 1: Cyan
          vec2 p1 = vec2(0.3 + 0.2 * sin(t * 1.1), 0.4 + 0.15 * cos(t * 0.8));
          float d1 = length(uv - p1);
          float b1 = smoothstep(0.8, 0.0, d1);
          color = mix(color, cyan, b1 * 0.22);

          // Blob 2: Violet
          vec2 p2 = vec2(0.7 + 0.15 * cos(t * 0.9), 0.6 + 0.2 * sin(t * 1.2));
          float d2 = length(uv - p2);
          float b2 = smoothstep(0.75, 0.0, d2);
          color = mix(color, violet, b2 * 0.25);

          // Blob 3: Sky
          vec2 p3 = vec2(0.5 + 0.25 * sin(t * 0.7), 0.5 + 0.25 * cos(t * 1.3));
          float d3 = length(uv - p3);
          float b3 = smoothstep(0.7, 0.0, d3);
          color = mix(color, sky, b3 * 0.18);

          // Interactive mouse glow
          float mouseGlow = smoothstep(0.45, 0.0, length(uv - mouse));
          color += cyan * mouseGlow * 0.14;

          gl_FragColor = vec4(color, 1.0);
      }
    `;

    function createShader(type: number, source: string) {
      if (!gl) return null;
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertShader = createShader(gl.VERTEX_SHADER, vs);
    const fragShader = createShader(gl.FRAGMENT_SHADER, fs);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_resolution');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');

    let mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (e.clientX - rect.left) / rect.width;
        const ny = 1.0 - (e.clientY - rect.top) / rect.height;
        mousePos.x = nx * canvas.width;
        mousePos.y = ny * canvas.height;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    function syncSize() {
      if (!canvas) return;
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    syncSize();

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }

    function render(time: number) {
      if (!gl || !canvas) return;
      syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, time * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mousePos.x, mousePos.y);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-2] pointer-events-none overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-70"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};
