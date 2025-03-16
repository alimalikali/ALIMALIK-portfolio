import { educationData } from "@/constants";

const Education = () => {
  return (
    <section className="flex flex-col space-y-10">
      {/* Heading */}
      <div className="flex justify-center text-center">
        <div className="text-white font-medium flex flex-col space-y-3 max-w-xl">
          <h1 className="text-4xl">Education & Certifications</h1>
          <p className="text-xl font-thin">See my education history.</p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-6 space-y-6 lg:space-y-0 py-5">
        {educationData.map(({ title, description, year }, index) => (
          <div
            key={index}
            className="p-6 w-[270px] sm:w-[300px] h-[200px] flex flex-col items-start justify-center
             border border-white/20 rounded-2xl text-white shadow-lg shadow-white/10
             bg-white/10 backdrop-blur-lg transition-transform duration-300 
             hover:scale-105 hover:bg-white/20"
          >
            <h1 className="text-lg opacity-80 font-semibold">{year}</h1>
            <h5 className="text-2xl font-bold tracking-tight mt-2">{title}</h5>
            <p className="text-left opacity-75 mt-2">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
