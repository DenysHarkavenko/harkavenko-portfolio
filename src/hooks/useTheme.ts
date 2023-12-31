import { useLayoutEffect, useState } from "react";


export function useTheme(){
    const [theme, setTheme] = useState('light')

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])
    
    return{theme, setTheme}
}