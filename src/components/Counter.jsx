"use client";
import { Button } from "./ui/button";
import { useState } from "react";
import { useCart } from "@/store/CartStore";

export default function Counter({ price }) {
  const [count, setCount] = useState(0);
  const { addToCart, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-2">
      <Button
        disabled={count === 0}
        onClick={() => {
          setCount(count - 1);
          removeFromCart();
        }}
        className="px-3 py-1 bg-pink-200 hover:bg-pink-300 text-pink-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        -
      </Button>

      <span className="min-w-[24px] text-center font-medium">{count}</span>

      <Button
        onClick={() => {
          setCount(count + 1);
          addToCart();
        }}
        className="px-3 py-1 bg-gradient-to-r from-pink-400 to-pink-600 text-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition"
      >
        +
      </Button>

      <span className="ml-2 font-semibold text-white">
        ${(price * count).toFixed(2)}
      </span>
    </div>
  );
}
