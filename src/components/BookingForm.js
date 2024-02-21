import React from "react";
import { useState } from "react";

const BookingForm = (props) => {
  // Define state variables
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [allergies, setAllergies] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  // Function to handle changes in date input
  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header>
      <section>
        {/* Booking form */}
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <fieldset className="formField">
            <div>
              <label htmlFor="book-date">Choose your preferred date:</label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
              />
            </div>
            <div>
              <label htmlFor="book-time">Choose your preferred time:</label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => setTimes(e.target.value)}
                required
              >
                <option value="">Select a Time</option>
                {/* Mapping available times */}
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
            </div>
            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input
                id="book-guests"
                min="1"
                value={guests}
                onChange={(e) => {
                  setGuests(e.target.value);
                }}
                type="number"
                placeholder={1}
                max={15}
                required
              />
            </div>
            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                id="book-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
              >
                <option value="">Select an Option</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Business</option>
                <option>Date</option>
              </select>
            </div>
            {/* Dietary requirements */}
            <div className="allergyContainer">
              <label htmlFor="book-allergies">Dietary Requirements:</label>
              <textarea
                id="book-allergies"
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
                rows="4"
                cols="50"
                placeholder="Enter any dietary requirements here..."
              />
            </div>
            {/* Form submission button */}
            <div className="btnReceive">
              <input aria-label="On Click" type="submit" value="Make Your Reservation" />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
