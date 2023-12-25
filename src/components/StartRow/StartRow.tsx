import { Icon } from '@iconify/react';
import classes from "./StartRow.module.css"

export default function StartRow(){
    return(
        <div className={classes.row}>
                <a href="/" className={classes.row__link}>
                    DENYS HARKAVENKO
                    <Icon icon="material-symbols-light:keyboard-arrow-right" height={"100px"}/>
                </a>
        </div>
    )
}