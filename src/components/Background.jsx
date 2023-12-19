import React from "react";
import BackgroundCard from "../layouts/BackgroundCard";

const Background = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
            <h1 className="text-center font-semibold text-4xl mt-24 lg:mt-16 mb-8 lg:mb-7">Background</h1>

            <div className="bg-white p-5 rounded-md">
                <BackgroundCard title="Education" school="LaGuardia Community College" program="Computer Science Associate's Degree" years="Graduated 2020" desc="Enrolled in LaGuardia Community College Computer Science Associate's Program, furthering knowledge with Object-Oriented Programming, and receiving an Associate's Degree upon completion." />
                <BackgroundCard title="Education" school="The City College of New York" program="Computer Science Undergraduate Program" years="2016 - 2018" desc="Enrolled in The City College of New York Computer Science Undergraduate Program, gaining more experience with Object-Oriented Programming, and becoming familiar with JavaScript and C++. "/>
                <BackgroundCard title="Education" school="Queens College" program="Computer Science Undergraduate Program" years="2021 - " desc="Enrolled in Queens College Computer Science Undergraduate Program, understanding Theory of Computation, Database Management, Data Structures, Design and Analysis of Algorithms and more. "/>
                <BackgroundCard title="Experience" school="Spruce Technology" program="Software Engineer Intern" years="2023 - " desc="As an Intern at Spruce Technology, developed web applications through WordPress, React, and JavaScript, as well as development of back-end skills through use of software such as MongoDB." />
            </div>
        </div>
    )
}

export default Background;