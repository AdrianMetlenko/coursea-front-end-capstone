import logo from "../assets/logo.jpg"
import {Link} from "react-router-dom";

function Footer() {
    return (<footer>
            <section>
                <div style={{alignItems: 'center', display: 'flex', padding: 20}}>
                    <img src={logo} alt="Little Lemon Logo"/>
                </div>
                <div>
                    <h3>Navigation</h3>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/menu'}>Menu</Link></li>
                        <li><Link to={'/reserve'}>Reservations</Link></li>
                        <li><Link to={'/order'}>Order Online</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: 123 Home Street</li>
                        <li>Phone Number: 0404 123 456</li>
                        <li>Email: <Link
                            // color={'inherit'}
                            style={{cursor: 'pointer'}}
                            target="_top"
                            rel="noopener noreferrer"
                            href={`mailto:lemon@littlelemmon.com`}
                        >
                            lemon@littlelemmon.com
                        </Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href={'https://facebook.com'} target="_blank" rel="noreferrer">Facebook</a></li>
                        <li><a href={'https://instagram.com'} target="_blank" rel="noreferrer">Instagram</a></li>
                        <li><a href={'https://x.com'} target="_blank" rel="noreferrer">X</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer