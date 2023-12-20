import "./_Main.css"
import EducationItem from "./EducationItem/EducationItem";
import Info from "./Info/Info";
import { educationPlace } from "../../data/info";

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
                        {educationPlace.map(place => <EducationItem educationPlace={place} key={Date.now()}/>)}
                    </div>
                </div>
                <Info/>
            </div>
        </main>
    )
}
