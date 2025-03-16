"use client";

import Button from "@/components/Button";
import Link from "next/link";
import { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("alimalikali1928@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        
        {/* Grid Item 1 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full border border-black bg-[#0e0e10]  rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="/assets/ali2.svg"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-cover object-top"
            />
            <div>
              <p className="text-xl font-semibold mb-2 text-white">Hi, I’m Ali Zulfiqar Malik</p>
              <p className="text-[#afb0b6] text-base">
                With 2+ years of experience, I have honed my skills in full stack JS, both frontend and backend.
              </p>
            </div>
          </div>
        </div>

        {/* Grid Item 2 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full border border-black bg-[#0e0e10]  rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="assets/images/cat.jpeg"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-cover"
            />
            <div>
              <p className="text-xl font-semibold mb-2 text-white">Tech Stack</p>
              <p className="text-[#afb0b6] text-base">
                I specialize in a MERN , MEVN , NextJs and tools that allow me to build robust and scalable applications.
              </p>
            </div>
          </div>
        </div>

        {/* Grid Item 3 */}
        <div className="col-span-1 xl:row-span-4">
          <div className="w-full h-full border border-black bg-[#0e0e10]  rounded-lg sm:p-7 p-4 flex flex-col gap-5">
          <img
              src="assets/images/passion.jpeg"
              alt="grid-3"
              className="w-full sm:h-[330px] h-fit object-cover"
            />
            <div>
              <p className="text-xl font-semibold mb-2 text-white">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="text-[#afb0b6] text-base">
                I&apos;m based in Lahore, Pakistan and open to remote work worldwide.
              </p>
              <Link href="/#contact">
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </Link>
            </div>
          </div>
        </div>

        {/* Grid Item 4 */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="w-full h-full border border-black bg-[#0e0e10]  rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="assets/images/passionlandscape.jpg"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-cover"
            />
            <div>
              <p className="text-xl font-semibold mb-2 text-white">My Passion for Coding</p>
              <p className="text-[#afb0b6] text-base">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        {/* Grid Item 5 (Contact Info) */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="w-full h-full border border-black bg-[#0e0e10]  rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="assets/images/mail.jpeg"
              alt="grid-4"
              className="w-full md:h-[150px] sm:h-[276px] h-fit object-fill sm:object-top"
            />
            <div className="space-y-2">
              <p className="text-[#afb0b6] text-base text-center">Contact me</p>
              <div className="cursor-pointer flex justify-center items-center gap-2" onClick={handleCopy}>
                <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  alimalikali1928@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
