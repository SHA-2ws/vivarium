import React, { useContext, createContext, useState, useEffect } from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import accounting from "accounting"

import { useCart } from "./cart-context"

import { DetailedProduct, FirebaseProductDoc } from "@/services/getProducts"
import { app } from "@/services/firebase"

interface ICheckoutContext {
  products: (DetailedProduct & { q: number })[]
}

const CheckoutContext = createContext<ICheckoutContext>({
  products: []
})

// eslint-disable-next-line react-refresh/only-export-components
export function useCheckout() {
  const { products } = useContext(CheckoutContext)

  const total = products.reduce((a, b) => {
    const price = accounting.unformat(b.price, ",")
    const total = a + b.q * price

    return total
  }, 0)

  return {
    products,
    total: accounting.formatMoney(total, "$", 2, ".", ",")
  }
}

export default function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const { products: vault } = useCart()
  const [checkout, setCheckout] = useState<(DetailedProduct & { q: number })[]>([])

  const db = getFirestore(app())

  useEffect(() => {
    Promise.all(
      vault.map(async ({ id, q }) => {
        const ref = doc(db, "products", id)
        const data = await getDoc(ref)

        return {
          productId: data.id,
          q,
          ...(data.data() as FirebaseProductDoc)
        }
      })
    ).then((data) => {
      setCheckout(data)
    })
  }, [vault.length, vault, db])

  return (
    <CheckoutContext.Provider value={{ products: checkout }}>{children}</CheckoutContext.Provider>
  )
}
