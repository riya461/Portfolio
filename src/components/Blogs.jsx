import React from 'react';

const Blogs = () => {
  return (
    <section className="bg-background py-12 px-6 text-center">
      <h1 className='text-primary font-primary text-6xl mb-8'>Blogs</h1>
      <div className="flex flex-col items-center w-full">
        {/* Blog Post 1: Redirect to an external link */}
        <div className="flex flex-col items-center w-full max-w-md mx-auto mb-8 bg-accent rounded-3xl py-3 ">
          <a href="https://substack.com/home/post/p-146033801?source=queue" target="_blank" rel="noopener noreferrer">
            <img src="/assets/book.jpg" alt="Blog 1" className="w-full h-auto max-h-80 rounded-lg shadow-lg" />
          </a>
          <p className="mt-4 text-lg text-secondary">
            <a href="https://substack.com/home/post/p-146033801?source=queue" target="_blank" rel="noopener noreferrer" className="hover:underline font-body  py-3 w-full rounded-lg text-white hover:text-white">Read more...</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

