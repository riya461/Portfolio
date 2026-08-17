import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Voice-over',
    description: 'Utilizing Machine Learning Models to Extract Key Characteristics from Audio Recordings.',
    link: 'https://github.com/riya461/mini_project',
    image: '/assets/mini.png',
    color: 'bg-sky/20',
    tag: 'ML ✦',
    tagColor: 'bg-sky text-charcoal',
  },
];

const Projects = () => {
  return (
    <section className="py-24 sm:px-6 text-center relative dotted-bg">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading text-5xl sm:text-6xl md:text-7xl">
            My Projects
          </h2>
          <div className="font-handwriting text-xl text-coral mt-2">things I&apos;ve made ✿</div>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotate: index % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.15, type: 'spring' }}
            >
              <div className={`card-pastel overflow-hidden bg-cream flex flex-col md:flex-row ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}>
                <div className="flex-shrink-0 w-full md:w-1/2 relative group">
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 sm:h-72 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className={`flex-1 p-6 sm:p-8 flex flex-col justify-center text-left ${project.color}`}>
                  <span className={`inline-block self-start font-body font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-charcoal/20 mb-3 ${project.tagColor}`}>
                    {project.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-charcoal mb-3">
                    {project.title}
                  </h3>
                  <p className="text-base sm:text-lg font-body text-charcoal/60 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bouncy-btn bg-coral text-white text-sm"
                    >
                      View Source Code →
                    </a>
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

export default Projects;
