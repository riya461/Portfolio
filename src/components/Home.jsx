import { motion } from 'framer-motion';
import Header from './Header';

const letterVariants = {
  hidden: { y: 50, opacity: 0, rotate: -10 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      delay: 0.3 + i * 0.04,
      type: 'spring',
      stiffness: 150,
      damping: 12,
    },
  }),
};

const name = "I'm Riya";

// eslint-disable-next-line react/prop-types
const FloatingDoodle = ({ children, className, delay = 0 }) => (
  <motion.div
    className={`absolute pointer-events-none select-none ${className}`}
    animate={{
      y: [0, -12, 0],
      rotate: [0, 8, -5, 0],
    }}
    transition={{
      duration: 5 + Math.random() * 3,
      repeat: Infinity,
      delay,
      ease: 'easeInOut',
    }}
  >
    {children}
  </motion.div>
);

const Home = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <Header />

      <section
        className="min-h-screen flex justify-center items-center relative"
        style={{
          backgroundImage: "url('/assets/hero.png')",
          backgroundSize: '150%',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-cream/70 to-cream" />

        <FloatingDoodle className="top-[15%] left-[8%] text-5xl text-coral/20" delay={0}>✦</FloatingDoodle>
        <FloatingDoodle className="top-[25%] right-[10%] text-4xl text-plum/15" delay={1}>✿</FloatingDoodle>
        <FloatingDoodle className="bottom-[30%] left-[15%] text-3xl text-mint/20" delay={2}>◎</FloatingDoodle>
        <FloatingDoodle className="top-[40%] left-[3%] text-2xl text-lemon/30" delay={0.5}>✧</FloatingDoodle>
        <FloatingDoodle className="bottom-[25%] right-[5%] text-4xl text-sky/15" delay={1.5}>❋</FloatingDoodle>

        <div className="relative z-10 text-center px-6 pb-24 max-w-4xl mx-auto">
          <motion.p
            className="font-handwriting text-2xl sm:text-3xl text-coral mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            hello ✿
          </motion.p>

          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight overflow-hidden">
            {name.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{
                  color: char === ' ' ? 'transparent' : undefined,
                  background: char !== ' ' ? 'linear-gradient(135deg, #FF8A65, #E8637A, #9B59B6)' : undefined,
                  WebkitBackgroundClip: char !== ' ' ? 'text' : undefined,
                  WebkitTextFillColor: char !== ' ' ? 'transparent' : undefined,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="font-handwriting text-2xl sm:text-3xl md:text-4xl text-charcoal/60 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            developing solutions through coding...
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            <a
              href="https://drive.google.com/file/d/1xacqrLplH8c9ZtiggtrFDeFxMh425U6Z/view?usp=sharing"
              className="bouncy-btn bg-coral text-white"
            >
              Download CV ↓
            </a>
            <a
              href="#about"
              className="bouncy-btn bg-cream text-charcoal"
            >
              About Me ✦
            </a>
          </motion.div>
        </div>

        <motion.div
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 hidden sm:flex flex-col gap-3"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {[
            { href: 'https://github.com/riya461', icon: '/assets/github.svg', label: 'GitHub' },
            { href: 'https://x.com/RiyaSabu03', icon: '/assets/twitter.svg', label: 'Twitter' },
            { href: 'https://www.linkedin.com/in/riya-sabu-dev/', icon: '/assets/linkedin.svg', label: 'LinkedIn' },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="social-bubble bg-cream"
              whileHover={{ scale: 1.15, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
            >
              <img className="w-5 h-5" src={social.icon} alt={social.label} />
            </motion.a>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
