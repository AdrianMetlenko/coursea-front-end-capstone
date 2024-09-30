import bruschetta from "../assets/bruschetta.jpg"

function Header() {
    return (
        <header>
            <section>
                <div>
                    <h2>Little Lemon</h2>
                    <h3>Sydney</h3>
                    <p>We are a family owned Fusion French restaurant, focused on traditional recipes served with a
                        modern twist.</p>
                    <button>Reserve a Table</button>
                </div>
                <img src={bruschetta} alt={'Bruschettas served on board'}/>
            </section>
        </header>
    )
}

export default Header;