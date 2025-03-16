"use client"

import { useState } from 'react';

import { myProjects } from '../constants/index.js';

const projectCount = myProjects.length;

const Work = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="c-space"  id='work'>

        <p className="head-text">My Selected Work</p>

        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 items-center w-full">
          <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-[#0E0E10]">

            <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
              <h1 className="text-2xl font-bold italic shadow-sm" >{currentProject.title}</h1>
            </div>

            <div className="flex flex-col gap-5 text-white-600 my-5">
              {/* <p className="text-white text-2xl font-semibold  ">{currentProject.title}</p> */}
              <p className=" ">{currentProject.desc}</p>
              {/* <p className=" ">{currentProject.subdesc}</p> */}
            </div>

            <div className="flex items-center justify-between flex-wrap gap-5">
              <div className="flex items-center gap-3">
                {currentProject.tags.map((tag, index) => (
                  <div key={index} className="w-10 h-10 rounded-md p-2 bg-gray-900 bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center">
                    <img src={tag.path} alt={tag.name} />
                  </div>
                ))}
              </div>

              <a
                className="flex items-center gap-2 cursor-pointer text-white-600"
                href={currentProject.href}
                target="_blank"
                rel="noreferrer">
                <p>Check Live Site</p>
                <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
              </a>
            </div>

            <div className="flex justify-between items-center mt-7">
              <button className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient" onClick={() => handleNavigation('previous')}>
                <img src="/assets/left-arrow.png" alt="left arrow" />
              </button>

              <button className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient" onClick={() => handleNavigation('next')}>
                <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="border border-gray-800 bg-black rounded-lg h-[400px] opacity-80  flex justify-center items-center">
            <img src={currentProject.image} alt="Project Placeholder" className="w-full h-full object-fill rounded-lg" />
          </div>
        </div>
      </section>

  );
};

export default Work;
