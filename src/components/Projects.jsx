import React, { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'Diagnox',
    description: 'Revolutionize diagnostics with our Telegram Bot: instant, detailed MRI/CT scan insights and management for faster, accurate medical decisions.',
    link: 'https://github.com/riya461/Diagnox',
    image: '/assets/Diagnox.png',
  },
  {
    title: 'Voice-over',
    description: 'Utilizing Machine Learning Models to Extract Key Characteristics from Audio Recordings.',
    link: 'https://github.com/riya461/mini_project',
    image: '/assets/mini.png',
  },
  {
    title: 'Webclipper',
    description: 'Bookmarker lets you highlight, save, and revisit specific text on any webpage, with a sleek interface.',
    link: 'https://github.com/riya461/WebClipper?tab=readme-ov-file',
    image: '/assets/webclipper.png',
  },
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
    <section ref={sectionRef} className="bg-white py-12 px-6 text-center ">
      <h2 className="text-6xl font-primary font-bold text-primary mb-12  animate-section"> {/* Increased bottom margin */}
        My Projects
      </h2>
      <div className="space-y-8 md:mx-32 lg:mx-64 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 p-4 rounded-lg shadow-lg transition-transform duration-500 hover:transform hover:scale-105 hover:shadow-xl border-accent border-2 group animate-section ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-8`}
          >
            <div className="flex-shrink-0 w-full md:w-1/2 mb-4 md:mb-0"> {/* Added bottom margin for small screens */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-sm transition-transform duration-500 transform group-hover:scale-105"
              />
            </div>
            <div className="bg-background rounded-xl flex-1 p-4">
              <h3 className={`${index % 2 !== 0 ? 'text-center md:text-left' : 'text-center md:text-right'} text-2xl md:text-3xl font-head text-accent font-semibold mb-2`}> {/* Adjusted font size */}
                {project.title}
              </h3>
              <p className={`${index % 2 !== 0 ? 'text-center md:text-left' : 'text-center md:text-right'} text-base md:text-lg font-body text-black mb-4`}> {/* Adjusted font size */}
                {project.description}
              </p>
              <a
                href={project.link}
                className="bg-white font-head text-accent py-2 px-4 rounded-lg hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source Code &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
