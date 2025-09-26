"use client";

import { motion } from "framer-motion";
import { Card, CardFooter } from "./ui/card";
import { ShoppingCart, Star } from "lucide-react";
import Counter from "./Counter";
import Image from "next/image";

export default function CartItem({
  name,
  description,
  price,
  image,
  rating,
  category,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Card className="h-full p-5 border border-pink-200 rounded-2xl shadow-sm hover:shadow-xl transition-all bg-white flex flex-col">
        <div className="w-full h-40 flex items-center justify-center mb-3">
          <Image
            src={image}
            alt={name}
            width={160}
            height={160}
            className="object-contain max-h-full drop-shadow-sm"
          />
        </div>

        <div className="flex flex-col flex-grow">
          <h2 className="text-base font-semibold text-gray-800 line-clamp-2 min-h-[48px]">
            {name}
          </h2>
          <p className="text-sm text-gray-500 line-clamp-2 min-h-[40px] mt-1">
            {description}
          </p>

          <div className="flex items-center justify-between mt-3">
            <span className="text-lg font-bold bg-gradient-to-r from-pink-500 to-pink-700 text-transparent bg-clip-text">
              ${price}
            </span>
            <div className="flex items-center gap-1 text-pink-500 text-sm">
              <Star className="w-4 h-4 fill-pink-400" />
              {rating?.rate} ({rating?.count})
            </div>
          </div>
        </div>

        <CardFooter className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-600 capitalize">{category}</span>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-pink-400 to-pink-600 text-white text-sm rounded-xl shadow-md hover:shadow-lg transition"
          >
            <Counter price={price} />
          </motion.button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
