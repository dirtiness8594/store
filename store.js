import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import i18n from './i18n';

const useAppStore = create(
    persist(
        (set, get) => ({
            // Lang
            language: 'en',
            setLanguage: (lang) => {
                i18n.changeLanguage(lang);
                set({ language: lang });
            },

            // theme
            theme: 'light', // ou 'dark'
            toggleTheme: () =>
            set((state) => ({
                theme: state.theme === 'light' ? 'dark' : 'light',
            })),

            // User
            user: null,
            isAuthenticated: false,
            login: (userData) => set({ user: userData, isAuthenticated: true }),
                       logout: () => set({ user: null, isAuthenticated: false }),

                       // Cart
                       cart: [],
                       addToCart: (item) =>
                       set((state) => ({
                           cart: [...state.cart, item],
                       })),
                       removeFromCart: (id) =>
                       set((state) => ({
                           cart: state.cart.filter((item) => item.id !== id),
                       })),
                       clearCart: () => set({ cart: [] }),

                       // Notifc
                       notifications: [],
                       addNotification: (notification) =>
                       set((state) => ({
                           notifications: [...state.notifications, notification],
                       })),
                       removeNotification: (id) =>
                       set((state) => ({
                           notifications: state.notifications.filter((n) => n.id !== id),
                       })),

                       // Reset all ( Lang less )
                       resetApp: () => {
                           const lang = get().language;
                           set({
                               theme: 'light',
                               user: null,
                               isAuthenticated: false,
                               cart: [],
                               notifications: [],
                               language: lang,
                           });
                       },
        }),
        {
            name: 'app-storage',
            partialize: (state) => ({
                language: state.language,
                theme: state.theme,
                user: state.user,
                isAuthenticated: state.isAuthenticated,
                cart: state.cart,
            }),
        }
    )
);

export default useAppStore;
