import { Icon } from '@iconify/react';

export const KNOWLEDGE: string[] = ['Responsive markup', 'JavaScript', 'React', 'REST API', 'Relation databases']
export const LANGUAGES: string[] = ['Ukrainian (native),', 'English (A2),', 'Russian (native),', 'Czech (A1).']
export const SOFT_SKILLS: string[] = ['Mathematical critical thinking,', ' disciplined,', ' responsible,', ' positive,', ' sociable,', ' humane,', ' polite !']

interface ISkills {
    title: string,
    icon: JSX.Element | string,
}

export const FRONTEND_SKILLS:ISkills[] = [
    {
        title: "HTML5",
        icon: <Icon icon="vscode-icons:file-type-html" width="20" height="20" className="icon" />,
    },
    {
        title: "CSS3",
        icon: <Icon icon="vscode-icons:file-type-css" width="20" height="20" className="icon" />,
        // icon: <i className="bx bxl-css3" style={{ color: 'blue' }}></i>,
    },
    {
        title: "Saas",
        icon:  <Icon icon="logos:sass" width="20" height="20" className="icon" />,
        // icon:  <i className="bx bxl-sass" style={{ color: 'palevioletred' }}></i>,
    },
    {
        title: "Bootstrap",
        icon: <Icon icon="logos:bootstrap" width="20" height="20" className="icon" />,
        // icon: <i className="bx bxl-bootstrap"style={{ color: 'purple' }}></i>,
    },
    {
        title: "Tailwind",
        icon: <Icon icon="vscode-icons:file-type-tailwind" width="20" height="20" className="icon" />,
        // icon: <i className="bx bxl-tailwind-css" style={{ color: 'teal' }}></i>,
    },
    {
        title: "JavaScript",
        icon:  <Icon icon="logos:javascript" width="20" height="20" className="icon" />,
        // icon:  <i className="bx bxl-javascript" style={{ color: 'orange' }}></i>,
    },
    {
        title: "TypeScript",
        icon:  <Icon icon="devicon:typescript" width="20" height="20" className="icon" />,
        // icon:  <i className="bx bxl-typescript" style={{ color: 'blue' }}></i>,
    },
    {
        title: "React",
        icon:  <Icon icon="skill-icons:react-dark" width="20" height="20" className="icon" />,
        // icon:  <i className="bx bxl-react"></i>,
    }

]

export const BACKEND_SKILLS:ISkills[] =[
    {
        title: "Node.js",
        icon: <Icon icon="vscode-icons:file-type-node" width="20" height="20" className="icon" />,
    },
    {
        title: "Express",
        icon: <Icon icon="vscode-icons:file-type-node" width="20" height="20" className="icon" />,
    },
    {
        title: "npm",
        icon: <Icon icon="mdi:npm" height="24" style={{color: "red"}} className="icon" />,
    },
    {
        title: "MySQL",
        icon: <Icon icon="devicon:mysql" height="24" className="icon" />,
    }
]