import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const [product, setProduct] = useState({});

  const params = useParams();

  useEffect(() => {
    let id = params.productId;
    let url = `https://fakestoreapi.com/products/${id}`;
    axios
      .get(url)
      .then((res) => {
        let data = res.data;
        setProduct(data);
        console.log(product);
      })
      .catch(() => {
        console.log("req Faild");
      });
  }, []);
  return (
    <div>
      <p>{product.description}</p>
      <img src={product.image} />
      <h1>Price {product.price} EGP</h1>
    </div>
  );
}
