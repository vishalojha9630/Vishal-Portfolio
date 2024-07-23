import React from 'react'
import GitHub from '../assets/github-icon.png';
import LinkedIn from '../assets/linked.png';
import Email from '../assets/email.png';
import Phone from '../assets/phone.png';

const Contact = () => {
  return (
    <footer>
      <div name='contact' className='pt-20 w-full bg-[#0a192f] text-gray-300 '>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
          <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact Me</p>
            <p className='text-gray-300 py-4'>Get In Touch</p>
          </div>

          <div className="py-8 flex justify-center space-x-4">
            <a target="_blank" href="mailto:vishalojha9630@gmail.com">
              <img className='w-10' src={Email} alt="Email icon" /> 
            </a>

            <a href="tel:+91 9630917149">
              <img className='w-10' src={Phone} alt="Phone icon" />
            </a>

            <a target="_blank" href="https://linkedin.com/in/vishalojha2806">
              <img className='w-10' src={LinkedIn} alt="LinkedIn icon" />
            </a>

            <a target="_blank" href="https://github.com/vishalojha9630">
              <img className='w-10' src={GitHub} alt="GitHub icon" />
            </a>

          </div>

        </div>
      </div>
    </footer>
  )
}

export default Contact
