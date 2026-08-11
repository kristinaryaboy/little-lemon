import { Link } from "react-router-dom";
import heroImage from "./images/PastaDish1.jpg";

function CallToAction() {
  return (
    <section className="cta">
      <div className="cta-inner">
        <div className="cta-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking" className="button">Reserve a Table</Link>
        </div>
        <img
          className="cta-image"
          src={heroImage}
          alt="Little Lemon signature dish"
        />
      </div>
    </section>
  );
}

export default CallToAction;
