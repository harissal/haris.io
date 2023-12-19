import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between lg:px-32 px-5 bg-white p-5">
            <div className="flex gap-10">

                
                <FaLinkedin size={32} className="hover:text-brightColor transition-all cursor-pointer" />
                <a href="https://github.com/harissal" target="_blank" rel="noopener noreferrer">
                <FaGithub size={32} className="hover:text-brightColor transition-all cursor-pointer"  />
                </a>
            </div>
            <div className="flex flex-row items-center cursor-pointer mt-5 lg:mt-0">
                <h1 className="text-3xl font-semibold">Haris Salkanović</h1>
            </div>
        </div>
    )
}

export default Footer;