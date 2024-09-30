import bruschetta from "../assets/bruschetta.jpg"
import {Link} from "react-router-dom";

function Home() {
    return (
        <header>
            <section>
                <div>
                    <h2>Little Lemon</h2>
                    <h3>Sydney</h3>
                    <p>We are a family owned Fusion French restaurant, focused on traditional recipes served with a
                        modern twist.</p>
                    <Link to="booking">
                        <button>Reserve Table</button>
                    </Link>
                </div>
                <img src={bruschetta} alt={'Bruschettas served on board'}/>
            </section>
        </header>
    )
}

export default Home;