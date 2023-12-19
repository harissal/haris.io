import React from "react";
import Button from "../layouts/Button";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 bg-backgroundColor">
            <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4">
                <h1 className="text-5xl font-semibold leading-tight mt-24">Hi! I'm Haris Salkanović</h1>
                <p>I am a <span className="text-brightColor">Front-End</span> Developer based in New York City. I have a passion for web design and love to create for web and mobile devices.</p>
                <Button title="Get In Touch" />
            </div>
            <div className="mt-20">

            </div>
        </div>
    )
}

export default Home;