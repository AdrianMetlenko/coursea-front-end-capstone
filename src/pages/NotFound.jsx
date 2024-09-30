import {useLocation} from "react-router-dom";

function Booking() {
    const {pathname} = useLocation()
    return (
        <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
            <h1>{'404'}</h1>
            <h2>{`The page "${pathname}" was not found`}</h2>
        </div>
    )
}

export default Booking;