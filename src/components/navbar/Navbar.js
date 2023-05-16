import React from "react"; 
import {Link} from "react-scroll"
// import logo from "../../assets/images/technologies/logo.png";
import {navLinksData} from "../../constants/index"

const Navbar = () =>{
    return(
        <div className="w-full h-20 mx-auto flex justify-between items-center border-b-[1px] border-b-gray-600 sticky top-0 bg-bodyColor z-50">
            <div className="">
                {/* <img src={logo} alt="logo"/> */}
            </div>
            <div className="">
                <ul className="flex items-center gap-10">
                    {navLinksData.map(({ id, title, link }) => (
                        <li 
                        className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                        key={id}>
                            <Link
                            activeClass="active"
                            to={link}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            
                            >{title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default Navbar;