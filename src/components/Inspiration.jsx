import Image from "next/image";

import { inspirations } from "@/constants";

const Inspiration = () => {
  return (
    <section className="flex flex-col space-y-20">
      {/* Heading */}
      <div className="flex justify-center items-center text-center">
        <div className="text-white font-medium flex flex-col space-y-3 max-w-xl">
          <h1 className="text-4xl">My Inspiration</h1>
          <p className="text-xl font-thin">
            I find inspiration in individuals who embody resilience, compassion, and a commitment to positive change. Their stories motivate me to pursue excellence and contribute meaningfully to society.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-6 space-y-6 lg:space-y-0 py-5">

        {/* Inspiration Card Component */}
        {inspirations.map(({ img, name, description, founded }, index) => (
          <div
            key={index}
            className="p-6 w-[270px] sm:w-[300px] h-[500px] flex flex-col items-center justify-center
            border border-white/20 rounded-2xl text-white shadow-lg shadow-white/10
            bg-white/10 backdrop-blur-lg transition-transform duration-300 
            hover:scale-105 hover:bg-white/20" >
            <div className="flex items-center justify-center w-36 h-36">
              <Image src={img} alt={name} width={100} height={100} className="w-full h-full rounded-full object-cover" />
            </div>
            <div className="p-4 flex gap-2 flex-col text-center">
              <h3 className="text-xl font-bold mb-2">{name}</h3>
              <p className="opacity-70">{description}</p>
              <h2 className="opacity-80 font-bold mt-1">{founded}</h2>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};



export default Inspiration;
