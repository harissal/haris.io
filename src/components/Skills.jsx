import React from "react";
import SkillsCard from "../layouts/SkillsCard";
import {  BsWordpress } from "react-icons/bs";
import { GrApple } from "react-icons/gr";
import { SiVisualstudiocode, SiTailwindcss, SiMongodb } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaPhp } from "react-icons/fa6";



const Skills = () => {

    const icon1 = <GrReactjs size={55} className="text-brightColor" />;
    const icon2 = <GrApple size={55} className="text-brightColor" />;
    const icon3 = <BsWordpress size={55} className="text-brightColor" />;
    const icon4 = <SiVisualstudiocode size={55} className="text-brightColor" />;
    const icon5 = <FaNodeJs size={55} className="text-brightColor" />;
    const icon6 = <SiTailwindcss size={55} className="text-brightColor" />;
    const icon7 = <SiMongodb size={55} className="text-brightColor" />;
    const icon8 = <AiFillGithub size={55} className="text-brightColor" />;
    const icon9 = <FaPhp size={55} className="text-brightColor" />;

    return (
        <div className="min-h-screen flex flex-col justify-center items-centter lg:px-32 px-5 bg-backgroundColor">
            <h1 className="text-center font-semibold text-4xl mt=24 lg:mt-14 mb-8 lg:mb-4">Frameworks, Languages, & Software</h1>

            <div className="flex flex-wrap items-center justify-center gap-5 mt-4">
                <SkillsCard icon={icon1} title="React" />
                <SkillsCard icon={icon2} title="iOS Development" />
                <SkillsCard icon={icon3} title="Wordpress" />
                <SkillsCard icon={icon5} title="NodeJS" />
                <SkillsCard icon={icon6} title="Tailwind" />
                <SkillsCard icon={icon7} title="MongoDB" />
                <SkillsCard icon={icon4} title="Visual Studio Code" />
                <SkillsCard icon={icon8} title="Github" />
                <SkillsCard icon={icon9} title="PHP Development" />
            </div>
        </div>
    );
    }

export default Skills;