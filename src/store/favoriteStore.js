import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useFavoriteStore=create(
    persist(
        (set, get) => ({
            favorites: [],
            search:"",
            handleSearch:(item)=>set((state)=>({search:item})),
            addFavorites: (car) => set((state) => ({ favorites: [...state.favorites, car] })),
            removeFavorit: (id) => set((state) => ({ favorites: state.favorites.filter(item => item.id !== id) })),
            isFavorite: (id) => {
                return get().favorites.some(item => item.id === id)
            }

        }),
    
    {
        name: "Favorite cars"
    }
    )
) 