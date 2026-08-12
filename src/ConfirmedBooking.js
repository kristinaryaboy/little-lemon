import { Link } from "react-router-dom";

function ConfirmedBooking() {
  return (
    <section className="booking">
      <h1>Booking Confirmed!</h1>
      <p>
        Thank you. Your table reservation at Little Lemon has been confirmed.
        We look forward to seeing you!
      </p>
      <Link to="/" className="button">Back to Home</Link>
    </section>
  );
}

export default ConfirmedBooking;
