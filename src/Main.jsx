import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {useReducer} from "react";
import BookingConfirmed from "./pages/BookingConfirmed";
import BookingForm from "./components/BookingForm";

function Main() {
    const navigate = useNavigate();

    const seededRandom = (seed) => {
        const m = 2 ** 35 - 31;
        const a = 185852;
        let s = seed % m;

        return () => (s = (s * a) % m) / m;
    };

    const fetchAPI = (date) => {
        let result = [];
        let random = seededRandom(date.getDate());

        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) result.push(i + ":00");
            if (random() < 0.5) result.push(i + ":30");
        }

        return result;
    };

    const submitAPI = (formData) => true;

    const updateTimes = (availableTimes, date) => {
        const response = fetchAPI(new Date(date));
        return (response.length !== 0) ? response : availableTimes;
    };

    const initializeTimes = initialAvailableTimes =>
        [...initialAvailableTimes, ...fetchAPI(new Date())];

    const [
        availableTimes,
        dispatchOnDateChange
    ] = useReducer(updateTimes, [], initializeTimes);

    const submitData = formData => {
        const response = submitAPI(formData);
        if (response) navigate('booking/confirmed')
    };

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="booking">
                    <Route index
                           element={<BookingForm
                               availableTimes={availableTimes}
                               dispatchOnDateChange={dispatchOnDateChange}
                               submitData={submitData}
                           />}/>
                    <Route path={'confirmed'} element={<BookingConfirmed/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </main>
    )
}

export default Main;