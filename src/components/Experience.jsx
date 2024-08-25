import React, { useEffect, useRef } from 'react';

const experiences = [
    {
        date: 'May 2024 - present',
        role: 'Academic Intern',
        company: 'IEDC Kerala',
        logo: 'src/assets/iedc.jpeg', // Add the logo image path here
      },
    {
        date: 'Feb 2024 - present',
        role: 'WIE Chairperson',
        company: 'IEEE SB CET',
        logo: 'src/assets/ieesbcet.jpeg', // Add the logo image path here
      },
      {
        date: 'May 2024 - Jul 2024',
        role: 'Engineering Intern',
        company: 'Typito',
        logo: 'src/assets/typito.jpeg', // Add the logo image path here
      },
      {
        date: 'Aug 2023 - Mar 2024',
        role: 'Webmaster',
        company: 'CS Association',
        logo: 'src/assets/csc.jpeg', // Add the logo image path here
      },
    
    {
        date: 'Oct 2023 - May 2024',
        role: 'Web Team',
        company: 'EETI Foundation',
        logo: 'src/assets/eeti.jpeg', // Add the logo image path here
      },
      
  {
    date: 'April 2023 - Mar 2024',
    role: 'Program Facilitator',
    company: 'TinkerHub CET',
    logo: 'src/assets/tinkerhubcet.jpeg', // Add the logo image path here
  },
  {
    date: 'April 2023 - Jan 2024',
    role: 'Web Team',
    company: 'IEEE SB CET',
    logo: 'src/assets/ieesbcet.jpeg', // Add the logo image path here
  },
  {
    date: 'April 2023 - Mar 2024',
    role: 'Project Co-ordinator SatHacknight',
    company: 'TinkerHub Foundation',
    logo: 'src/assets/tinkerhub.jpeg', // Add the logo image path here
  },
  {
    date: 'Nov 2022 - May 2023',
    role: 'Python Learning Facilitator',
    company: 'TinkerHub Foundation',
    logo: 'src/assets/tinkerhub.jpeg', // Add the logo image path here
  },
];

const Experience = () => {
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
      <h1 className='uppercase font-primary text-primary text-6xl mb-12 animate-section'>
        Experience
      </h1>
      <div className="relative">
        <div className="relative max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={index} className="relative flex items-start mb-12 animate-section">
              {/* Dot */}
              <div className="absolute w-6 h-6 bg-primary rounded-full left-10 top-1/2 transform -translate-y-1/2 timeline-dot"></div>
              
              {/* Line connecting dots */}
              
                <div className="absolute w-0.5 bg-primary left-12 top-1/2 h-64 transform -translate-y-1/2"></div>
              

              <div className="ml-24 w-full py-4 px-6 bg-background border-2 border-primary rounded-lg shadow-timeline transition-transform duration-300 hover:scale-105">
                <div className="flex flex-col sm:flex-row items-center mx-4 space-y-3 sm:space-y-0 sm:space-x-16">
                  <img
                    src={experience.logo}
                    alt={experience.company}
                    className="w-12 h-12 object-contain mr-4"
                  />
                  <div className='text-left'>
                    <h3 className="text-2xl font-semibold text-black mb-1 font-body">{experience.role}</h3>
                    <h4 className="font-primary text-xl font-semibold text-accent mb-2">{experience.company}</h4>
                    <p className="font-head text-gray-500 mb-4">{experience.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

