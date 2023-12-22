import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher'
import { useTheme } from './hooks/useTheme'

function App() {
    const {theme, setTheme} = useTheme()
    return (
        <div className="App">
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
            <Header />
            <Main />
        </div>
    )
}

export default App
