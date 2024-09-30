import logo from "../assets/logo.jpg"

function Nav() {
    return <nav>
        <div style={{alignItems: 'center', display: 'flex', padding: 20}}>
            <img src={logo} alt="Little Lemon Logo"/>
        </div>
        <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Reservations</a></li>
            <li><a>Order Online</a></li>
            <li><a>Login</a></li>
        </ul>
    </nav>
}

export default Nav