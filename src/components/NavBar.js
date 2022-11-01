import '../css/NavBar.css'

export default function NavBar() {
    return(
        <nav className="nav-bar">
            <h3 className='nav-title'>TIC LOOT</h3>
            <ul className="nav-items">
                <li><a href='http://localhost:3000/'>Home</a></li>
                <li><a href='http://localhost:3000/'>Add Loot</a></li>
                <li><a href='http://localhost:3000/'>Import</a></li>
            </ul>
        </nav>
    )
}