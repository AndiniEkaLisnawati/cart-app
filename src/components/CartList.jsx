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
      <div className="flex justify-center items-center h-64 text-lg font-medium text-pink-500">
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
    <motion.section
      className="p-8 min-h-screen bg-gradient-to-b from-pink-50 via-pink-100 to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-pink-400 to-pink-600 text-transparent bg-clip-text">
        Our Lovely Picks 💕
      </h2>

      <motion.div
        className="grid grid-cols-1 gap-8 max-h-lg"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <AnimatePresence>
          {products.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              exit={{ opacity: 0, y: -20 }}
            >
              <CartItem
                name={item.title}
                description={item.description}
                price={item.price}
                image={item.image}
                rating={item.rating}
                category={item.category}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}
