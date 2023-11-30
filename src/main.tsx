// import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"

import { Toaster } from "./components/ui/toaster.tsx"
import { ThemeProvider } from "./components/theme-provider.tsx"
import CheckoutProvider from "./store/checkout-context.tsx"
import CartProvider from "./store/cart-context.tsx"
import { app } from "./services/firebase.ts"
import { router } from "./routes/root.tsx"
import "./index.css"
import { TooltipProvider } from "./components/ui/tooltip.tsx"

app()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <CartProvider>
      <CheckoutProvider>
        <TooltipProvider>
          <RouterProvider future={{ v7_startTransition: true }} router={router} />
        </TooltipProvider>
        <Toaster />
      </CheckoutProvider>
    </CartProvider>
  </ThemeProvider>
)
