import { motion } from 'framer-motion';

const volunteering = [
  { date: 'May 2024 - Aug 2024', role: 'Academic Intern', company: 'IEDC Kerala', logo: '/assets/iedc.jpeg' },
  { date: 'April 2023 - Mar 2024', role: 'SatHacknight Co-ordinator', company: 'TinkerHub Foundation', logo: '/assets/tinkerhub.jpeg' },
];

const cardColors = ['bg-sky/20', 'bg-mint/20'];

const Volunteering = () => {
  return (
    <section className="py-24 sm:px-6 text-center relative bg-lavender-wash">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading text-5xl sm:text-6xl md:text-7xl uppercase">
            Volunteering
          </h2>
          <div className="font-handwriting text-xl text-coral mt-2">giving back ✿</div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {volunteering.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15, type: 'spring' }}
              whileHover={{ rotate: 0 }}
            >
              <div className={`card-pastel p-6 text-left h-full ${cardColors[index % cardColors.length]}`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={experience.logo}
                      alt={experience.company}
                      className="w-14 h-14 object-contain rounded-xl border-2 border-charcoal/10 p-2 bg-white hover:rotate-6 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-body font-bold text-charcoal mb-1">
                      {experience.role}
                    </h3>
                    <h4 className="font-display text-base sm:text-lg font-semibold text-coral mb-2">
                      {experience.company}
                    </h4>
                    <p className="font-handwriting text-base text-charcoal/50">
                      {experience.date}
                    </p>
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

export default Volunteering;
