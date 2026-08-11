import mario from "./images/Server1.jpg";
import adrian from "./images/Server2.jpg";

function Chicago() {
  return (
    <section className="chicago">
      <div className="chicago-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant founded by
          brothers Mario and Adrian. Located in the heart of Chicago, we serve a
          locally-sourced menu with daily specials in a lively but casual
          environment.
        </p>
        <p>
          Our recipes have been passed down through generations, blending
          traditional Mediterranean flavors with a modern twist.
        </p>
      </div>
      <div className="chicago-images">
        <img src={mario} alt="Chef Mario" />
        <img src={adrian} alt="Chef Adrian" />
      </div>
    </section>
  );
}

export default Chicago;
