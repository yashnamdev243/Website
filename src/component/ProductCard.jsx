import React from "react";
import { Button, Card } from "antd";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.category}`);
  };

  return (
    // <Card
    //   hoverable
    //   className="rounded-xl shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 !cursor-pointer-none"
    //   cover={
    //     <img
    //       alt={product.name}
    //       src={product.image}
    //       className="h-60 w-full object-cover rounded-t-xl"
    //     />
    //   }

    // >
    //   <h3 className="text-lg font-bold text-[#b84d1c] mb-1">{product.name}</h3>
    //   <p className="text-gray-700 font-medium">{product.price}</p>
    //    <Button type="" className="!bg-[#1f1300] !text-[#ffcc70] !border-[#ffcc70]  transition hover:!bg-[#f0d39e] hover:!border-[#1f1300] hover:!text-[#1f1300] w-full cursor-pointer"  onClick={handleClick}>
    //      View Details
    //    </Button>
    // </Card>
    <Card
      hoverable
      className="rounded-xl shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 cursor-default w-full max-w-full flex flex-col"
      cover={
        <div className="h-64 overflow-hidden rounded-t-xl">
          <img
            alt={product.name}
            src={product.image}
            className="h-full w-full object-cover"
          />
        </div>
      }
    >
      <div className="flex flex-col justify-between h-full px-2  space-y-2">
        <h3 className="text-lg font-bold text-[#b84d1c]">{product.name}</h3>
        <p className="text-gray-700 font-medium">{product.price}</p>
        <Button
          className="!bg-[#1f1300] !text-[#ffcc70] !border-[#ffcc70] transition hover:!bg-[#f0d39e] hover:!border-[#1f1300] hover:!text-[#1f1300] w-full"
          onClick={handleClick}
        >
          View Details
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
