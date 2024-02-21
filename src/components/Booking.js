import React from "react";
import BookingForm from "../components/BookingForm";

const Booking = (props) => {
    return (
        <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    )
}

export default Booking;

