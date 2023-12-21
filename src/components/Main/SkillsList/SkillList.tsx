import './SkillList.css'
import { Icon } from '@iconify/react';
import { frontEndSkills } from '../../../data/skills';
import { backEndSkills } from '../../../data/skills';
import { knowledge } from '../../../data/skills';
import { languages } from '../../../data/skills';
import { softSkills } from '../../../data/skills';


export default function Skills() {
    return (
        
        <div className="main__skills">
            {/* Unmark list */}
            <h1>Industry Knowledge</h1>
            <ul className="unmark__list">
                {knowledge.map(val => <li className="unmark__list">{val}</li>)}
            </ul>
            <br />
            {/* First Mark list */}
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
            {/* Text line 1 */}
            <h1>Other Technical Skills</h1>
            <h2>Programming languages:</h2>
            <p>
                <Icon icon="devicon:cplusplus" width="20" height="20" className="icon" />C++, 
                <Icon icon="devicon:csharp" width="20" height="20" className="icon" />C#, 
                <Icon icon="logos:python" width="20" height="20" className="icon" /> Python (basic).
            </p>
            {/* Text line 2 */}
            <h2>Technologies:</h2>
            <p>
                <Icon icon="devicon:git" width="20" height="20" className="icon" /> Git,
                <Icon icon="akar-icons:github-fill" width="20" height="20" className="icon" /> GitHub,
                <Icon icon="devicon:figma" height="20" className="icon" /> Figma, 
                <Icon icon="devicon:photoshop" width="20" height="20" className="icon" /> Adobe PS.
            </p>
            <br />
            {/* Text line 3 */}
            <h1>Soft-skills</h1>
            <p>
                {softSkills.map(val => val + "")}
            </p>
            <br />
            {/* Unmark List */}
            <h1>Languages</h1>
            <ul className="unmark__list">
                {languages.map(val => <li className="unmark__list">{val}</li>)}
            </ul>
            <br />
            {/* Third Mark List */}
            <h1>Media</h1>
            <ul className="unmark__list">
                <li className="unmark__list">
                    <a
                        href="https://www.linkedin.com/in/denys-harkavenko-52234a251/"
                        target="_blank"
                    >
                        <Icon icon="devicon:linkedin" width="20" height="20" className="icon" /> LinkedIn
                    </a>
                </li>
                <li className="unmark__list">
                    <a
                        href="https://github.com/DenysHarkavenko"
                        target="_blank"
                    >
                        <Icon icon="akar-icons:github-fill" width="20" height="20" className="icon" /> GitHub
                    </a>
                </li>
                <li className="unmark__list">
                    <a href="#" target="_blank">
                    <Icon icon="bi:telegram" width="20" height="20" style={{color:"skyblue"}} className="icon"  /> Telegram
                    </a>
                </li>
            </ul>
        </div>
    )
}
