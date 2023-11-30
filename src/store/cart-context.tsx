import React, { useContext, createContext, useState } from "react"

import { useToast } from "@/components/ui/use-toast"
import useLocalStorage from "@/hooks/useLocalStorage"

type action = "add" | "remove" | "clear" | "clearAll"

type CartItem = {
  id: string
  q: number
  name: string
}

interface ICartContext {
  products: CartItem[]
  manage: ({ action, value }: { action?: action; value?: CartItem }) => void
}

const CartContext = createContext<ICartContext>({
  products: [],
  manage: () => null
})

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const { manage, products } = useContext(CartContext)

  return {
    manage,
    products,
    total: products.reduce((a, b) => a + b.q, 0)
  }
}

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const { toast } = useToast()

  const { vault, setVault } = useLocalStorage("vivarium-cart")
  const [cart, setCart] = useState<CartItem[]>(vault as CartItem[])

  const addToCart = (value: CartItem) => {
    try {
      const clone = structuredClone(cart)
      const take = clone.findIndex((d) => d.id === value.id)

      if (take >= 0) {
        const draft = clone[take]

        draft.q = draft.q + value.q
        setCart(clone)
        setVault(clone)

        return
      }

      setCart((pc) => [...pc, value])
      setVault([...cart, value])
      toast({ title: "producto agregado al carrito!", duration: 500 })
    } catch (err) {
      console.error(err)
      throw new Error("algo ocurrio mal")
    }
  }

  const removeFromCart = (value: CartItem) => {
    try {
      const clone = structuredClone(cart)
      const take = clone.findIndex((d) => d.id === value.id)

      if (take >= 0) {
        const draft = clone[take]

        if (draft.q === 1) {
          clone.splice(take, 1)
          toast({ title: "producto eliminado!", duration: 500 })
        } else {
          draft.q = draft.q - 1
        }

        setCart(clone)
        setVault(clone)

        return
      }
    } catch (err) {
      console.error(err)
      throw new Error("algo ocurrio mal")
    }
  }

  const clearFromCart = (value: CartItem) => {
    try {
      const take = cart.filter((d) => d.id !== value.id)

      toast({ title: "producto eliminado!", duration: 500 })

      setCart(take)
      setVault(take)

      return
    } catch (err) {
      console.error(err)
      throw new Error("algo ocurrio mal")
    }
  }

  const clearAllFromCart = () => {
    try {
      setCart([])
      setVault([])

      return
    } catch (err) {
      console.error(err)
      throw new Error("algo ocurrio mal")
    }
  }

  const manage = ({ action, value }: { action?: action; value?: CartItem }) => {
    if (action && value) {
      if (action === "add") {
        addToCart(value)

        return
      }
      if (action === "remove") {
        removeFromCart(value)

        return
      }
      if (action === "clear") {
        clearFromCart(value)

        return
      }
    }
    if (action === "clearAll") {
      clearAllFromCart()

      return
    }

    return null
  }

  return <CartContext.Provider value={{ products: cart, manage }}>{children}</CartContext.Provider>
}
