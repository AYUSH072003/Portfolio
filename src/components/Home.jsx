import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import pic from "../../public/new.png";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { IoIosDownload } from "react-icons/io";


import { ReactTyped } from "react-typed";

function Home() 
{
  return (
    <>
    <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                <span className="text-xl">Welcome to My Digital Space</span>
                <div className="flex space-x-1 text-2xl md:text-4xl">
                    <h1>Hello, I'm a</h1>
                    {/*<span className="text-red-700 font-bold">Developer</span>*/}
                    <ReactTyped
                        className="text-red-700 font-bold"
                        strings={["Developer", "Programmer", "Coder"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop={true}
                    />
                </div>
                <br />
                <p className="text-sm md:text-md text-justify">Hello! I'm Ayush Srivastava, a final-year B.Tech Computer Science and Engineering student with a passion for technology and innovation. With a strong foundation in software development and full-stack development, I've honed my skills through various projects and competitions. One of my notable achievements includes securing 3rd position in CodeChanakya, where I showcased my problem-solving abilities and coding expertise.</p>
                <br />
                
                {/*Social Media Icons */}
                <div className="flex justify-between">
                    <div className="space-y-2">
                        <h1 className="font-bold">Available On</h1>
                        <ul className="flex space-x-5">
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100076609784743&mibextid=ZbWKwL" target="_blank">
                                    <FaFacebookSquare className="text-2xl cursor-pointer hover:scale-110 duration-300" />
                                </a>
                            </li>
                            <li><a href="https://www.linkedin.com/in/ayushoct7/" target="_blank">
                                    <FaLinkedin className="text-2xl cursor-pointer hover:scale-110 duration-300" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/ayushoct7" target="_blank">
                                    <FaSquareGithub className="text-2xl cursor-pointer hover:scale-110 duration-300" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/sri_ayush_07?igsh=MTlmYjZ4aGY2aGwyNg==" target="_blank">
                                    <FaSquareInstagram className="text-2xl cursor-pointer hover:scale-110 duration-300" />
                                </a>
                            </li>
                        </ul>                    
                    </div>
                    <div className="space-y-2">
                        <h1 className="font-bold">Currently Working On</h1>
                        <ul className="flex space-x-5">
                            <li>{" "}<FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" /></li>
                            <li>{" "}<IoLogoJavascript className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" /></li>
                            <li>{" "}<TiHtml5 className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" /></li>
                            <li>{" "}<FaCss3Alt className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" /></li>
                        </ul>                    
                    </div>
                    
                </div>
                
            </div>
            <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
                <img src={pic} className="rounded-full md:w-[450px] md:h-[450px]" alt="" />
            </div>
        </div>
    </div>
    <hr />
    </>
  ); 
}

export default Home