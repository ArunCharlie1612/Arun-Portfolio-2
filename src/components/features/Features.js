import React from "react";
import Title from "../layout/title";
import Cards from "../layout/cards";
import {SiWebmoney,SiAntdesign,SiBmcsoftware} from "react-icons/si";

const Features = () =>{
    return(
        <section id="features" className="w-full mx-auto py-20 border-b-[1px]">
            <Title name="Features" des="What I Do" />
            <div className="grid grid-cols-3 gap-10">
                <Cards 
                    title="UI / UX Development"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
                    icon={<SiAntdesign />}
                />
                <Cards 
                    title="Web Development"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
                    icon={<SiWebmoney />}
                />
                <Cards 
                    title="Software Development"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
                    icon={<SiBmcsoftware />}
                />
                
                
                
            </div>
            
        </section>
    )
}

export default Features;