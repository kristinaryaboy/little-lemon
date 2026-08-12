/* global fetchAPI */
import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";

// Convert a 24-hour "HH:MM" time from the API into a friendly AM/PM string
const formatTime = (time24) => {
  const [hourStr, minute] = time24.split(":");
  let hour = parseInt(hourStr, 10);
  const period = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${minute} ${period}`;
};

// Creates the initial list of available times using today's date
export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today).map(formatTime);
};

// Reducer: fetch the available times for the selected date
export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(new Date(action.date)).map(formatTime);
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    undefined,
    initializeTimes
  );

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
