import { motion } from 'framer-motion';

const socialLinks = [
  { href: 'https://github.com/riya461', icon: '/assets/github.svg', label: 'GitHub' },
  { href: 'https://x.com/RiyaSabu03', icon: '/assets/twitter.svg', label: 'Twitter' },
  { href: 'https://www.linkedin.com/in/riya-sabu-dev/', icon: '/assets/linkedin.svg', label: 'LinkedIn' },
  { href: 'https://www.instagram.com/meshareo_tadaraki?igsh=a3dvajl0MmU4NWN0', icon: '/assets/insta.jpg', label: 'Instagram' },
];

const Connect = () => {
  return (
    <section className="py-24 sm:px-6 text-center relative bg-peach-wash overflow-hidden">
      <div className="absolute top-10 left-[10%] text-4xl opacity-10 animate-drift">✿</div>
      <div className="absolute bottom-10 right-[10%] text-3xl opacity-10 animate-drift" style={{ animationDelay: '4s' }}>✦</div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading text-5xl sm:text-6xl md:text-7xl">
            Let&apos;s Connect!
          </h2>
          <div className="font-handwriting text-xl text-plum mt-2">say hello ✧</div>
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl font-body text-charcoal/60 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          I&apos;d love to hear from you! Whether you have a question or just want to say hello,
          feel free to drop me a message.
        </motion.p>

        <motion.div
          className="flex justify-center gap-5 sm:gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="social-bubble bg-cream"
              whileHover={{ scale: 1.15, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
            >
              <img className="w-5 h-5" src={social.icon} alt={social.label} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a
            href="mailto:riyasabures@gmail.com"
            className="bouncy-btn bg-coral text-white text-base sm:text-lg px-10 py-4"
          >
            Send Me a Mail ✦
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;
