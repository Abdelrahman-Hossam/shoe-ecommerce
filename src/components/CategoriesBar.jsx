import { Link } from "react-router-dom";

export default function CategoriesBar() {
  return (
    <div className="categoriesBar">
      <ul className="categoriesBarList">
        <li>
          <Link to="/products">Men's Shoes</Link>
        </li>
        <li>
          <Link to="/products">Women's Shoes</Link>
        </li>
        <li>New Arrivals</li>
      </ul>
    </div>
  );
}
