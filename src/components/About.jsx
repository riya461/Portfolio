import React, { useEffect, useRef } from 'react';

const About = () => {
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
    <section ref={sectionRef} className="bg-white py-24 sm:px-6 text-center h-full">
      <h2 className="text-6xl font-bold text-primary font-primary mb-5 sm:mb-6 animate-section">
        About Me
      </h2>
      <div className="flex sm:flex-row flex-col items-center w-full justify-center xl:mx-10">
        <div id="image-section" className="flex items-center w-3/4 sm:w-1/3 xl:mx-32 justify-center animate-section">
          <img className="mb-16 sm:m-16 border-4" src="src/assets/riya.png" alt="Riya" />
        </div>
        <div className="w-3/4 flex flex-col animate-section">
          <p className="text-lg font-body text-start text-black max-w-3xl sm:mx-10 lg:text-xl">
            Hi, I'm Riya, a fourth-year student developer at the College of Engineering, Trivandrum. I am pursuing my CSE degree while working on solutions through coding. <br /><br /> My passion is to develop applications bridging the gap between technology and people. 
            Through hackathons and web teams, I have developed a skill in building fast and efficient solutions.
          </p>
          <p className="text-black block sm:hidden lg:block text-lg font-body text-start mb-8 max-w-3xl sm:mx-10 lg:mt-8 lg:text-xl">
            Outside of coding, I enjoy playing guitar and reading books with a cup of coffee. <br /> Let's work together to build something amazing!
          </p>
        </div>
      </div>
      <p className="hidden sm:block lg:hidden text-lg max-w-3xl font-body animate-section">
        Outside of coding, I enjoy playing guitar and reading books with a cup of coffee. <br /> Let's work together to build something amazing!
      </p>
    </section>
  );
};

export default About;
