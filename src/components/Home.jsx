import React, { useEffect, useRef } from 'react';
import Header from './Header';

const Home = () => {
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
    <div className="w-full">
      <Header className="animate-header" />
      
      <section ref={sectionRef} className="min-h-screen flex p-6 space-y-6 justify-between">
      <div>
            {/* Additional content can go here */}

          </div>
        <div className="flex flex-col sm:m-20 w-full space-y-3 text-start  animate-section">
          <h1 className="font-primary text-5xl md:text-8xl uppercase text-primary">I'm Riya Sabu</h1>
          <p className="font-head text-2xl md:text-5xl text-accent">Developing solutions through coding...</p>
          <div className="flex space-x-6">
            <button className="border-primary border-2 bg-secondary w-40 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"> 
              <a className="text-sm md:text-lg font-body font-bold text-primary uppercase hover:underline" href="https://drive.google.com/file/d/1CUmYEVAbDMHhySS1U7mjzX0oeWEPZPAf/view?usp=sharing">Download CV</a>
            </button>
            <button className="border-primary border-2 bg-secondary text-accent w-40 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"> 
              <a className="text-sm md:text-lg font-body font-bold text-primary uppercase hover:underline" href="#about">About Me</a>
            </button>
          </div>
        </div>

        <div id="sidebar" className="font-body text-3xl relative w-15 top-64 right-4 sm:right-0 animate-section">
          <ul className="bg-background p-3 rounded-lg flex flex-col space-y-2">
            <li className="w-10 h-10">
              <a href="https://github.com/riya461">
                <img className="hover:h-10 h-7" src="src/assets/github.svg" alt="GitHub" />
              </a>
            </li>
            <li className="w-10 h-10">
              <a href="https://x.com/RiyaSabu03">
                <img className="hover:h-10 h-7" src="src/assets/twitter.svg" alt="Twitter" />
              </a>
            </li>
            <li className="w-10 h-10">
              <a href="https://www.linkedin.com/in/riya-sabu-dev/">
                <img className="hover:h-10 h-7" src="src/assets/linkedin.svg" alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
