"use client";
import React from "react";
import { useCart } from "@/store/CartStore";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
export default function Navbar() {
    const { count } = useCart();
    return (
        <header className="w-full flex items-center justify-between py-4 px-8 bg-gray-800 text-white">
            <h1>My store</h1>

            <nav>
            </nav>

            <div className="flex items-center gap-2 hover:cursor-pointer">
                <Link href="/cart" className="flex items-center gap-2 px-3 py-2 bg-indigo-600 text-white text-sm rounded-xl shadow-md hover:bg-indigo-700 transition">
                    <ShoppingCart /> {count}
                </Link>
            </div>
        </header>
    );
}