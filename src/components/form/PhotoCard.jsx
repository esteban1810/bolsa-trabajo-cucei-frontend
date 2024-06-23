import React from "react";

function PhotoCard({image,title,date}) {
    return (
        <div className="relative">
            <img
                className="w-full"
                src={image}
                alt="Foto con referencia a la feria del empleo"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-end p-8">
                <div className="bg-black opacity-60 absolute inset-0" />
                <div>
                    <h5 className="text-white text-4xl font-bold text-center relative z-10">
                        {title}
                    </h5>
                    <p className="text-white font-bold relative z-10">
                        {date}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PhotoCard;
