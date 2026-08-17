import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-24 sm:px-6 text-center relative bg-lemon-wash">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading text-5xl sm:text-6xl md:text-7xl">
            About Me
          </h2>
          <div className="font-handwriting text-xl text-coral mt-2">a little bit about me ✿</div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          <motion.div
            className="w-full max-w-sm"
            initial={{ opacity: 0, x: -40, rotate: -8 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-peach rounded-blob-2 animate-squish opacity-30" />
              <div className="relative sketchy-border overflow-hidden bg-cream rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <img
                  className="w-full object-cover aspect-square"
                  src="assets/riyas.png"
                  alt="Riya"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 font-handwriting text-lg text-plum bg-lemon px-3 py-1 rotate-6 border-2 border-charcoal rounded-lg shadow-sketchy-sm">
                that&apos;s me! ✦
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full max-w-2xl text-left"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="notebook-lines sketchy-border bg-cream p-8 sm:p-10 rounded-lg">
              <p className="text-lg sm:text-xl font-body text-charcoal/80 leading-loose mb-6 relative">
                <span className="font-handwriting text-3xl text-coral absolute -top-6 -left-2">→</span>
                I&apos;m Riya, a software engineer who likes building things, breaking down ideas.
              </p>
              <p className="text-lg sm:text-xl font-body text-charcoal/80 leading-loose mb-6">
                I care deeply about building things that are useful beyond myself; contributing to open source and using technology where it can create a meaningful difference.
              </p>
              <p className="text-lg sm:text-xl font-body text-charcoal/80 leading-loose mb-6">
                Outside of work, it is an organised chaos: learning piano, writing, discovering music, following the world around me, or chasing new side challenges.
              </p>
              <p className="text-lg sm:text-xl font-body text-charcoal/80 leading-loose">
                And somewhere between all the code, unfinished ideas, bad jokes, and non-linear plans, I&apos;m still figuring it out — one quest at a time.
              </p>

              <div className="flex gap-3 mt-8 items-center">
                <div className="w-16 h-0.5 bg-coral rounded-full" />
                <span className="font-handwriting text-coral text-xl">~</span>
                <div className="w-8 h-0.5 bg-plum/40 rounded-full" />
                <span className="font-handwriting text-plum/60 text-lg">✦</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
