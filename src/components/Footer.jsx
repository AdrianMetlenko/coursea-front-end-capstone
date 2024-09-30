import logo from "../assets/logo.jpg"

function Footer() {
    return (<footer>
            <section>
                <div style={{alignItems: 'center', display: 'flex', padding: 20}}>
                    <img src={logo} alt="Little Lemon Logo"/>
                </div>
                <div>
                    <h3>Navigation</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>X</li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer