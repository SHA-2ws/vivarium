import { Link } from "react-router-dom"

import AddToCartButton from "./add-to-cart-button"
import { Skeleton } from "./ui/skeleton"
import { TooltipWrapper } from "./tooltip"

import { type DetailedProduct } from "@/services/getProducts"
import { Badge } from "@/components/ui/badge"

interface ProductCard extends DetailedProduct {
  forSale?: boolean
  forNew?: boolean
}

function ProductCard({
  comparePrice,
  hasDiscount,
  hasStock,
  isNew,
  price,
  productId,
  productName,
  src,
  forSale,
  forNew
}: ProductCard) {
  return (
    <article
      className="relative h-[22rem] p-4 gap-3 flex justify-center items-center flex-col"
      id={productId}
    >
      {hasDiscount && !forSale && (
        <Badge
          className=" shadow-lg shadow-pinky-100/20 z-30 absolute top-0 translate-x-14 translate-y-7"
          variant={"default"}
        >
          Oferta
        </Badge>
      )}
      {isNew && !forNew && (
        <Badge
          className={`bg-mandarina-500  shadow-lg shadow-pinky-100/20 z-30 absolute top-0 translate-x-14 ${
            hasDiscount ? "translate-y-14" : "translate-y-7"
          }`}
          variant={"default"}
        >
          Nuevo
        </Badge>
      )}
      <Link
        unstable_viewTransition
        className="relative gap-3 flex justify-center items-center text-center flex-col"
        to={`/productos/${productId}`}
      >
        <img
          alt={productName}
          className={`aspect-square rounded-md `}
          height={150}
          srcSet={src.join("")}
          style={{ viewTransitionName: `hero_${productId}` }}
          width={150}
        />

        <TooltipWrapper text={productName}>
          <header
            className={`relative truncate  w-[150px]  text-center`}
            style={{ viewTransitionName: `title_${productId}` }}
          >
            {productName}
          </header>
        </TooltipWrapper>

        {!hasStock ? (
          <Badge
            className="absolute bottom-0 right-0 -translate-y-16 translate-x-3 shadow-lg shadow-pinky-100/20"
            variant={"destructive"}
          >
            Sin Stock
          </Badge>
        ) : null}

        <section
          className="inline-flex gap-2"
          style={{ viewTransitionName: `pricing_${productId}` }}
        >
          {hasDiscount ? <span className="line-through">{comparePrice}</span> : null}
          <strong>{price}</strong>
        </section>
      </Link>
      <footer>
        <AddToCartButton
          hasStock={hasStock}
          productId={productId}
          productName={productName}
          src={src}
        />
      </footer>
    </article>
  )
}

export default ProductCard

export const ProductCardFallback = () => {
  return (
    <article className="relative h-[20rem] p-4 gap-3 flex justify-center items-center flex-col">
      <div className="relative gap-3 flex justify-center items-center flex-col">
        <Skeleton className={`aspect-square w-[150px] h-[150px] rounded-md `} />

        <header className={`relative truncate w-[150px] text-center`}>
          <Skeleton className="w-full text-transparent h-[2em">titulo de algun elemento</Skeleton>
        </header>

        <section className="inline-flex gap-2">
          <Skeleton className="w-full h-[2em" />
        </section>
      </div>
      <footer>
        <Skeleton className="w-full text-transparent">agregar al carrito</Skeleton>
      </footer>
    </article>
  )
}
