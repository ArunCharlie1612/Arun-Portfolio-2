import React from "react";
import Title from "../layout/title";
import ProjectsCard from "./ProjectsCard";
import portfolio from "../../assets/images/projects/portfolio.png";
import arunpholio from "../../assets/images/projects/arun_pholio.png";
import charliedewi from "../../assets/images/projects/charlie_Dewi.png";


const Projects = () =>{
    return(
        <section className="w-[full] py-20 mx-auto border-b-[1px]" id="projects">
            <div className="flex justify-center items-center text-center">
                <Title 
                name="CHECK AND REVIEW MY PROJECT CODE"
                des="Projects"
                />
            </div>
            <div className="grid grid-cols-3 gap-8">
                <ProjectsCard 
                    title="Arun Portfolio"
                    src={portfolio}
                    src1="https://aruncharlie.netlify.app/"
                    git1="https://github.com/ArunCharlie1612/Arun-Portfolio"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
                />
                <ProjectsCard 
                    title="Charlie Dewi"
                    src={charliedewi}
                    src1="https://aruncharlie1612.github.io/Charlie_Dewi/"
                    git1="https://github.com/ArunCharlie1612/Charlie_Dewi"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
                />
                <ProjectsCard 
                    title="Arun Photofolio"
                    src={arunpholio}
                    src1="https://aruncharlie1612.github.io/Arun_photofolio/"
                    git1="https://github.com/ArunCharlie1612/Arun_photofolio"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
                />
            </div>
        </section>
    );
}

export default Projects;