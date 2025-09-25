"use client";
import React from "react";
import { useCount } from "@/store/CartStore";
import { ShoppingCart } from "lucide-react";
export default function Navbar() {
    const { count } = useCount();
    return (
        <header className="w-full flex items-center justify-between py-4 px-8 bg-gray-800 text-white">
            <h1>My store</h1>

            <nav>
                <ul className="flex space-x-4">
                    <li>Home</li>
                    <li>Products</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <div className="flex items-center gap-2">
            <ShoppingCart /> {count}
            </div>
        </header>
    );
}