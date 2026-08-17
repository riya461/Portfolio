import { motion } from 'framer-motion';

const workExperience = [
  { date: 'Jul 2025 - present', role: 'Software Engineer', company: 'ISDL Bangalore', logo: '/assets/ibm.svg' },
  { date: 'May 2024 - Jul 2024', role: 'Engineering Intern', company: 'Typito', logo: '/assets/typito.jpeg' },
];

export const Experience = () => {
  return (
    <section className="py-24 sm:px-6 text-center relative bg-mint-wash">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30, rotate: 1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading text-5xl sm:text-6xl md:text-7xl uppercase">
            Experience
          </h2>
          <div className="font-handwriting text-xl text-plum mt-2">what I&apos;ve been upto ✦</div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-coral via-plum to-sky opacity-40" />

          {workExperience.map((experience, index) => (
            <motion.div
              key={index}
              className="relative flex items-start mb-8 pl-20"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15, type: 'spring' }}
            >
              <div className="absolute left-[20px] top-6 z-10">
                <div className="w-5 h-5 rounded-full bg-coral border-3 border-charcoal shadow-sketchy-sm" />
              </div>

              <div className="w-full">
                <div className={`card-pastel p-5 sm:p-6 ${
                  index % 2 === 0 ? 'bg-peach/30' : 'bg-lavender/30'
                }`}>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={experience.logo}
                        alt={experience.company}
                        className="w-12 h-12 object-contain rounded-xl border-2 border-charcoal/10 p-1 bg-white hover:rotate-6 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-center sm:text-left flex-1">
                      <h3 className="text-lg sm:text-xl font-body font-bold text-charcoal mb-0.5">
                        {experience.role}
                      </h3>
                      <h4 className="font-display text-base sm:text-lg font-semibold text-coral">
                        {experience.company}
                      </h4>
                      <p className="font-handwriting text-base text-charcoal/50 mt-1">
                        {experience.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WorkExperience = Experience;

export default Experience;
