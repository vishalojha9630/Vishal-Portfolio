import React from 'react';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Hi, I'm Vishal Ojha
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Frontend Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[600px]'>
          I have 3 years of hands-on experience in designing, developing, and maintaining Web and Mobile Applications.
          Currently, Proficient in JavaScript(ES6+), React.js, React-Native, Redux Toolkit, TypeScript, Next.js, GraphQL, REST API, StoryBook, HTML5, CSS3, Bootstrap, Tailwind CSS, WordPress CMS, JSON, Problem-Solving.
        </p>

        <div className='pt-5'>
          <a
            href='/Vishal_3Years_Experience.pdf'
            className="text-white group border-2 px-6 py-3 my-2 items-center hover:bg-pink-600 hover:border-pink-600"
            download={true}
            target="_blank"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
