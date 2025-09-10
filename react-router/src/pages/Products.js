import { Link } from "react-router";

const PRODUCTS = [
  { id: "p1", title: "Product1" },
  { id: "p2", title: "Product2" },
  { id: "p3", title: "Product3" },
];

export default function Product() {
  return (
    <>
      <h1>Product Page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
      <button>
        <Link to={".."} relative="path">Back</Link>
      </button>
    </>
  );
}
