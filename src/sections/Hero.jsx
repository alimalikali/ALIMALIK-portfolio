"use client"
import { TiltCard } from "@/components/TiltCard";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col gap-10 relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-40 mt-20  gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Salam<span className="waving-hand">👋</span>, I am Ali
        </p>
        <p className="
        text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black !leading-normal
        text-gray_gradient">Building Products & ideas</p>
      </div>

      {/* Hero Image Section */}
      <div className="w-full flex justify-center items-center mt-10 overflow-hidden">
        <TiltCard className="relative overflow-hidden  w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full shadow-lg">
          <Link href="/who-is-ali">
            <img
              src="/assets/ali.jpg"
              alt="Ali Portfolio"
              className=" h-full w-full object-cover rounded-full shadow-lg"
            />
          </Link>
        </TiltCard>

      </div>

      {/* <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
