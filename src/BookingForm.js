import { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  // one state variable per form field (controlled component)
  const [date, setDate] = useState("");
  const [time, setTime] = useState("5:00 PM");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // today's date (YYYY-MM-DD) for the date input's min attribute
  const today = new Date().toISOString().split("T")[0];

  // when the date changes, update local state AND dispatch to refresh times
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({ type: "UPDATE_TIMES", date: newDate });
  };

  // client-side validation with React: the form is valid only when
  // every field holds an acceptable value
  const isValid =
    date !== "" &&
    Number(guests) >= 1 &&
    Number(guests) <= 10 &&
    time !== "" &&
    occasion !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ date, time, guests, occasion });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        min={today}
        required
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        required
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime}>{availableTime}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        required
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        required
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Engagement</option>
        <option>Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your reservation"
        disabled={!isValid}
        aria-disabled={!isValid}
      />
    </form>
  );
}

export default BookingForm;
