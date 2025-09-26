"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CartItem from "./CartItem";
import { useListProducts } from "@/store/CartStore";

export default function CartList() {
  const { products, fetchProducts, loading, error } = useListProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-lg font-medium text-gray-600">
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64 text-red-500 font-medium">
        {error}
      </div>
    );
  }

  return (
    <motion.div
      className="p-6 grid grid-cols-1 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <AnimatePresence>
        {products.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <CartItem name={item.name} description={item.description} price={item.price} image={item.image} rating={item.rating} category={item.category} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
