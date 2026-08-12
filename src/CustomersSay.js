import server1 from "./images/Server1.jpg";
import server2 from "./images/Server2.jpg";

const reviews = [
  {
    id: 1,
    name: "Emma R.",
    rating: "★★★★★",
    image: server1,
    text: "Best Mediterranean food in Chicago! The Greek salad is incredible and the service is warm.",
  },
  {
    id: 2,
    name: "James T.",
    rating: "★★★★★",
    image: server2,
    text: "Cozy atmosphere and amazing bruschetta. We reserved a table online in seconds. We'll be back!",
  },
];

function CustomersSay() {
  return (
    <section className="customers">
      <h2>What Our Customers Say</h2>
      <div className="reviews-grid">
        {reviews.map((r) => (
          <article key={r.id} className="review-card">
            <p className="rating" role="img" aria-label="Rated 5 out of 5 stars">
              {r.rating}
            </p>
            <div className="review-person">
              <img src={r.image} alt={r.name} />
              <h4>{r.name}</h4>
            </div>
            <p>{r.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
