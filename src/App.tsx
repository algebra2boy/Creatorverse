import { NavBar } from './compoents'
import { Outlet } from 'react-router-dom'

function App() {
    return (
        <div className="h-screen">
            <NavBar />
            <div className="bg-slate-900">
                <Outlet />
            </div>
        </div>
    )
}

export default App
