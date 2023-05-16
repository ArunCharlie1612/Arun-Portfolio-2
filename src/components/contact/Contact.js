import React, { useState } from "react";
import Title from "../layout/title";
import ContImg from "../../assets/ContImg.jpg";
import {BsLinkedin,BsGithub,BsInstagram} from "react-icons/bs";



const Contact = () =>{
        const[userName,SetuserName] = useState("");
        const[email,Setemail] = useState("");
        const[message,Setmessage] = useState("");
        const[phoneNumber,SetphoneNumber] = useState("");
        const[errMsg,SeterrMsg] = useState("");
        const[successMsg,SetsuccessMsg] = useState("");
        
        // Email Validation........
        const validateEmail =() =>{
            return String(email).toLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
        };

    const handleSend = (e) =>{
        
        e.preventDefault();
        if(userName === ""){
            SeterrMsg("Username is Required");
        }
        else if(phoneNumber === ""){
            SeterrMsg("Phone Number is Required");
        }
        else if(!validateEmail(email)){
            SeterrMsg("Enter a valid Email Id");
        }
        else if(message === ""){
            SeterrMsg("Message is Required");
        }
        else{
            SetuserName("");
            Setemail("");
            Setmessage("");
            SetphoneNumber("");
            SeterrMsg("");
            SetsuccessMsg(`Thankyou ${userName}, Your message sent Successfully...!`);
            console.log(userName,email,message,phoneNumber);
        }

        
    }
    return(
        <section id="contact" className="w-[full] py-20 mx-auto border-b-[1px]">
            <div className="flex justify-center items-center text-center">
                <Title 
                    name="Contact me"
                    des="CONTACT"
                />
            </div>
            <div className="w-full">
                <div className="w-full flex justify-between h-auto">
                    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne">
                        <img className="w-full h-54 object-cover rounded-lg" src={ContImg}/>
                        <div className="flex flex-col gap-3 mt-5">
                            <h3 className="text-3xl font-bold text-white uppercase">Arun S</h3>
                            <p className="text-sm font-normal text-gray-300 uppercase">Front-End Devloper</p>
                            <p className="text-sm text-gray-300 tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad.</p>
                            <p className="text-base text-gray-400 flex items-center gap-2">Phone: <span className="text-white">+91 9943824404</span></p>
                            <p className="text-base text-gray-400 flex items-center gap-2">Email:<span className="text-white">suarun2002@gmail.com</span></p>
                            <p className="uppercase text-sm text-gray-400">Find Me In</p>
                            <div className="flex gap-5 mt-3">
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
                    </div>
                    <div className="w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[!23272b] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne">
                        <form className="w-full flex flex-col gap-6">
                            {
                                errMsg && <p className="py-3 bg-gradient-to-r from-[#1e2024 to-[#23272b] shadow-shadowOne text-center text-designColor tracking-wide text-base animate-bounce">{errMsg}</p>
                            }
                            {
                                successMsg && <p className="py-3 bg-gradient-to-r from-[#1e2024 to-[#23272b] shadow-shadowOne text-center text-green-500 tracking-wide text-base animate-bounce">{successMsg}</p>
                            }
                            <div className="flex gap-10">
                                <div className="w-1/2 flex flex-col gap-3">
                                    <p className="uppercase text-sm text-gray-400 tracking-wide">Your Name</p>
                                    <input type="text" onChange={(e) =>SetuserName(e.target.value) } value={userName} className={`${ errMsg === "Username is Required" && "outline-designColor"} ContactInput`}/>
                                </div>
                                <div className="w-1/2 flex flex-col gap-3">
                                    <p className="uppercase text-sm text-gray-400 tracking-wide">Phone Number</p>
                                    <input type="text" onChange={(e) =>SetphoneNumber(e.target.value) } value={phoneNumber} className={`${ errMsg === "Phone Number is Required" && "outline-designColor"} ContactInput`}/>
                                </div> 
                            </div>
                            <div className="w-full flex flex-col gap-3">
                                <p className="uppercase text-sm text-gray-400 tracking-wide">Email</p>
                                <input type="email" onChange={(e) =>Setemail(e.target.value) } value={email} className={`${ errMsg === "Enter a valid Email Id" && "outline-designColor"} ContactInput`}/>
                            </div> 
                            <div className="w-full flex flex-col gap-3">
                                <p className="uppercase text-sm text-gray-400 tracking-wide">Message</p>
                                <textarea cols="30" rows="10" onChange={(e) =>Setmessage(e.target.value) } value={message} className={`${errMsg === "Message is Required" && "outline-designColor"} ContactTextArea`}></textarea>
                            </div> 
                            <div onClick={handleSend} className="w-full h-10 bg-[#141518] rounded-md text-sm cursor-pointer text-gray-400 tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent text-center flex justify-center items-center">
                                Send Message
                            </div>
                            {
                                errMsg && <p className="py-3 bg-gradient-to-r from-[#1e2024 to-[#23272b] shadow-shadowOne text-center text-designColor tracking-wide text-base animate-bounce">{errMsg}</p>
                            }
                            {
                                successMsg && <p className="py-3 bg-gradient-to-r from-[#1e2024 to-[#23272b] shadow-shadowOne text-center text-green-500 tracking-wide text-base animate-bounce">{successMsg}</p>
                            }
                        </form>
                    </div>
                </div>
            </div>

    </section>
    );
    

}

export default Contact;