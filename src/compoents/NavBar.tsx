import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header className="header-bg w-full h-full bg-cover bg-center flex flex-col justify-center items-center">
            <h1 className="text-6xl font-bold mb-24 font-serif text-white">
                CREATORVERSE
            </h1>
            <nav className="flex space-x-20">
                <Link to="/" className="btn btn-wide btn-info">
                    View All Creators
                </Link>
                <Link to="/new" className="btn btn-wide btn-info">
                    Add a Creator
                </Link>
            </nav>
        </header>
    )
}

export default NavBar
