import '../css/NavBar.css'
// import logo from '../img/logo-sm.jpg'

export default function NavBar() {
    return(
        <nav className="nav-bar">
            <div className='nav-logo-text'>
                <h3>TIC Loot</h3>
            </div>
            
            <ul className="nav-items">
                <li><a href='https://tic-loot.com/'>Home</a></li>
                <li><a href='https://tic-loot.com/'>Add Loot</a></li>
                <li><a href='https://tic-loot.com/'>Import</a></li>
            </ul>
        </nav>
    )
}