"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillsData } from "../constants/index";

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Merge all skills into one array when "All" is selected
  const allSkills = Object.values(skillsData).flat();
  const filteredSkills = selectedCategory === "All" ? allSkills : skillsData[selectedCategory];

  return (
    <section className="c-space" id="skills">
      <div className="bg-black text-white c-space p-4">
        <p className="head-text mb-4 text-center">My Skills</p>

        {/* Tabs for skill categories */}
        <div className="flex justify-center space-x-3 mb-6 flex-wrap gap-2">
          {["All", ...Object.keys(skillsData)].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm rounded-lg transition ${
                selectedCategory === category
                  ? "bg-green-900 text-white shadow-md"
                  : "bg-[#0e0e10] text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-col-4 xl:grid-cols-5 gap-6 place-items-center justify-center">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center bg-[#0e0e10] size-24 sm:size-44 md:size-48 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 sm:w-14 h-12 sm:h-14 transition-transform duration-300 hover:scale-110"
              />
              <p className="text-base sm:text-lg text-gray-400 mt-2">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
