import { useLoaderData, useParams } from "react-router-dom"
import { Heart, Minus, Plus } from "lucide-react"
import { FormEvent, memo, useState } from "react"

import { Alert } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import AddToCartButton from "@/components/add-to-cart-button"
import { DetailedProduct } from "@/services/getProducts"
import useImage from "@/hooks/useImage"
import { Input } from "@/components/ui/input"

function Product() {
  const { id } = useParams()
  const product = useLoaderData() as DetailedProduct | null
  const { value, changeImage } = useImage(product ? product.src?.join(",") : "")

  const [c, setC] = useState(1)

  const resetC = (e: FormEvent) => {
    e.preventDefault()
    setC(1)
  }

  const handleSum = () => {
    if (c >= 99) return
    setC((c) => c + 1)
  }
  const handleRest = () => {
    if (c <= 1) return
    setC((c) => c - 1)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = e.currentTarget.valueAsNumber

    if (newVal >= 1 && newVal <= 99) setC(newVal)
  }

  if (!product || !id) {
    return (
      <section className="w-screen p-4 h-screen flex-1">
        <Alert variant={"destructive"}>Producto con id:{id} inexistente</Alert>
      </section>
    )
  }

  return (
    <>
      <section className="grid xl:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr] xl:grid-rows-[auto] lg:grid-rows-[1fr_1fr] p-4 flex-col gap-5 w-full h-full">
        <picture className="md:flex-row col-span-1  flex gap-10 items-center relative flex-col">
          <aside className="gap-2 flex  md:flex-col   ">
            {product.description.src.map((src, index) => {
              return (
                <img
                  key={index + "picture"}
                  className={` ${
                    value === src
                      ? "scale-110 border-2  border-grey-blue-400 dark:border-pinky-300"
                      : ""
                  } aspect-square rounded-md object-[fit]`}
                  height={70}
                  srcSet={src}
                  width={70}
                  onClick={() => changeImage(src)}
                />
              )
            })}
          </aside>
          <img
            className={`aspect-square w-[80%]  rounded-md object-contain`}
            srcSet={value}
            style={{ viewTransitionName: `hero_${id}` }}
          />
        </picture>

        <article className="flex gap-10 px-8  relative  items-start col-span-1 flex-col">
          <header className="flex gap-5   items-start flex-col">
            <h2
              className={` [text-wrap:balance]  text-start text-4xl`}
              style={{ viewTransitionName: `title_${id}` }}
            >
              {product.productName}
            </h2>
            <Button disabled className="absolute top-0 right-0" size={"icon"} variant={"ghost"}>
              <Heart />
            </Button>
            <section
              className="inline-flex text-3xl gap-2"
              style={{ viewTransitionName: `pricing_${id}` }}
            >
              {product.hasDiscount ? (
                <span className="line-through">{product.comparePrice}</span>
              ) : null}
              <strong>{product.price} </strong>
            </section>
          </header>

          <Badge className="w-fit flex xl:hidden">
            {product.hasStock ? "disponible" : "sin stock"}
          </Badge>

          <form className="w-full flex gap-5 items-center xl:hidden" onSubmit={resetC}>
            <AddToCartButton
              hasStock={product.hasStock}
              productId={id}
              productName={product.productName}
              q={c}
              src={product.src}
            />
            <div className="max-w-xs mx-auto">
              <div className="relative flex items-center max-w-[8rem]">
                <Button
                  className="rounded-e-none dark:bg-grey-blue/30
 text-grey-blue hover:bg-pinky/30  dark:text-pinky"
                  size={"icon"}
                  type="button"
                  variant={"outline"}
                  onClick={handleRest}
                >
                  <Minus strokeWidth={1} />
                </Button>
                <Input
                  data-input-counter
                  required
                  aria-describedby="helper-text-explanation"
                  className="text-center m-0 p-0 font-semibold rounded-none"
                  id="quantity-input"
                  max={99}
                  maxLength={2}
                  min={0}
                  placeholder="99"
                  type="number"
                  value={c}
                  onChange={handleChange}
                />
                <Button
                  className="rounded-s-none dark:bg-grey-blue/30
 text-grey-blue hover:bg-pinky/30  dark:text-pinky"
                  size={"icon"}
                  type="button"
                  variant={"outline"}
                  onClick={handleSum}
                >
                  <Plus strokeWidth={1} />
                </Button>
              </div>
            </div>
          </form>

          <footer className="hidden xl:flex flex-col gap-2">
            <span>
              <strong>Detalles</strong>
            </span>

            <p className="whitespace-pre-line ">{product.description.text}</p>

            <p className="whitespace-pre-line ">{product.description.nota}</p>
          </footer>
        </article>

        <footer className="xl:hidden">
          <span>
            <strong>Detalles</strong>
          </span>

          <p className="whitespace-pre-line ">{product.description.text}</p>

          <p className="whitespace-pre-line ">{product.description.nota}</p>
        </footer>

        <aside className="hidden xl:flex col-span-1 text-center w-auto gap-5 [text-wrap:balance] flex-col px-8 justify-center">
          <Badge className="w-fit">{product.hasStock ? "disponible" : "sin stock"}</Badge>

          <form className="w-full hidden gap-5 items-center xl:flex" onSubmit={resetC}>
            <AddToCartButton
              hasStock={product.hasStock}
              productId={id}
              productName={product.productName}
              q={c}
              src={product.src}
            />
            <div className="max-w-xs mx-auto">
              <div className="relative flex items-center max-w-[8rem]">
                <Button
                  className="rounded-e-none dark:bg-grey-blue/30
 text-grey-blue hover:bg-pinky/30  dark:text-pinky"
                  size={"icon"}
                  type="button"
                  variant={"outline"}
                  onClick={handleRest}
                >
                  <Minus strokeWidth={1} />
                </Button>
                <Input
                  data-input-counter
                  required
                  aria-describedby="helper-text-explanation"
                  className="text-center m-0 p-0 font-semibold rounded-none"
                  id="quantity-input"
                  max={99}
                  maxLength={2}
                  min={0}
                  placeholder="99"
                  type="number"
                  value={c}
                  onChange={handleChange}
                />
                <Button
                  className="rounded-s-none dark:bg-grey-blue/30
 text-grey-blue hover:bg-pinky/30  dark:text-pinky"
                  size={"icon"}
                  type="button"
                  variant={"outline"}
                  onClick={handleSum}
                >
                  <Plus strokeWidth={1} />
                </Button>
              </div>
            </div>
          </form>
        </aside>
      </section>
    </>
  )
}

export default memo(Product)
