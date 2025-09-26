"use client";
import React from "react";
import { useCart } from "@/store/CartStore";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const { count } = useCart();

  return (
    <motion.header
      className="w-full flex items-center justify-between py-4 px-8 bg-gradient-to-r from-pink-300 via-pink-400 to-pink-600 text-white shadow-lg"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-xl font-bold tracking-wide drop-shadow-md">
        PinkCart ✨
      </h1>

      <nav></nav>

      <Link
        href="/cart"
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-400 to-pink-600 text-white text-sm rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all"
      >
        <ShoppingCart className="w-5 h-5" /> {count}
      </Link>
    </motion.header>
  );
}
