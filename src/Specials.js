import { Link } from "react-router-dom";
import greekSalad from "./images/GreekSalad1.jpg";
import bruschetta from "./images/Bruscetta1.jpg";
import grilledFish from "./images/FishDish1.jpg";

const specials = [
  {
    id: 1,
    title: "Greek Salad",
    price: "$12.99",
    image: greekSalad,
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago-style feta cheese, garnished with garlic and rosemary croutons.",
  },
  {
    id: 2,
    title: "Bruschetta",
    price: "$5.99",
    image: bruschetta,
    description:
      "Our Bruschetta is made from grilled bread smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: 3,
    title: "Grilled Fish",
    price: "$20.00",
    image: grilledFish,
    description:
      "Fresh grilled fish of the day, seasoned with Mediterranean herbs and served with a side of seasonal vegetables.",
  },
];

function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This Week's Specials!</h2>
        <Link to="/" className="button">Online Menu</Link>
      </div>

      <div className="specials-grid">
        {specials.map((item) => (
          <article key={item.id} className="special-card">
            <img src={item.image} alt={item.title} />
            <div className="special-content">
              <div className="special-title">
                <h3>{item.title}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.description}</p>
              <Link to="/" className="special-link">Order a delivery</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;
