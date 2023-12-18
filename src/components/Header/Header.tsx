import "./_Header.css"
const logo = require("../../images/logo.jpg");

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__row content">
                        <div className="content-title">
                            <h1>Denys Harkavenko</h1>
                            <p>Trainee Full-Stack dev.</p>
                        </div>
                        <div className="content-contacts">
                            <ul>
                                <li>
                                    <a href="#">harkavenkodev@gmail.com</a>
                                </li>
                                <li>
                                    <a href="tel:+380664347591">+38 (066) 434 75 91</a>
                                </li>
                                <li>
                                    <a href="#">Liberec, Czech Republic</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="header__row logo">
                        <img src={logo} alt="Logo not found"/>
                    </div>
                </div>
            </div>
        </header>
    )
}
