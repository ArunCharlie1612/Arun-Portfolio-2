import React from "react";

const Title = ({name,des}) =>{
    return(
        <div className="flex flex-col gap-5 font-titleFont mb-14">
            <h3 className="text-sm uppercase text-designColor font-light tracking-wide">{name}</h3>
            <h1 className="text-5xl text-gray-300 capitalize font-bold">{des}</h1>
        </div>
    );
}

export default Title;