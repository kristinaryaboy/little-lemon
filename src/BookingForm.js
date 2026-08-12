import { useState } from "react";

function BookingForm() {
  // one state variable per form field (controlled component)
  const [date, setDate] = useState("");
  const [time, setTime] = useState("5:00 PM");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // available booking times held in state (will later come from an API)
  const [availableTimes] = useState([
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = { date, time, guests, occasion };
    console.log("Reservation submitted:", reservation);
    alert(
      `Table booked for ${guests} guest(s) on ${date} at ${time} (${occasion}).`
    );
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
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
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Engagement</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
