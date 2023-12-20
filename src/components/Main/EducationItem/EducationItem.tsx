import classes from "./EducationItem.module.css"
import {IEducationItem} from "../../../data/info"

interface IEducationItemProps {
    educationPlace: IEducationItem,
}

export default function EducationItem({educationPlace}:IEducationItemProps) {
    return (
        <a href={educationPlace.link} target="_blank">
            <div className={classes.education__item}>
                <div className={classes.img}>
                    <img src={educationPlace.img} alt="Education place logo not found" />
                </div>
                <div className={classes.text}>
                    <h1 className={classes.title}>{educationPlace.direction}</h1>
                    <span className={classes.place}>
                        {educationPlace.institution}
                    </span>
                    <span className={classes.time}>
                        {educationPlace.date}
                    </span>
                </div>
            </div>
        </a>
    )
}
