import React from "react";
import {HiArrowRight} from "react-icons/hi";


const Cards = ({title,des,icon}) =>{
    return(
        <div className="w-[full] h-80 py-10 px-8 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition duration-100 cursor-pointer group">
            <div className="h-[72] overflow-y-hidden">
                <div className="flex flex-col gap-6 translate-y-6 group-hover:translate-y-0 transition-translate duration-300">
                    <div className="">
                        <span className="text-4xl text-designColor">{icon}</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="text-2xl font-titleFont font-bold text-gray-300">{title}</h4>
                        <p className="text-sm font-bodyFont font-normal text-[13px] text-white">{des}</p>
                        <span className="text-designColor text-2xl">
                            <HiArrowRight />
                        </span>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    );
}

export default Cards;