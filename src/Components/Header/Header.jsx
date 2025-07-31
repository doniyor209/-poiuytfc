import './header.css'

function Header() {
    return (
        <div>
            <header>
                <div className="container">
                    <h3>V0 Store</h3>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header
