"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="flex flex-col justify-center items-center h-64 gap-4">
 
      <motion.div
        className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-300 via-pink-400 to-pink-600 flex items-center justify-center shadow-lg"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
      >
        <span className="text-white text-xl">💖</span>
      </motion.div>

   
      <motion.p
        className="text-pink-500 font-medium text-lg tracking-wide"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading your pretty items...
      </motion.p>
    </div>
  );
}
