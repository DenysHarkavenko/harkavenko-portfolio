import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";
import { useTheme } from "../hooks/useTheme"

export default function MainPage(){
    const {theme, setTheme} = useTheme()
    return(
        <>
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
            <Header/>
            <Main/>
        </>
    )
}