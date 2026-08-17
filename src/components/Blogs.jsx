import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Bench',
    href: 'https://meshareo.substack.com/p/bench',
    description: 'Read the story',
    image: '/assets/tea.jpg',
    color: 'bg-peach/40',
  },
  {
    title: 'Invisible String',
    href: 'https://meshareo.substack.com/p/invisible-string',
    description: 'Know more...',
    image: '/assets/book.jpg',
    color: 'bg-lavender/40',
  },
];

const Blogs = () => {
  return (
    <section className="py-24 sm:px-6 text-center relative bg-rose-wash">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30, rotate: 2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading text-5xl sm:text-6xl md:text-7xl">
            Blogs
          </h2>
          <div className="font-handwriting text-xl text-plum mt-2">things I&apos;ve written ✦</div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15, type: 'spring' }}
              whileHover={{ rotate: 0, scale: 1.02 }}
            >
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full group"
              >
                <div className={`card-pastel overflow-hidden h-full ${post.color} relative`}>
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover border-b-2 border-charcoal/10"
                    />
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-2">
                      {post.title}
                    </h3>
                    <div className="font-handwriting text-lg text-coral group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center gap-2">
                      {post.description} →
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
