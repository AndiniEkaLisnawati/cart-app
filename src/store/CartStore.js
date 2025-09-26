import { create } from "zustand";
import axios from "axios";

const useListProducts = create((set) => ({
    products: [],
    loading: false,
    error: null,
    fetchProducts: async () => {
        set({loading: true, error: null});
        try{
            const res = await axios.get("https://fakestoreapi.com/products");
            set({products: res.data, loading: false});
        }catch(error){
            set({error: error.message, loading: false});
        }
    }
}));

const useCart = create((set) => ({
   count: 0,
   addToCart: () => set((state) => ({count: state.count + 1})),
   removeFromCart: () => set((state) => ({count: state.count - 1})),
   totalPrice: 0,
   setTotalPrice: (price) => set((state) => ({totalPrice: state.totalPrice + price})),
}));





export {  useListProducts, useCart };
