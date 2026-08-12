import greekSalad from "./images/GreekSalad1.jpg";
import bruschetta from "./images/Bruscetta1.jpg";
import grilledFish from "./images/FishDish1.jpg";

const categories = ["Lunch", "Mains", "Desserts", "A La Carte", "Specials"];

const menuItems = [
  {
    id: 1,
    title: "Greek Salad",
    price: "$12.99",
    image: greekSalad,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago-style feta cheese, garnished with garlic and rosemary croutons.",
  },
  {
    id: 2,
    title: "Bruschetta",
    price: "$7.99",
    image: bruschetta,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
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
    <section className="menu-section">
      <h2 className="menu-title">ORDER FOR DELIVERY!</h2>

      <div className="category-chips">
        {categories.map((category) => (
          <button key={category} className="chip">{category}</button>
        ))}
      </div>

      <ul className="menu-list">
        {menuItems.map((item) => (
          <li key={item.id} className="menu-item">
            <div className="menu-item-text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="price">{item.price}</span>
            </div>
            <img className="menu-item-img" src={item.image} alt={item.title} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Specials;
