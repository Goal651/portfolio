'use client';
import { useEffect } from 'react';
import * as THREE from 'three';
import Image from 'next/image';

const Portfolio = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('3d-canvas')?.appendChild(renderer.domElement);

    // Add a cube to the scene
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Render loop
    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-500 text-gray-100">
      <main className="max-w-7xl mx-auto p-6">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div id="3d-canvas" className="w-full h-[400px] mb-8 rounded-lg shadow-xl"></div> {/* 3D canvas */}
          <div className="bg-opacity-70 backdrop-blur-lg p-6 rounded-lg shadow-lg">
            <h1 className="text-5xl font-extrabold text-white mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl">Explore my projects, skills, and contact information.</p>
          </div>
        </section>

        {/* About Me Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">About Me</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Hi, I'm [Your Name], a passionate developer specialized in building modern web applications. I love creating innovative solutions and tackling challenging projects. With a focus on clean code and performance, I aim to deliver the best user experiences.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">My Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
            <li className="flex flex-col items-center hover:scale-105 transform transition duration-300">
              <Image src="/icons/javascript.svg" alt="JavaScript" width={50} height={50} />
              <span className="mt-2 text-lg">JavaScript</span>
            </li>
            <li className="flex flex-col items-center hover:scale-105 transform transition duration-300">
              <Image src="/icons/typescript.svg" alt="TypeScript" width={50} height={50} />
              <span className="mt-2 text-lg">TypeScript</span>
            </li>
            <li className="flex flex-col items-center hover:scale-105 transform transition duration-300">
              <Image src="/icons/java.svg" alt="Java" width={50} height={50} />
              <span className="mt-2 text-lg">Java</span>
            </li>
            <li className="flex flex-col items-center hover:scale-105 transform transition duration-300">
              <Image src="/icons/python.svg" alt="Python" width={50} height={50} />
              <span className="mt-2 text-lg">Python</span>
            </li>
            <li className="flex flex-col items-center hover:scale-105 transform transition duration-300">
              <Image src="/icons/html.svg" alt="HTML" width={50} height={50} />
              <span className="mt-2 text-lg">HTML</span>
            </li>
            <li className="flex flex-col items-center hover:scale-105 transform transition duration-300">
              <Image src="/icons/react.svg" alt="React.js" width={50} height={50} />
              <span className="mt-2 text-lg">React.js</span>
            </li>
            <li className="flex flex-col items-center hover:scale-105 transform transition duration-300">
              <Image src="/icons/nextjs.svg" alt="Next.js" width={50} height={50} />
              <span className="mt-2 text-lg">Next.js</span>
            </li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">Project Title 1</h3>
              <p className="text-sm mb-4">Short description of the project.</p>
              <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">Project Title 2</h3>
              <p className="text-sm mb-4">Short description of the project.</p>
              <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">Project Title 3</h3>
              <p className="text-sm mb-4">Short description of the project.</p>
              <a href="https://github.com/yourusername/project3" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Contact Me</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-6">
            Feel free to reach out for collaboration, job opportunities, or just to say hi! I look forward to connecting with you.
          </p>
          <form className="space-y-6 max-w-lg mx-auto">
            <input type="text" name="name" placeholder="Your Name" className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" name="email" placeholder="Your Email" className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea name="message" placeholder="Your Message" className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">Send Message</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
