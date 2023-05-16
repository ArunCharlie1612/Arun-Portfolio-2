import React from "react";
import {motion} from "framer-motion";


import ResumeCard from "./ResumeCard";


const Achievements = () =>{
    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.5}}} className="w-full">
                <div className="flex justify-center items-center flex-col text-center">
                    <p className="py-8 text-designColor tracking-[4px]">2021 - 2022</p>
                    <h2 className="text-4xl font-bold">Achievements</h2>
                </div>  
                <div className="w-full h-[800px] mt-14 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard 
                        title="Best Intern Award"
                        subTitle="ILife Technologies - 2022"
                        result="BEST"
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad Lorem ipsum dolor sit amet consectetur adipisicing."
                    />
                    <ResumeCard 
                        title="1rst Prize in Debugging"
                        subTitle="National Level Technical Symposium by RDB College - 2021"
                        result="1/3"
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad Lorem ipsum dolor sit amet consectetur adipisicing."
                    />
                    <ResumeCard 
                        title="Best Intern Award"
                        subTitle="ILife Technologies - 2022"
                        result="BEST"
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad Lorem ipsum dolor sit amet consectetur adipisicing."
                    />
                </div>
            </motion.div>
    );
}

export default Achievements;