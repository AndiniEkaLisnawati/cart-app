"use client";

import { motion } from "framer-motion";
import { Card, CardFooter } from "./ui/card";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";

export default function CartItem({ item }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <Card className="h-full p-4 border rounded-2xl shadow-sm hover:shadow-lg transition-all bg-white flex flex-col">
        {/* Product Image */}
        <div className="w-full h-40 flex items-center justify-center mb-3">
          <Image
            src={item.image}
            alt={item.title}
            width={160}
            height={160}
            className="object-contain max-h-full"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col flex-grow">
          <h2 className="text-base font-semibold text-gray-800 line-clamp-2 min-h-[48px]">
            {item.title}
          </h2>
          <p className="text-sm text-gray-500 line-clamp-2 min-h-[40px] mt-1">
            {item.description}
          </p>

          {/* Price + Rating */}
          <div className="flex items-center justify-between mt-3">
            <span className="text-lg font-bold text-indigo-600">
              ${item.price}
            </span>
            <div className="flex items-center gap-1 text-yellow-500 text-sm">
              <Star className="w-4 h-4 fill-yellow-500" />
              {item.rating?.rate} ({item.rating?.count})
            </div>
          </div>
        </div>

        {/* Footer */}
        <CardFooter className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-600 capitalize">
            {item.category}
          </span>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="flex items-center gap-2 px-3 py-2 bg-indigo-600 text-white text-sm rounded-xl shadow-md hover:bg-indigo-700 transition"
          >
            <ShoppingCart className="w-4 h-4" />
            Add
          </motion.button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
