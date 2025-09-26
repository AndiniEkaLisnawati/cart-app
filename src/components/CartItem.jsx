"use client";

import { motion } from "framer-motion";
import { Card, CardFooter } from "./ui/card";
import { Star } from "lucide-react";
import Counter from "./Counter";
import Image from "next/image";
import { toast } from "sonner";

export default function CartItem({
  name,
  description,
  price,
  image,
  rating,
  category,
}) {
  const handleAdd = () => {
    toast.success(`✨ Added ${name} to cart!`, {
      description: "Your bag just got fancier 💼",
      duration: 2000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Card className="h-full p-5 border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all bg-gradient-to-br from-rose-50 via-white to-indigo-50 flex flex-col">
        {/* Product Image */}
        <div className="w-full h-40 flex items-center justify-center mb-3">
          <Image
            src={image}
            alt={name}
            width={160}
            height={160}
            className="object-contain max-h-full drop-shadow-sm"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col flex-grow">
          <h2 className="text-base font-semibold text-gray-800 line-clamp-2 min-h-[48px]">
            {name}
          </h2>
          <p className="text-sm text-gray-500 line-clamp-2 min-h-[40px] mt-1">
            {description}
          </p>

          <div className="flex items-center justify-between mt-3">
            <span className="text-lg font-bold text-rose-600">
              ${price}
            </span>
            <div className="flex items-center gap-1 text-yellow-500 text-sm">
              <Star className="w-4 h-4 fill-yellow-400" />
              {rating?.rate} ({rating?.count})
            </div>
          </div>
        </div>

        {/* Footer */}
        <CardFooter className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-600 capitalize">{category}</span>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 px-3 py-2 bg-rose-500 text-white text-sm rounded-lg shadow hover:bg-rose-600 transition-colors"
          >
            <Counter price={price} />
          </button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
