import { useParams } from "react-router";

export default function ProductDetail() {
  const params = useParams();
  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.id}</p>
    </>
  );
}
