import React from "react";
import {BsGithub} from "react-icons/bs";
import {SiWebmoney} from "react-icons/si";


const ProjectsCard = ({title,src,des,git1,src1}) =>{
    return(
        <div className="w-full h-auto px-8 py-10 rounded-lg shadow-shadowOne flex flex-col
        bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900
        transition-colors duration-1000">
            <div className="w-full h-[80%] overflow-hidden rounded-lg">
                <img src={src} alt={title} className="w-full h-50 object-cover group-hover:scale-110 duration-300 cursor-pointer"/>
            </div>
            
            <div className="w-full mt-5 flex flex-col gap-5">
                <div className="flex justify-between items-center">
                    <h3 className="text-sm font-normal text-designColor uppercase">{title}</h3>
                    <div className="flex gap-2">
                        <span 
                            className="w-7 h-7 inline-flex text-lg rounded-full bg-black justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                            onClick={() => window.open(git1,"_blank")}
                        >
                            <BsGithub />
                        </span>
                        <span 
                            className="w-7 h-7 inline-flex text-lg rounded-full bg-black justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                            onClick={() => window.open(src1,"_blank")}
                        >
                            <SiWebmoney />
                        </span>
                    </div>
                </div>
                <p className="tracking-wide text-bodyFont text-sm hover:text-gray-100 duration-300">{des}</p>
            </div>
        </div>
    );
}

export default ProjectsCard;