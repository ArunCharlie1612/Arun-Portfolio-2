import React, { useState } from "react";
import Title from "../layout/title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Achievements from "./Achievements";

const Resume = () =>{
    const[educationData,setEducationData] = useState(true);
    const[skillData,setSkillData] = useState(false);
    const[experienceData,setExperienceData] = useState(false);
    const[achievementsData,setAchievementsData] = useState(false);


    return(
        <section id="resume" className="w-[full] py-20 mx-auto border-b-[1px]">
            <div className="flex justify-center items-center text-center">
                <Title 
                name="Education and Experience"
                des="Resume"
                />
            </div>
            <div>
                <ul className="flex justify-center items-center">
                    <li 
                        onClick={() => 
                            setEducationData(true) &
                            setSkillData(false) & 
                            setExperienceData(false) &
                            setAchievementsData(false)
                        }
                        className={`${educationData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Education</li>
                    <li 
                        onClick={() => 
                            setEducationData(false) &
                            setSkillData(true) & 
                            setExperienceData(false) &
                            setAchievementsData(false)
                        }
                        className={`${skillData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Professional Skills</li>
                    <li 
                        onClick={() => 
                            setEducationData(false) &
                            setSkillData(false) & 
                            setExperienceData(true) &
                            setAchievementsData(false)
                        }
                        className={`${experienceData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Experience</li>
                    <li 
                        onClick={() => 
                            setEducationData(false) &
                            setSkillData(false) & 
                            setExperienceData(false) &
                            setAchievementsData(true)
                        }
                        className={`${achievementsData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Achievements</li>
                </ul>
            </div>
            {
                educationData && <Education />
            }
            {
                skillData && <Skills />
            }
            {
                experienceData && <Experience />
            }
            {
                achievementsData && <Achievements />
            }
        </section>
    );
}


export default Resume;