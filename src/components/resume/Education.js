import React from "react";
import {motion} from "framer-motion";
import ResumeCard from "./ResumeCard";



const Education = () =>{
    return (
            <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.5}}} className="w-full">
                <div className="flex justify-center items-center flex-col text-center">
                    <p className="py-8 text-designColor tracking-[4px]">2018 - 2023</p>
                    <h2 className="text-4xl font-bold">Education Qualification</h2>
                </div>
                <div className="w-full h-[800px] mt-14 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard 
                        title="Bachelor of Computer Science"
                        subTitle="Jamal Mohamed College(2020 - 2023)"
                        result="9.4/10"
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad Lorem ipsum dolor sit amet consectetur adipisicing."
                    />
                    <ResumeCard 
                        title="Higher Studies"
                        subTitle="St.Paul's Matriculation Higher Secondary School (2019 - 2020)"
                        result="79.0/100"
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad Lorem ipsum dolor sit amet consectetur adipisicing."
                    />
                    <ResumeCard  
                        title="Secondary Studies"
                        subTitle="St.Paul's Matriculation Higher Secondary School (2017 - 2018)"
                        result="89.9/100"
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad Lorem ipsum dolor sit amet consectetur adipisicing."
                    />
                </div>
            </motion.div>
    ); 
}

export default Education;