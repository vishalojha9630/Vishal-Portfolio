import React from 'react';

const About = () => {
  return (
    <div name='about' className='bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-left pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
        </div>
        
        <div className='max-w-[1000px] w-full grid gap-8 px-4'>
          <p>Experienced Software Developer with 2 years of hands-on experience in
            designing, developing, and maintaining Web and Mobile applications.
            Proficient in JavaScript, ReactJS, Redux, TypeScript, React Native, NextJs.
            Skilled in collaborating with cross-functional teams to deliver high-quality
            solutions that meet client requirements. A passion for learning new
            technologies & methodologies and I'm focused on Full Stack development.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
