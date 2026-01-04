import { useEffect, useState } from "react";
import MyCard from "../Components/MyCard";
import axios from "axios";

export default function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
    axios
      .get(url)
      .then((res) => {
        let data = res.data;
        setProducts(data);
        console.log(products);
      })
      .catch(() => {
        console.log("req faild");
      });
  }, []);

  return (
    <div className="container w-full h-dvh overflow-auto flex flex-col items-center">
      <h1 className="text-4xl font-bold p-3">All Products</h1>
      <div className="grid grid-cols-3 gap-5">
        {products.map((el) => {
          return (
            <MyCard
              key={el.id}
              img={el.image}
              title={el.title}
              price={el.price}
              id={el.id}
            />
          );
        })}
      </div>
    </div>
  );
}
