import { useState } from "react";
import classes from "./ThemeSwitcher.module.css"
import { Icon } from '@iconify/react';

interface IThemeProps{
    theme: string,
    setTheme: (newTheme: string) => void
}

export default function ThemeSwitcher({ theme, setTheme }: IThemeProps) {
    function changeTheme(){
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return(
        <section className={classes.row}>
            <button
                className={classes.themeBtn}
                onClick={changeTheme}
            >
                {theme === 'light' ? (
                    <Icon icon="ph:moon-light" className={classes.icon} />
                ) : (
                    <Icon icon="ph:sun-light" className={classes.icon} />
                )}
                
            </button>
        </section>
    )
}