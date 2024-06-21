const NavBar = () => {
    return (
        <header className="header-bg w-full h-full bg-cover bg-center flex flex-col justify-center items-center">
            <h1 className="text-6xl font-bold mb-24 font-serif text-white">CREATORVERSE</h1>
            <nav className="flex space-x-20">
                <a href='/' className="btn btn-wide btn-info">View All Creators</a>
                <a href='/new' className="btn btn-wide btn-info">Add a Creator</a>
            </nav>
        </header>
    );
};


export default NavBar;