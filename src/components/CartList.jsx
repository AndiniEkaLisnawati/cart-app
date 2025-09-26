"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CartItem from "./CartItem";
import { useListProducts } from "@/store/CartStore";
import LoadingScreen from "./LoadingScreen";

export default function CartList() {
  const { products, fetchProducts, loading, error } = useListProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64 text-red-500 font-semibold text-lg tracking-wide">
        {error}
      </div>
    );
  }

  return (
    <motion.section
      className="p-10 min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Heading */}
      <h2 className="text-3xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-500 via-rose-400 to-fuchsia-600 text-transparent bg-clip-text tracking-tight drop-shadow-sm">
        Your Curated Cart
      </h2>

      {/* Product Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
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
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              exit={{ opacity: 0, y: -30 }}
              className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-shadow duration-300"
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
