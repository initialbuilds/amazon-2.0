import { useState } from "react";
import { StarIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Currency from "react-currency-formatter";

const Product = ({ id, title, price, description, category, image }) => {
  const [rating] = useState(Math.floor(Math.random() * (5 - 1 + 1) + 1));
  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col m-5 bg-white z-2 p-10">
      <p className="absolute top-2 right-2">{category}</p>
      <Image width="200" height="200" objectFit="contain" src={image} />
      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, index) => {
            return <StarIcon key={index} className="h-5 text-yellow-400" />;
          })}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <Image
            width="50"
            height="50"
            src="https://links.papareact.com/fdw"
            alt=""
          />
          <p className="text-xs text-gray-500">Free Next Day Delivery</p>
        </div>
      )}

      <button className="mt-auto button">Add To Basket</button>
    </div>
  );
};

export default Product;
