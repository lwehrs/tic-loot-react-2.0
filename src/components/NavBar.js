import '../css/NavBar.css'
import logo from '../img/logo-sm.jpg'

export default function NavBar() {
    return(
        <nav className="nav-bar">
            <img src={logo} alt='logo' className='nav-logo' />
            <ul className="nav-items">
                <li><a href='http://localhost:3000/'>Home</a></li>
                <li><a href='http://localhost:3000/'>Add Loot</a></li>
                <li><a href='http://localhost:3000/'>Import</a></li>
            </ul>
        </nav>
    )
}