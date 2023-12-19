import "./_Main.css"
import Info from "./info/Info";
const duikt = require("../../images/education/duikt.png");
const genius = require("../../images/education/geniusspace.png");
const lits = require("../../images/education/lits.png");
const cpe = require("../../images/education/cpe1.png");
const cpa = require("../../images/education/cpa2.png");

export default function Main() {
    return (
        <main className="main">
            <div className="container">
                <div className="main__content">
                    <div className="main__content-about">
                        <h1>— Briefly about me</h1>
                        <p>
                            Hi, I am an 18 year old Front-End developer who is planning to move to Full-stack development. I’m very active and positive, so  will always find my place in the team. I’m constantly striving to develop and really appreciate the experience of communicating with experienced people. I like working in a team, but also have a clear discipline and dedication. 
                            <br/><br/>
                            For 4 years I have been studying information technology, including continuous improvement of knowledge in applied disciplines (math, english, physic). I’m always highly motivated and eager to improve, so you will always see the result of my self-improvement! 
                        </p>
                    </div>
                    <div className="main__content-experience">
                        <h1>— Experience</h1>
                        <p>
                        I have no commercial development experience, but I have quite a bit of general development experience in different languages. I have uploaded several web projects to my GitHub where I demonstrate my skills in html-layout, js/ts, react. I have a small weather app where I worked with REST APIs and React (TypeScript), as well as a ToDoList that made during my React course. Have a good understanding of how the Internet works, so I learn some related technologies very quickly.
                        <br/><br/>
                        I have a good understanding of OOP principles and have been learning C# for the last 3 months to improve my overall knowledge. I also have experience with relational databases (MySql) using phpMyAdmin and HeidiSQL.
                        </p>
                    </div>
                    <div className="main__content-education">
                        <h1>— Education & courses</h1>
                        <a href="https://duikt.edu.ua/" target="_blank">
                            <div className="education__item">
                                <div className="education__item-img">
                                    <img src={duikt} alt="Education place logo not found"/>
                                </div>
                                <div className="education__item-text">
                                    <h1 className="item__text-title">Software Enginner</h1>
                                    <span className="item__text-place">State University of information and communication technologies</span>
                                    <span className="item__text-time">September 2022 - Present</span>
                                </div>
                            </div>
                        </a>
                        <a href="https://genius.space/fullstack/" target="_blank">
                            <div className="education__item">
                                <div className="education__item-img">
                                    <img src={genius} alt="Education place logo not found"/>
                                </div>
                                <div className="education__item-text">
                                    <h1 className="item__text-title">Full-Stack dev.</h1>
                                    <span className="item__text-place">Genius.Space</span>
                                    <span className="item__text-time">November 2023 - Present</span>
                                </div>
                            </div>
                        </a>
                        <a href="https://prometheus.org.ua/course/course-v1:LITS+114+2022_T2" target="_blank">
                            <div className="education__item">
                                <div className="education__item-img">
                                    <img src={lits} alt="Education place logo not found"/>
                                </div>
                                <div className="education__item-text">
                                    <h1 className="item__text-title">Basics of Web UI development 2023</h1>
                                    <span className="item__text-place">Lviv IT School</span>
                                    <span className="item__text-time">September 2023 - October 2023 </span>
                                </div>
                            </div>
                        </a>
                        <a href="https://edube.org/study/cppe2" target="_blank">
                            <div className="education__item">
                                <div className="education__item-img">
                                    <img src={cpa} alt="Education place logo not found"/>
                                </div>
                                <div className="education__item-text">
                                    <h1 className="item__text-title">C++ Essentials – Part 2 (Intermediate)</h1>
                                    <span className="item__text-place">OpenEDG</span>
                                    <span className="item__text-time">March 2023 - May 2023</span>
                                </div> 
                            </div>
                        </a>
                        <a href="https://edube.org/study/cppe1" target="_blank">
                            <div className="education__item">
                                <div className="education__item-img">
                                    <img src={cpe} alt="Education place logo not found"/>
                                </div>
                                <div className="education__item-text">
                                    <h1 className="item__text-title">C++ Essentials – Part 1 (Basics)</h1>
                                    <span className="item__text-place">OpenEDG</span>
                                    <span className="item__text-time">December 2022 - February 2023</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <Info/>
            </div>
        </main>
    )
}
