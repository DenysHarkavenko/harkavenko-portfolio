import classes from "./Header.module.css"
const logo = require("../../images/logo.jpg");

export default function Header() {
    return (
        <header className={classes.header}>
            <div className="container">
                <div className={classes.row}>
                    <div className={classes.content}>
                        <div className={classes.content__title}>
                            <h1>Denys Harkavenko</h1>
                            <p>Trainee Full-Stack dev.</p>
                        </div>
                        <div className={classes.content__contacts}>
                            <ul>
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href="mailto:harkavenkodev@gmail.com" target="_blank"> harkavenkodev@gmail.com</a>
                                </li>
                                <li>
                                    <i className='bx bx-phone' ></i>
                                    <a href="tel:+380664347591"> +38 (066) 434 75 91</a>
                                </li>
                                <li>
                                    <i className='bx bx-flag'></i>
                                    <a href="https://www.google.com/maps/place/%D0%9B%D0%B8%D0%B1%D0%B5%D1%80%D0%B5%D1%86/@50.7573499,15.0206099,12.5z/data=!4m6!3m5!1s0x470936999212df43:0x400af0f66155990!8m2!3d50.76628!4d15.0543387!16zL20vMDFrajV4?entry=ttu" target="_blank"> Liberec, Czech Republic</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <a href="">
                            <img src={logo} alt="Logo not found"/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
