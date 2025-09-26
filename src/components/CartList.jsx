"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CartItem from "./CartItem";
import { useListProducts } from "@/store/CartStore";
import LoadingScreen from "./LoadingScreen";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CartList() {
  const { products, fetchProducts, loading, error } = useListProducts();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // ambil kategori unik dari produk
  const categories = useMemo(() => {
    const cats = Array.from(new Set(products.map((p) => p.category)));
    return ["all", ...cats];
  }, [products]);

  // filter + search logic
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "all" || p.category === category;
      return matchSearch && matchCategory;
    });
  }, [products, search, category]);

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
      <h2 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-pink-500 via-rose-400 to-fuchsia-600 text-transparent bg-clip-text tracking-tight drop-shadow-sm">
        Your Curated Cart
      </h2>

      {/* Filter & Search */}
     <Card className="w-full mb-10 shadow-md border border-slate-200">
  <CardHeader>
    <CardTitle className="text-lg font-semibold text-slate-700">
      Search & Filter
    </CardTitle>
  </CardHeader>
  <CardContent>
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <Input
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-sm"
      />

      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Filter by category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  </CardContent>
</Card>

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
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
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
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 font-medium">
              No products found..
            </p>
          )}
        </AnimatePresence>
      </motion.div>
      
    </motion.section>
  );
}
