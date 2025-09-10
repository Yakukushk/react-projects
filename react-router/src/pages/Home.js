import { Link, useNavigate } from "react-router";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/product");
  }
  return (
    <>
      <h1>Hello World</h1>
      <p>
        <Link to={"/product"}>link to Product Page</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
