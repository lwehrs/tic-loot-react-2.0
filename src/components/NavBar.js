import '../css/NavBar.css'

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