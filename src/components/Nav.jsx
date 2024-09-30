import logo from "../assets/logo.jpg"
import {Link} from "react-router-dom";

function Nav() {
    return <nav>
        <div style={{alignItems: 'center', display: 'flex', padding: 20}}>
            <img src={logo} alt="Little Lemon Logo"/>
        </div>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/menu'}>Menu</Link></li>
            <li><Link to={'/reserve'}>Reservations</Link></li>
            <li><Link to={'/order'}>Order Online</Link></li>
        </ul>
    </nav>
}

export default Nav