import {fireEvent, render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

it('Renders the home page heading', () => {
    render(<BrowserRouter><App/></BrowserRouter>);
    expect(screen.getByText("Reserve Table")).toBeVisible();
})

it('navigates to the reserve page when clicked', () => {
    render(<BrowserRouter><App/></BrowserRouter>);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Choose Date")).toBeVisible()
})