import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import BookingForm from './BookingForm';

describe("BookingForm", () => {
    it("should submit all form data", () => {
        const submitData = jest.fn();
        const dispatchOnDateChange = jest.fn();
        const availableTimes = ['12:00', '13:00', '14:00'];

        render(<BookingForm submitData={submitData} dispatchOnDateChange={dispatchOnDateChange}
                            availableTimes={availableTimes}/>);

        fireEvent.change(screen.getByLabelText('Date'), {
            target: {value: '2024-12-12'},
        });

        fireEvent.change(screen.getByLabelText('Time'), {
            target: {value: '13:00'},
        });

        fireEvent.change(screen.getByLabelText('Number of guests'), {
            target: {value: '5'},
        });

        fireEvent.change(screen.getByLabelText('Occasion'), {
            target: {value: 'Birthday'},
        });

        fireEvent.click(screen.getByText('Make your reservation'));

        expect(submitData).toBeCalledWith({
            date: '2024-12-12',
            time: '13:00',
            numberOfGuests: '5',
            occasion: 'Birthday',
        });
    });
});