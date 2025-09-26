"use client"
import { Button } from "./ui/button";
import { useState } from "react";
import { useCart } from "@/store/CartStore";
export default function Counter({price}) {
 const [count, setCount] = useState(0);
 const { addToCart, removeFromCart } = useCart();
    return (
        <div className="flex items-center gap-2" >
            <Button disabled={count === 0} onClick={() => { setCount(count - 1); removeFromCart(); }}>-</Button>
            <span className="min-w-[24px] text-center">{count}</span>
            <Button onClick={() => { setCount(count + 1); addToCart(); }}>
                +
            </Button>
            <span className="ml-2 font-semibold">${(price * count).toFixed(2)}</span>
        </div>
    );
}