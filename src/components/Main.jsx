import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/booking" element={<Booking/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </main>
    )
}

export default Main;