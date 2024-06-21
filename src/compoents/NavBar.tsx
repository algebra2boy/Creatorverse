const NavBar = () => {
    return (
        <header className="container-fluid">
            <h1 className="text-3xl font-bold underline">CREATORVERSE</h1>
            <button className="btn">Button</button>
            <nav className="container">
                <ul className="grid">
                    <li>
                        <a href='/' className="button">View All Creators</a>
                    </li>
                    <li>
                        <a href='/new' className="button">Add a Creator</a>
                    </li>
                </ul>
            </nav>
        </header>

    )
};


export default NavBar;