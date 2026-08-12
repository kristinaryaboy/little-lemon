import { Link } from "react-router-dom";

function ComingSoon() {
  return (
    <section className="booking">
      <h1>Coming Soon</h1>
      <p>This page is still under construction. Please check back soon!</p>
      <Link to="/" className="button">Back to Home</Link>
    </section>
  );
}

export default ComingSoon;
