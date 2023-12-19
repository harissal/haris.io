import React from "react";
import SkillCard from "../layouts/SkillCard";

const About = () => {

    const skill1 = "w-11/12"
    const skill2 = "w-4/5"
    const skill3 = "w-2/3"
    return (
        <div className="min-h-screen flex flex-col justify-around lg:gap-8 lg:px-32 px-5 bg-backgroundColor">
            <div className="mt-16">
                <h1 className="text-4xl font-semibold text-center lg:mt-2">About Me</h1>
            </div>

            <div className="mt-0">
                <div className="mb-10">
                    <p className="mt-4 lg:mt-2">
                    Hey there! I'm Haris, a passionate and aspiring web developer with an interest in crafting seamless and visually appealing digital experiences. At the core of my development toolkit, you'll find I have experience with ReactJS, Tailwind CSS, and Next.js, amongst other frameworks. With a solid foundation in JavaScript, I leverage its versatility to create interactive and user-friendly interfaces that captivate and engage users.
                    Beyond the frontend, expect a deep understanding of HTML and CSS to ensure pixel-perfect designs and seamless user experiences. Moreover, I bring the server-side magic into play with my experience in PHP, facilitating the creation of dynamic and data-driven web applications.
                    </p>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold">My Knowledge</h2>

                    <div>
                        <SkillCard title="React" val="95%" width={skill1} />
                        <SkillCard title="CSS" val="85%" width={skill2} />
                        <SkillCard title="JavaScript" val="70%" width={skill3} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;