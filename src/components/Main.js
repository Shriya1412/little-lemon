import React, { useReducer} from "react";
import {Route, Routes, useNavigate } from "react-router-dom";
import Booking from "../components/Booking";
import ConfirmedBooking from "../components/BookingConfirmation";
import Header from "../components/Header";
import seedrandom from 'seedrandom';

const Main = () => {
    // function to generate random times
    const seededRandom = (seed) => {
        const rng = seedrandom(seed); // Create a seeded random number generator using the seed
        return () => rng(); // Return a function that generates a random number using the seeded RNG
    };

    // function to fetch available times
    const fetchAPI = (date) =>{
        const random = seededRandom(date.getDate());
        const result = [];
    
        // Generate time slots between 17:00 and 23:30 in half-hour intervals
        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) result.push(i + ':00'); // Add available time at the beginning of the hour
            if (random() < 0.5) result.push(i + ':30'); // Add available time at the half hour mark
        }
        return result; // return the available times
    };

    // function to simulate form submission
    const submitAPI = function(formData) {
        return true;
    };

    //Initial state for the component state
    const initialState = {availableTimes:  fetchAPI(new Date())}

    //Reducer function to update the state
    const [state, dispatch] = useReducer(updateTimes, initialState);

    //Hook to navigate to the confirmed page
    const navigate = useNavigate();

    //Function to update the state based on the available times
    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date(date))}
    }

     // Function to handle form submission
    function submitForm (formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed")
        }
    }

    // Render the main component
    return(
        <main className="main">
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/reservation" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />
                <Route path="/confirmed" element={<ConfirmedBooking/> } />
            </Routes>
        </main>


    )
}

export default Main;