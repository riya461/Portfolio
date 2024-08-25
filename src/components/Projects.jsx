import React, { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'Diagnox',
    description: 'Revolutionize diagnostics with our Telegram Bot: instant, detailed MRI/CT scan insights and management for faster, accurate medical decisions.',
    link: 'https://github.com/riya461/Diagnox',
    image: 'src/assets/Diagnox.png' // Add the image source here
  },
  {
    title: 'Voice-over',
    description: 'Utilizing Machine Learning Models to Extract Key Characteristics from Audio Recordings.',
    link: 'https://github.com/riya461/mini_project',
    image: 'src/assets/mini.png' // Add the image source here
    },
  
    {
    title: 'Webclipper',
    description: 'bookmarker lets you highlight, save, and revisit specific text on any webpage, with a sleek interface.',
    link: 'https://github.com/riya461/WebClipper?tab=readme-ov-file',
    image: 'src/assets/webclipper.png' // Add the image source here
    },
    // {
    //     title: 'VisualCVI',
    //     description: 'A website with javascript games for visually impaired kids to focus eye muscles.',
    //     link: 'https://riya461.github.io/CVI_website/',
    //     image: 'src/assets/cvi.png' // Add the image source here
    //   },
        
    
  // Add more projects as needed
];

const Projects = () => {
    const sectionRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          } else {
            entry.target.classList.remove('animate-visible');
          }
        });
      }, { threshold: 0.1 });
  
      const elements = sectionRef.current.querySelectorAll('.animate-section');
      elements.forEach((element) => observer.observe(element));
  
      return () => {
        elements.forEach((element) => observer.unobserve(element));
      };
    }, []);
  
    return (
      <section ref={sectionRef} className="bg-white py-12 px-6 text-center">
        <h2 className="text-6xl font-primary font-bold text-primary mb-6 animate-section">
          My Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-section">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-accent p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-section group transform duration-500"
            >
              <div className="relative overflow-hidden rounded-lg transform group-hover:scale-100 transition-transform duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="text-background w-full h-40 object-cover transform transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 hover:bg-primary transition-opacity duration-500 p-4">
                  <div className="font-head text-center transform transition-transform duration-300 group-hover:translate-y-2">
                    <p className="font-body text-white text-lg mb-3">{project.description}</p>
                    <a
                      href={project.link}
                      className="bg-background text-accent py-2 px-4 rounded-lg hover:underline transform transition-transform duration-300 hover:translate-y-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Source Code &rarr;
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="font-head text-4xl text-background font-semibold m-1">{project.title}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;