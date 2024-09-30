import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";
import {useReducer} from "react";
import BookingConfirmed from "./pages/BookingConfirmed";

function Main() {
    const navigate = useNavigate();

    function fetchAPI(date) {
        let result = [];
        for (let i = 17; i <= 23; i++) {
            const random = Math.random()
            if (random < 0.5) {
                result.push(i + ':00');
            } else {
                result.push(i + ':30');
            }
        }
        return result;
    }

    function submitAPI(formData) {
        return true;
    }

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date(date))}
    }

    const initialState = {availableTimes: fetchAPI(new Date())}
    const [state, dispatch] = useReducer(updateTimes, initialState);


    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate('booking/confirmed')
        }
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="booking">
                    <Route index
                           element={<Booking state={state} dispatch={dispatch} submitForm={submitForm}/>}/>
                    <Route path={'confirmed'} element={<BookingConfirmed/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </main>
    )
}

export default Main;