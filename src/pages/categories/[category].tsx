import { useLoaderData } from "react-router-dom"
import { Label } from "@radix-ui/react-dropdown-menu"
import { ArrowRight } from "lucide-react"
import { Suspense } from "react"
import accounting from "accounting"

import ProductCard from "@/components/product-card"
import { Alert } from "@/components/ui/alert"
import { DetailedProduct } from "@/services/getProducts"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

function Category() {
  const products = useLoaderData() as DetailedProduct[] | null

  if (!products) {
    return <Alert variant={"destructive"}>No hay productos para esta categoria</Alert>
  }

  if (products.length === 0) {
    return <Alert variant={"warn"}>No hay productos disponibles</Alert>
  }

  const minmax = products.map((el) => accounting.unformat(el.price, ","))

  const min = Math.min(...minmax)
  const max = Math.max(...minmax)

  return (
    <>
      <aside className="h-full rounded-md p-4 bg-gradient-to-b dark:from-pinky-100/30 dark:via-pinky-100/10 from-dark-blue-700/30 via-dark-blue-700/10   flex-[0_0_23%]">
        <article className="flex flex-col my-3 gap-2 items-center justify-center">
          <p className="text-start font-bold w-full">Ordenar por:</p>
          <Select disabled>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="A-Z" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </article>

        <h3 className="text-center text-xl">Filtros</h3>
        <article className="flex flex-col my-3 gap-2 items-center justify-center">
          <p className="text-start font-bold w-full">Precio</p>
          <form className="flex items-end gap-3 justify-center">
            <Label className="w-1/3">
              desde
              <Input disabled min={min} name="desde" placeholder={String(min)} type="number" />
            </Label>
            <Label className="w-1/3">
              hasta
              <Input
                disabled
                max={max}
                min={min}
                name="hasta"
                placeholder={String(max)}
                type="number"
              />
            </Label>

            <Button disabled size={"icon"} type="submit" variant={"outline"}>
              <ArrowRight />
            </Button>
          </form>
        </article>
      </aside>
      <Suspense fallback={<h1>loading...</h1>}>
        <section className="flex-wrap w-full flex-1 items-center justify-center gap-2  flex">
          {products.map((vals) => {
            return (
              <div key={vals.productId} className="flex-auto overflow-hidden">
                <ProductCard {...vals} />
              </div>
            )
          })}
        </section>
      </Suspense>
    </>
  )
}

export default Category
