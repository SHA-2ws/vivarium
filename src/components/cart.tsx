import { useState } from "react"
import { ShoppingCart } from "lucide-react"

import { Alert, AlertDescription } from "./ui/alert"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import NavLink from "./navlink"
import CartCard from "./cart-card"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"
import { useCart } from "@/store/cart-context"
import { useCheckout } from "@/store/checkout-context"

export default function Cart() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen((prev) => !prev)

  const { products, manage, total } = useCart()
  const { total: totalCheckout } = useCheckout()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="relative" size={"icon"} variant={"outline"} onClick={handleOpen}>
          <ShoppingCart strokeWidth={1} />
          <Badge className="rounded-full absolute top-0  translate-y-6 translate-x-5">
            {total}
          </Badge>
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto md:h-full w-screen " side={"right"}>
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">Mi carrito </SheetTitle>
        </SheetHeader>

        {products.length <= 0 ? (
          <SheetDescription className="py-4">
            <Alert variant={"warn"}>
              <AlertDescription className="w-full items-center flex justify-center">
                <span className="inline-flex font-bold gap-2 items-center text-center">
                  {" "}
                  <ShoppingCart /> Tu carrito esta vacio{" "}
                </span>
              </AlertDescription>
            </Alert>
          </SheetDescription>
        ) : (
          <>
            <section className="p-4 l gap-5 flex flex-col">
              {products.map(({ id, name, q }) => {
                return (
                  <CartCard
                    key={id}
                    handleAdd={() => {
                      manage({
                        value: { id, name, q: 1 },
                        action: "add"
                      })
                    }}
                    handleClear={() => {
                      manage({
                        value: { id, name, q },
                        action: "clear"
                      })
                    }}
                    handleRemove={() => {
                      manage({
                        value: { id, name, q: 1 },
                        action: "remove"
                      })
                    }}
                    id={id}
                    name={name}
                    q={q}
                  />
                )
              })}
            </section>
            <SheetFooter className="flex flex-row gap-5 justify-between w-full items-center">
              <p className="inline-flex gap-2 ">
                <strong>Total:</strong>
                <strong>{totalCheckout}</strong>
              </p>
              <NavLink to={"/checkout"} onMouseUp={handleOpen}>
                Ir al Checkout
              </NavLink>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
