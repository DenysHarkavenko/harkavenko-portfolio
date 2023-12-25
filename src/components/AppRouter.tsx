import { Routes, Route } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import Start from '../pages/Start'
import PageError from '../pages/ErrorPage'

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/start" element={<Start />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="*" element={<PageError />} />
        </Routes>
    )
}
