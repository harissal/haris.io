import React from "react";

const BackgroundCard = (props) => {
    return (
        <div className="flex flex-col lg:flex-row py-4">
            <div className="w-full lg:w-2/4">
                <h2 className="font-semibold">{props.title}</h2>
                <div className="mt-2">
                    <p>{props.school}</p>
                    <p>{props.years}</p>
                </div>
            </div>
            <div>
                <h2 className="font-semibold mt-2 lg:mt-0">{props.program}</h2>
                <p className="mt-2">{props.desc}</p>
                <div className="bg-slate-500 w-full h-0.5 mt-2">
                </div>
            </div>
        </div>
    )
}

export default BackgroundCard;