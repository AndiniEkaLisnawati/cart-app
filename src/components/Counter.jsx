"use client"

import { useCount } from "@/store/CartStore";
export default function Counter() {
    const { count, increment, decrement } = useCount();
    return (
        <div>
            <h2>Counter</h2>
            <p>Current Count: {count}</p>
            <button onClick={() => increment()}>Increment</button>
            <button onClick={() => decrement()}>Decrement</button>
        </div>
    );
}