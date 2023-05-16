import React from "react";
import {motion} from "framer-motion";


import ResumeCard from "./ResumeCard";
const Experience = () =>{
    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.5}}} className="w-full">
                <div className="flex justify-center items-center flex-col text-center">
                    <p className="py-8 text-designColor tracking-[4px]">2022 -2023</p>
                    <h2 className="text-4xl font-bold">Experience</h2>
                </div>
                <div className="w-full h-[800px] mt-14 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard 
                        title="Front-End Developer Intern"
                        subTitle="ILife Technologies (Sep 2022 - Mar 2023)"
                        result="EXCELLENT"
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad Lorem ipsum dolor sit amet consectetur adipisicing."
                    />
                    <ResumeCard 
                        title="Front-End Developer Intern"
                        subTitle="ILife Technologies (Sep 2022 - Mar 2023)"
                        result="EXCELLENT"
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad Lorem ipsum dolor sit amet consectetur adipisicing."
                    />
                    <ResumeCard 
                        title="Front-End Developer Intern"
                        subTitle="ILife Technologies (Sep 2022 - Mar 2023)"
                        result="EXCELLENT"
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad Lorem ipsum dolor sit amet consectetur adipisicing."
                    />
                    
                </div>
            </motion.div>
    );
}

export default Experience;