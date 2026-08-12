import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch }) {
  return (
    <section className="booking">
      <h1>Reserve a Table</h1>
      <p>Reserve your table at Little Lemon in just a few quick steps.</p>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </section>
  );
}

export default BookingPage;
