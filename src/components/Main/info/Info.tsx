import './_Info.css'
const npm: string = require('../../../images/npm.png')
const sql: string = require('../../../images/MySQL.png')

export default function Info() {
    return (
        <div className="main__skills">
            <h1>Industry Knowledge</h1>
            <ul>
                <li>Responsive markup</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>REST API</li>
                <li>Relation databases</li>
            </ul>
            <br />

            <h1>My Stack</h1>
            <h2>Front-End:</h2>
            <ul>
                <li>
                    <i className="bx bxl-html5" style={{ color: 'red' }}></i> HTML5 (<i className="bx bxl-bootstrap" style={{ color: 'purple' }}></i>Bootstrap5),
                </li>
                <li>
                    <i className="bx bxl-css3" style={{ color: 'blue' }}></i>CSS3 (
                    <i className="bx bxl-sass" style={{ color: 'palevioletred' }}></i>Sass,
                    <i className="bx bxl-tailwind-css"style={{ color: 'teal' }}></i>Tailwind),
                </li>
                <li>
                    <i className="bx bxl-javascript" style={{ color: 'orange' }}></i>JavaScript,
                </li>
                <li>
                    <i className="bx bxl-typescript" style={{ color: 'blue' }}></i> Typescript,
                </li>
                <li>
                    <i className="bx bxl-react"></i> React.
                </li>
            </ul>
            <h2>Back-End:</h2>
            <ul>
                <li>
                    <i className="bx bxl-nodejs" style={{ color: 'green' }}></i> Node.js,
                </li>
                <li>
                    <i className="bx bxl-nodejs" style={{ color: 'green' }}></i> Express,
                </li>
                <li>
                    <img src={npm} alt="" className="npm img_ic" /> npm,
                </li>
                <li>
                    <img src={sql} alt="" className="sql img_ic" /> MySQL
                </li>
            </ul>
            <br />

            <h1>Other Technical Skills</h1>
            <h2>Programming languages:</h2>
            <p>
                <i className="bx bxl-c-plus-plus"></i> C++, C#,{' '}
                <i className="bx bxl-python"></i> Python (basic).
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
                <li>Ukrainian (native),</li>
                <li>English (A2),</li>
                <li>Russian (native),</li>
                <li>Czech (A1).</li>
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
