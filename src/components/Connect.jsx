import React, { useEffect, useRef } from 'react';

const Connect = () => {
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
    <section ref={sectionRef} className="bg-background py-12 px-6 text-center">
      <h2 className="text-6xl font-bold font-primary text-primary mb-6 animate-section">
        Let's Connect!
      </h2>
      <p className="text-lg text-accent font-body mb-8 animate-section">
        I'd love to hear from you! <br /> Whether you have a question or just want to say hello, feel free to drop me a message.
      </p>
      <div id="sidebar" className="font-body text-3xl flex flex-row justify-center animate-section">
        <ul className="flex py-7 space-x-10 w-full justify-center">
          <li className="w-10 h-10">
            <a href="https://github.com/riya461">
              <img className="hover:h-10 h-7" src="/assets/github.svg" alt="GitHub" />
            </a>
          </li>
          <li className="w-10 h-10">
            <a href="https://x.com/RiyaSabu03">
              <img className="hover:h-10 h-7" src="/assets/twitter.svg" alt="Twitter" />
            </a>
          </li>
          <li className="w-10 h-10">
            <a href="https://www.linkedin.com/in/riya-sabu-dev/">
              <img className="hover:h-10 h-7" src="/assets/linkedin.svg" alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </div>
      <a href="mailto:riyasabures@gmail.com">
        <button
          type="submit"
          className="font-head bg-accent text-background py-3 px-6 rounded-lg w-full lg:w-1/2 hover:bg-primary transition-all animate-section"
        >
          Send Me a Mail!
        </button>
      </a>
    </section>
  );
};

export default Connect;

