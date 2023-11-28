import { Button } from "./ui/button"

import { useCart } from "@/store/cart-context"

type AddToCartButton = {
  productId: string
  productName: string
  src: string[]
  hasStock: boolean
  q?: number
}

const AddToCartButton = ({ productId, productName, hasStock, q = 1 }: AddToCartButton) => {
  const { manage } = useCart()

  return (
    <Button
      className="dark:bg-grey-blue/30 w-full py-[17px]  text-grey-blue hover:bg-pinky/30  dark:text-pinky"
      disabled={!hasStock}
      size={"sm"}
      style={{ viewTransitionName: `add_${productId}` }}
      variant={"outline"}
      onClick={() => {
        manage({
          action: "add",
          value: {
            id: productId,
            name: productName,
            q
          }
        })
      }}
    >
      Agregar al carrito
    </Button>
  )
}

export default AddToCartButton
