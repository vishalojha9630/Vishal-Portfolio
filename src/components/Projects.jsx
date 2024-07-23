import React from 'react';
import IMSDIA from '../assets/projects/ims-dia.png'
import Pennywise from '../assets/projects/pennywise.png'
import Appucakes from '../assets/projects/appucakes.png'
import RetailPOS from '../assets/projects/retailpos.png'


const Projects = () => {

  const project = [
    {
      id: 1,
      name: "IMS-DIA",
      image: IMSDIA,
      github: "",
      live: "https://imsdia.com/",
    },
    {
      id: 2,
      name: "AppuCakes",
      image: Appucakes,
      github: "",
      live: "https://appucakes.com/",
    },
    {
      id: 3,
      name: "P3nnywise (Mobile App)",
      image: Pennywise,
      github: "",
      live: "https://play.google.com/store/apps/details?id=com.pennywises.app&pcampaignid=web_share",
    },
    {
      id: 4,
      name: "Retail-POS",
      image: RetailPOS,
      github: "",
      live: "",
    }
  ];

  return (
    <div name='projects' className='w-full h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Projects
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

          {/* Gird Item */}
          {project.map((item, index) => (
            <div>
              <div
                key={index}
                style={{ backgroundImage: `url(${item.image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
              >
                {/* Hover effect for images */}
                <div className="opacity-0 group-hover:opacity-100 ">
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>

              <div className='pt-2 justify-center text-center items-center'>
                <span className="text-2xl font bold text-white ">
                  {item.name}
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Projects;
