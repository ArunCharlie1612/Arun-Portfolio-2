import React from "react";
import {motion} from "framer-motion"

const Skills = () =>{
    return(
            <div className="w-full">
                <div className="flex justify-center items-center flex-col text-center">
                    <p className="py-8 text-designColor tracking-[4px]">What I Know</p>
                    <h2 className="text-4xl font-bold">Technical Skills</h2>
                </div>
                <div className="w-full mt-10 flex flex-col gap-5 px-10">
                    <div className="overflow-x-hidden">
                        <p>HTML5</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md">
                            <motion.span 
                                initial={{ x : "-100%", opacity: 0}}
                                animate={{x : 0, opacity: 1}}
                                transition={{duration: 0.5,delay:0.2}}
                                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">100%</span>
                            </motion.span>
                        </span>
                        <div className="overflow-x-hidden">
                        <p>CSS3</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md">
                            <motion.span 
                                initial={{ x : "-100%", opacity: 0}}
                                animate={{x : 0, opacity: 1}}
                                transition={{duration: 0.5,delay:0.5}}
                                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">90%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p>Bootatrap</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md">
                            <motion.span 
                                initial={{ x : "-100%", opacity: 0}}
                                animate={{x : 0, opacity: 1}}
                                transition={{duration: 0.5,delay:0.5}}
                                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">80%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p>Tailwind</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md">
                            <motion.span 
                                initial={{ x : "-100%", opacity: 0}}
                                animate={{x : 0, opacity: 1}}
                                transition={{duration: 0.5,delay:0.5}}
                                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">80%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p>React JS</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md">
                            <motion.span 
                                initial={{ x : "-100%", opacity: 0}}
                                animate={{x : 0, opacity: 1}}
                                transition={{duration: 0.5,delay:0.5}}
                                className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">75%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p>Core JAVA</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md">
                            <motion.span 
                                initial={{ x : "-100%", opacity: 0}}
                                animate={{x : 0, opacity: 1}}
                                transition={{duration: 0.5,delay:0.5}}
                                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">70%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p>Oracle</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md">
                            <motion.span 
                                initial={{ x : "-100%", opacity: 0}}
                                animate={{x : 0, opacity: 1}}
                                transition={{duration: 0.5,delay:0.5}}
                                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">70%</span>
                            </motion.span>
                        </span>
                    </div>
                    </div>
                </div>
            </div>
                
            
            
    );
}

export default Skills;