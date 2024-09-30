import React, {useState} from "react";
import FormField from "./FormField";


function BookingForm({submitData, dispatchOnDateChange, availableTimes}) {

    const minimumDate = new Date().toISOString().split('T')[0];
    const defaultTime = availableTimes[0];
    const minimumNumberOfGuests = 1;
    const maximumNumberOfGuests = 10;
    const occasions = ['Birthday', 'Engagement', 'Anniversary'];

    const [date, setDate] = useState(minimumDate);
    const [time, setTime] = useState(defaultTime);
    const [numberOfGuests, setNumberGuests] = useState(minimumNumberOfGuests);
    const [occasion, setOccasion] = useState(occasions[0]);

    const areAllFieldsValid = () => date && time && numberOfGuests && occasion

    const handleDateChange = e => {
        setDate(e.target.value);
        dispatchOnDateChange(e.target.value);
    };

    const handleTimeChange = e => setTime(e.target.value);

    const handleFormSubmit = e => {
        e.preventDefault();
        submitData({date, time, numberOfGuests, occasion,});
    };


    return (
        <header>
            <section>
                <form onSubmit={handleFormSubmit}>
                    <FormField
                        label="Date"
                        htmlFor="booking-date"
                        hasError={!date}
                        errorMessage={'Please choose a valid date'}
                    >
                        <input
                            type="date"
                            id="booking-date"
                            name="booking-date"
                            min={minimumDate}
                            value={date}
                            required={true}
                            onChange={handleDateChange}
                        />
                    </FormField>
                    <FormField
                        label="Time"
                        htmlFor="booking-time"
                        hasError={!time}
                        errorMessage={'Please choose a valid time'}
                    >
                        <select
                            id="booking-time"
                            name="booking-time"
                            value={time}
                            required={true}
                            onChange={handleTimeChange}
                        >
                            {availableTimes.map(times =>
                                <option data-testid="booking-time-option" key={times}>
                                    {times}
                                </option>
                            )}
                        </select>
                    </FormField>
                    <FormField
                        label="Number of guests"
                        htmlFor="booking-number-guests"
                        hasError={!numberOfGuests || numberOfGuests < minimumNumberOfGuests || numberOfGuests > maximumNumberOfGuests}
                        errorMessage={'Please enter a number between 1 and 10'}
                    >
                        <input
                            type="number"
                            id="booking-number-guests"
                            name="booking-number-guests"
                            value={numberOfGuests}
                            min={minimumNumberOfGuests}
                            max={maximumNumberOfGuests}
                            required={true}
                            onChange={e => setNumberGuests(e.target.value)}
                        />
                    </FormField>
                    <FormField
                        label="Occasion"
                        htmlFor="booking-occasion"
                        hasError={!occasion}
                        errorMessage={'Please choose a valid occasion'}
                    >
                        <select
                            id="booking-occasion"
                            name="booking-occasion"
                            value={occasion}
                            required={true}
                            onChange={e => setOccasion(e.target.value)}
                        >
                            {occasions.map(occasion =>
                                <option data-testid="booking-occasion-option" key={occasion}>
                                    {occasion}
                                </option>
                            )}
                        </select>
                    </FormField>
                    <button
                        className="button-primary"
                        type="submit"
                        disabled={!areAllFieldsValid()}
                    >
                        Make your reservation
                    </button>
                </form>
            </section>
        </header>
    );
}

export default BookingForm;