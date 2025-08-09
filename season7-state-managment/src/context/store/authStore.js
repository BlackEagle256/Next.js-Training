import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
    persist(   //persist For Save In LocalStorage Automatical
        (set) => ({
            isLoggedIn: false,
            user: null,

            login: (username) =>
                set({ isLoggedIn: true, user: { name: username } }),

            logout: () => set({ isLoggedIn: false, user: null }),
        }),
        {
            name: "auth-storage", // Key Name localStorage
        }
    )
);