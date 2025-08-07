import { create } from 'zustand'

export const useCartStore = create((set) => ({
    cart: [],

    addToCart: (product) =>
        set((state) => {
            const exists = state.cart.find((item) => item.id === product.id)
            if (exists) {
                return {
                    cart: state.cart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                }
            } else {
                return {
                    cart: [...state.cart, { ...product, quantity: 1 }],
                }
            }
        }),

    removeFromCart: (productId) =>
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== productId),
        })),

    decreaseQuantity: (productId) =>
        set((state) => ({
            cart: state.cart
                .map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0),
        })),

    clearCart: () => set({ cart: [] }),
}))
