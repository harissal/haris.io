import React from "react";
import weatherbot from "../assets/weatherbot.png";
import jam from "../assets/jam.png";
import tictactoe from "../assets/tictactoe.png";
import geats from "../assets/geats.png";

const Portfolio = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-backgroundColor">
            <h1 className="text-center font-semibold text-4xl pt-24 lg:pt-16 pb-8 lg:mb-4">Portfolio</h1>

            <div className="flex items-center justify-center flex-wrap gap-10 pb-5 lg:pb-0">
                <div className="w-full lg:w-1/4">
                <a href="https://weatherman-tau.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer" src={weatherbot} alt="weatherbot" />
                </a>
                </div>
                <div className="w-full lg:w-1/4">
                    <a href="https://jam-beta-nine.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer" src={jam} alt="jam" />
                </a>
                </div>
                <div className="w-full lg:w-1/4">
                    <a href="https://tictactoe-snowy.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer" src={tictactoe} alt="tictactoe" />
                </a>
                </div>
                <div className="w-full lg:w-1/4">
                    <a href="https://goober-eats.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer" src={geats} alt="geats" />
                </a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio; 