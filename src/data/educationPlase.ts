const duikt = require("../images/education/duikt.png");
const genius = require("../images/education/geniusspace.png");
const lits = require("../images/education/lits.png");
const cpa = require("../images/education/cpa2.png");
const cpe = require("../images/education/cpe1.png");

export interface IEducationItem {
    img: string,
    link: string,
    institution: string,
    date: string,
    direction: string,
}

export const educationPlace: IEducationItem[] = [
    // DUIKT 
    {
        img: duikt,
        direction: "Software Engineer",
        institution: "State University of information and communication technologies",
        date: "September 2022 - Present",
        link: "https://duikt.edu.ua/",
    },
    // GENIUS 
    {
        img: genius,
        direction: "Full-Stack dev.", 
        institution: "Genius.Space",
        date: "November 2023 - Present",
        link: "https://genius.space/fullstack/",
    },
    // LITS 
    {
        img: lits,
        direction: "Web UI development basics 2023",  
        institution: "Lviv IT School", 
        date: "September 2023 - October 2023",
        link: "https://prometheus.org.ua/course/course-v1:LITS+114+2022_T2",
    },
    // CPA 2
    {
        img: cpa,
        direction: "C++ Essentials – Part 2 (Intermediate)",  
        institution: "OpenEDG", 
        date: "March 2023 - May 2023",
        link: "https://edube.org/study/cppe2",
    },
    // CPE 1
    {
        img: cpe,
        direction: "C++ Essentials – Part 1 (Basics)",  
        institution: "OpenEDG", 
        date: "January 2023 - March 2023",
        link: "https://edube.org/study/cppe1",
    },
]