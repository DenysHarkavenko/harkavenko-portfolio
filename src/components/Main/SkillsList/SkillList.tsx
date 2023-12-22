import classes from './SkillList.module.css'
import { Icon } from '@iconify/react';
import { FRONTEND_SKILLS } from '../../../data/skills';
import { BACKEND_SKILLS } from '../../../data/skills';
import { KNOWLEDGE } from '../../../data/skills';
import { LANGUAGES } from '../../../data/skills';
import { SOFT_SKILLS } from '../../../data/skills';


export default function Skills() {
    return (
        
        <div className={classes.main__skills}>
            {/* Unmark list */}
            <h1>Industry Knowledge</h1>
            <ul className={classes.unmark__list}>
                {KNOWLEDGE.map(val => <li className={classes.unmark__list}>{val}</li>)}
            </ul>
            <br />
            {/* First Mark list */}
            <h1>My Stack</h1>
            <h2>Front-End:</h2>
            <ul>
                {FRONTEND_SKILLS.map(val => <li>{val.icon} {val.title}</li>)}
            </ul>
            <h2>Back-End:</h2>
            <ul>
                {BACKEND_SKILLS.map(val=> <li>{val.icon} {val.title}</li>)}
            </ul>
            <br />
            {/* Text line 1 */}
            <h1>Other Technical Skills</h1>
            <h2>Programming languages:</h2>
            <p>
                <Icon icon="devicon:cplusplus" width="20" height="20" className={classes.icon} />C++, 
                <Icon icon="devicon:csharp" width="20" height="20" className={classes.icon} />C#, 
                <Icon icon="logos:python" width="20" height="20" className={classes.icon}  /> Python (basic).
            </p>
            {/* Text line 2 */}
            <h2>Technologies:</h2>
            <p>
                <Icon icon="devicon:git" width="20" height="20" className={classes.icon} /> Git,
                <Icon icon="akar-icons:github-fill" width="20" height="20" className={classes.icon} /> GitHub,
                <Icon icon="devicon:figma" height="20" className={classes.icon} /> Figma, 
                <Icon icon="devicon:photoshop" width="20" height="20" className={classes.icon} /> Adobe PS.
            </p>
            <br />
            {/* Text line 3 */}
            <h1>Soft-skills</h1>
            <p>
                {SOFT_SKILLS.map(val => val + "")}
            </p>
            <br />
            {/* Unmark List */}
            <h1>Languages</h1>
            <ul className={classes.unmark__list}>
                {LANGUAGES.map(val => <li className={classes.unmark__list}>{val}</li>)}
            </ul>
            <br />
            {/* Third Mark List */}
            <h1>Media</h1>
            <ul className={classes.unmark__list}>
                <li className={classes.unmark__list}>
                    <a
                        href="https://www.linkedin.com/in/denys-harkavenko-52234a251/"
                        target="_blank"
                    >
                        <Icon icon="devicon:linkedin" width="20" height="20" className={classes.icon} /> LinkedIn
                    </a>
                </li>
                <li className={classes.unmark__list}>
                    <a
                        href="https://github.com/DenysHarkavenko"
                        target="_blank"
                    >
                        <Icon icon="akar-icons:github-fill" width="20" height="20" className={classes.icon} /> GitHub
                    </a>
                </li>
                <li className={classes.unmark__list}>
                    <a href="#" target="_blank">
                    <Icon icon="bi:telegram" width="20" height="20" style={{color:"skyblue"}} className={classes.icon}  /> Telegram
                    </a>
                </li>
            </ul>
        </div>
    )
}
