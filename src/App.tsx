import { NavBar } from './compoents'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='h-screen'>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
