import { create } from "zustand";


const useListProducts = create((set) => ({
    products: [],
    loading: false,
    error: null,
    
    fetchProducts: async () => {
        set({loading: true, error: null});
        try{
            const res = await fetch("https://fakestoreapi.com/products?limit=5");
            if(!res.ok) throw new Error("Failed to fetch products");
            const data = await res.json();
            set({products: data, loading: false});
        }catch(error){
            set({error: error.message, loading: false});
        }
    }


}));

useListProducts.getState().fetchProducts();

const useCount = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}));



export {  useCount, useListProducts };
