import React from 'react'
import { AiFillCheckCircle } from "react-icons/ai";

function About() {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p className="text-justify">
        Hello! I'm <b>Ayush Srivastava</b>, a passionate web developer dedicated to crafting elegant and dynamic web interfaces. My expertise lies in leveraging HTML, CSS, JavaScript, and React to build seamless, user-centric digital experiences that not only look stunning but function flawlessly.

Driven by a love for innovation and creativity, I thrive on creating solutions that captivate users and leave a lasting impression. My mission is to transform ideas into interactive, impactful websites that engage and delight audiences.</p>
        <br />
        <div>
        <h1 className="text-green-500 font-semibold text-xl">Education</h1>
            <span>
            <b> Bachelor of Technology (Computer Science & Engineering)</b>&ensp;<b className="text-red-500">(2021-2025)</b>
            <p>United College of Engineering and Research, Prayagraj</p>
            </span>
            <br />
            <span>
            <b>Intermediate (12th) - CBSE</b>&ensp;<b className="text-red-500">(2021)</b>
            <p>D.A.V Public School, Anpara</p>
            </span>
            <br />
            <span>
            <b>High School (10th) - CBSE</b>&ensp;<b className="text-red-500">(2019)</b>
            <p>D.A.V Public School, Anpara</p>
            </span>
            <br /><br />
            <h1 className="text-green-500 font-semibold text-xl">Skills & Expertise</h1>
            
            <span>I excel in programming languages such as JavaScript and C++, and have a solid foundational understanding of data structures and algorithms. My expertise covers essential concepts like arrays, linked lists, stacks, queues, and fundamental sorting algorithms. Additionally, I am adept at using Tailwind CSS to create modern, responsive designs that enhance the user experience. This combination of programming skills and design expertise enables me to develop efficient, visually appealing solutions that meet diverse needs.

            </span>
            <br /><br />
            <h1 className="text-green-500 font-semibold text-xl">Professional Experience</h1>
            <span>As a Teaching Assistant at Coding Ninjas, I played a pivotal role in shaping the learning journey of aspiring programmers. My responsibilities included delivering coding lectures, guiding students through complex concepts, and facilitating interactive workshops. I mentored students on their projects and assignments, offering insightful feedback to enhance their problem-solving skills and coding proficiency. 
            </span><br /><br />
            <h1 className="text-green-500 font-semibold text-xl">Achievements & Awards</h1>
            <span>Secured 3rd place in CodeChanakya, a prestigious coding competition, demonstrating strong problem-solving skills and programming proficiency among a competitive pool of participants.
                <p>CBSE State-Level Science ExhibitionRepresented my school at the state-level science exhibition organized
                by the Central Board of Secondary Education (CBSE).</p>
                <p>Accenture North America - Data Analytics and Visualization Job Simulation.</p>

            </span><br /><br />
            <h1 className="text-green-500 font-semibold text-xl">Mission Statement</h1>
            <span>My mission is to leverage my skills and creativity to deliver innovative solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
            </span><br /><br />
        </div>    
    </div>
  )
}

export default About
