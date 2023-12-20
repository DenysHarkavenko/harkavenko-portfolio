import './Skills.css'
const npm: string = require('../../../images/npm.png')
const sql: string = require('../../../images/MySQL.png')

const knowledge: string[] = ['Responsive markup', 'JavaScript', 'React', 'REST API', 'Relation databases']
const languages: string[] = ['Ukrainian (native)', 'English (A2)', 'Russian (native)', 'Czech (A1)']

interface ISkills {
    title: string,
    icon: JSX.Element | string,
}

const frontEndSkills:ISkills[] = [
    {
        title: "HTML5",
        icon: <i className="bx bxl-html5"style={{ color: 'purple' }}></i>,
    },
    {
        title: "CSS3",
        icon: <i className="bx bxl-css3" style={{ color: 'blue' }}></i>,
    },
    {
        title: "Bootstrap",
        icon: <i className="bx bxl-bootstrap"style={{ color: 'purple' }}></i>,
    },
    {
        title: "Saas",
        icon:  <i className="bx bxl-sass" style={{ color: 'palevioletred' }}></i>,
    },
    {
        title: "Tailwind",
        icon: <i className="bx bxl-tailwind-css" style={{ color: 'teal' }}></i>,
    },
    {
        title: "JavaScript",
        icon:  <i className="bx bxl-javascript" style={{ color: 'orange' }}></i>,
    },
    {
        title: "TypeScript",
        icon:  <i className="bx bxl-typescript" style={{ color: 'blue' }}></i>,
    },
    {
        title: "React",
        icon:  <i className="bx bxl-react"></i>,
    }

]

const backEndSkills:ISkills[] =[
    {
        title: "Node.js",
        icon: <i className="bx bxl-nodejs" style={{ color: 'green' }}></i>,
    },
    {
        title: "Express",
        icon: <i className="bx bxl-nodejs" style={{ color: 'green' }}></i>,
    },
    {
        title: "npm",
        icon: <img src={npm} alt="" />,
    },
    {
        title: "MySQL",
        icon: <img src={sql} alt="" />,
    }
]

export default function Skills() {
    return (
        
        <div className="main__skills">
            <h1>Industry Knowledge</h1>
            <ul>
                {knowledge.map(val => <li>{val}</li>)}
            </ul>
                <br />
            <h1>My Stack</h1>
            <h2>Front-End:</h2>
            <ul>
                {frontEndSkills.map(val => <li>{val.icon} {val.title}</li>)}
            </ul>
            <h2>Back-End:</h2>
            <ul>
                {backEndSkills.map(val=> <li>{val.icon} {val.title}</li>)}
            </ul>
                <br />
            <h1>Other Technical Skills</h1>
            <h2>Programming languages:</h2>
            <p>
                <i className="bx bxl-c-plus-plus" style={{ color: 'blue' }}></i>{' '}
                C++, C#, <i className="bx bxl-python"></i> Python (basic).
            </p>
            <h2>Technologies:</h2>
            <p>
                <i className="bx bxl-git"></i> Git,
                <i className="bx bxl-github"></i> GitHub,
                <i className="bx bxl-figma"></i> Figma, Axure,
                <i className="bx bxl-adobe"></i> Adobe PS.
            </p>
            <br />

            <h1>Soft-skills</h1>
            <p>
                Mathematical critical thinking, disciplined, responsible,
                positive, sociable, humane, polite !{' '}
            </p>
            <br />

            <h1>Languages</h1>
            <ul>
                {languages.map(val => <li>{val}</li>)}
            </ul>
            <br />

            <h1>Media</h1>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/denys-harkavenko-52234a251/"
                        target="_blank"
                    >
                        <i className="bx bxl-linkedin-square"></i> LinkedIn
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/DenysHarkavenko"
                        target="_blank"
                    >
                        <i className="bx bxl-github"></i> GitHub
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        DOU
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <i className="bx bxl-telegram"></i> Telegram
                    </a>
                </li>
            </ul>
        </div>
    )
}
