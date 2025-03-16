import { LanguageData } from "@/constants";

const Language = () => {
  return (
    <section
      className="relative flex flex-col space-y-10 bg-cover bg-center"
    >
      {/* Heading */}
      <div className="flex justify-center text-center">
        <div className="text-white font-medium flex flex-col space-y-3 max-w-xl">
          <h1 className="text-4xl">Linguistic Skills</h1>
          <p className="text-xl font-thin">See my Language Skills.</p>
        </div>
      </div>

      <div

        className="relative flex flex-col lg:flex-row items-center justify-center lg:space-x-6 space-y-6 lg:space-y-0 py-5">
        {LanguageData.map(({ title, description }, index) => (

          <div
            key={index}
            className="p-6 w-[270px] sm:w-[300px] h-[200px] flex flex-col items-start justify-center
             border border-white/20 rounded-2xl text-white shadow-lg shadow-white/10
             bg-white/10 backdrop-blur-lg transition-transform duration-300 
             hover:scale-105 hover:bg-white/20 relative z-10"
          >
            <h5 className="text-2xl font-bold tracking-tight mt-2">{title}</h5>
            <p className="text-left opacity-75 mt-2">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Language;
