// cartStore.js (usando Zustand)
import { use } from 'react'
import { create } from 'zustand'

const useCartStore = create((set) => ({
    cartItems: [],
    addToCart: (item) =>
        set((state) => {
            const existing = state.cartItems.find(
                (i) => i.productId === item.productId && i.skuId === item.skuId
            )
            if (existing) {
                return {
                    cartItems: state.cartItems.map((i) =>
                        i.productId === item.productId && i.skuId === item.skuId
                            ? { ...i, quantity: i.quantity + item.quantity }
                            : i
                    )
                }
            } else {
                return { cartItems: [...state.cartItems, item] }
            }
        }),
    removeFromCart: (productId, skuId) =>
        set((state) => ({
            cartItems: state.cartItems.filter(
                (item) => !(item.productId === productId && item.skuId === skuId)
            )
        })),
    updateQuantity: (productId, skuId, quantity) =>
        set((state) => ({
            cartItems: state.cartItems.map((item) =>
                item.productId === productId && item.skuId === skuId
                    ? { ...item, quantity }
                    : item
            )
        }))
}))

export default useCartStore