import StartRow from "../components/StartRow/StartRow";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";
import { useTheme } from "../hooks/useTheme";

export default function Start(){
    const {theme, setTheme} = useTheme()
    return(
        <div className="container-fix">
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
            <StartRow/>
        </div>
    )
}