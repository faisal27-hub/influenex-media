import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0x000000, 0);

    // ── Particles ──────────────────────────────────────────────
    const particleCount = 450;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const colorOptions = [
      new THREE.Color(0x3b82f6), // blue
      new THREE.Color(0x06b6d4), // cyan
      new THREE.Color(0x8b5cf6), // purple
      new THREE.Color(0x60a5fa), // light blue
      new THREE.Color(0x22d3ee), // light cyan
    ];

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 10 + Math.random() * 30;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = Math.random() * 2.5 + 0.5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.25,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // ── Floating Orbs ──────────────────────────────────────────
    const orbGeom = new THREE.SphereGeometry(1, 32, 32);
    const orbs: THREE.Mesh[] = [];
    const orbData = [
      { color: 0x3b82f6, pos: [-8, 4, -5] as [number, number, number], scale: 2.5 },
      { color: 0x06b6d4, pos: [10, -3, -8] as [number, number, number], scale: 1.8 },
      { color: 0x8b5cf6, pos: [0, -8, -12] as [number, number, number], scale: 3 },
    ];

    orbData.forEach(({ color, pos, scale }) => {
      const mat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.02,
      });
      const orb = new THREE.Mesh(orbGeom, mat);
      orb.position.set(...pos);
      orb.scale.setScalar(scale);
      scene.add(orb);
      orbs.push(orb);
    });

    // ── Mouse ─────────────────────────────────────────────────
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // ── Resize ────────────────────────────────────────────────
    const handleResize = () => {
      if (!canvas) return;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // ── Animation Loop ────────────────────────────────────────
    let animId: number;
    let t = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.003;

      particles.rotation.y = t * 0.1 + mouse.x * 0.05;
      particles.rotation.x = mouse.y * 0.03;

      orbs.forEach((orb, i) => {
        orb.position.y += Math.sin(t + i * 2) * 0.01;
        orb.position.x += Math.cos(t * 0.7 + i) * 0.005;
      });

      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02;
      camera.position.y += (mouse.y * 1.5 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ width: '100%', height: '100%' }}
    />
  );
}
