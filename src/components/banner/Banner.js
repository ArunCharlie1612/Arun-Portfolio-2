import React from "react";
import {useTypewriter,Cursor} from "react-simple-typewriter";
import {BsLinkedin,BsGithub,BsInstagram} from "react-icons/bs";
import {FaHtml5,FaCss3Alt,FaBootstrap,FaJava,FaReact} from "react-icons/fa";
import {SiOracle} from "react-icons/si";
import bgHero from "../../assets/bg-hero.png";



const Banner = () =>{
    const [text] = useTypewriter({
        words: ["FrontEnd Developer.","UI Designer.","Software Developer."],
        loop:true,
        delaySpeed: 2000,
        deleteSpeed: 10,
        typeSpeed:20,
    });
    return(
        <section id="home" className="w-full pb-10 flex items-center border-b-[1px] font-titleFont border-b-black">
            {/* Left Side... */}
            <div className="w-1/2 flex flex-col gap-10">
                <div className="flex flex-col gap-1">
                    <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
                    <h1 className="text-6xl font-bold text-white">Hi,I'm {" "}
                        <span className="text-designColor capitalize">
                            ARUN
                        </span>
                    </h1>
                    <h2 className="text-4xl text-white font-bold">
                        a{" "}
                        <span>{text}</span>
                        <Cursor 
                            cursorBlinking ="false"
                            cursorStyle="|"
                            cursorColor="#ff014f"
                        />
                    </h2>
                    <p className="text-white leading tracking-wide text-[10px] pt-[5px]"> 
                        
                        Proficient in HTML/CSS, JavaScript, and React design principles, with
                        experience working on both personal and team projects. And also I'm comfortable 
                        with Programming Language like JAVA.
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-base font-normal uppercase font-titleFont mb-4">Find me in</h2>
                        <div className="flex gap-2">
                            
                                <span className="bannerIcon" onClick={() => window.open("https://github.com/ArunCharlie1612","_blank")}>
                                    <BsGithub />
                                </span>
                                <span className="bannerIcon" onClick={() => window.open("https://www.linkedin.com/in/arunsu/","_blank")}>
                                    <BsLinkedin />
                                </span>
                            
                                <span className="bannerIcon" onClick={() => window.open("https://github.com/ArunCharlie1612","_blank")}>
                                    <BsInstagram />
                                </span>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-base font-normal uppercase font-titleFont mb-4">I've Been Working on</h2>
                        <div className="flex gap-2 flex-wrap">
                            
                                <span className="bannerIcon">
                                    <FaHtml5 />
                                </span>
                                <span className="bannerIcon">
                                    <FaCss3Alt />
                                </span>
                                <span className="bannerIcon">
                                    <FaBootstrap />
                                </span>
                           
                            
                                <span className="bannerIcon">
                                    <FaReact />
                                </span>
                                <span className="bannerIcon">
                                    <FaJava />
                                </span>
                                <span className="bannerIcon">
                                    <SiOracle />
                                </span>
                        </div>
                    </div>
                </div>
            </div> 
            {/* End Left Side... */}

            {/* Right Side.... */}
            <div className="w-1/2 flex justify-end items-center relative">
                <img src={bgHero} alt="ArunImg" className="w-[500px] h-auto z-10"/>
                <div className="absolute top-[150px] w-[400px] h-[430px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
            </div>
            {/* End Right Side... */}
        </section>
    )
}

export default Banner;