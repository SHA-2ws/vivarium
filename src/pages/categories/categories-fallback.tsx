import { ProductCardFallback } from "@/components/product-card"
import { Skeleton } from "@/components/ui/skeleton"

const LoadingCategory = () => {
  return (
    <>
      <aside className="h-full rounded-md p-4 bg-gradient-to-b dark:from-pinky-100/30 dark:via-pinky-100/10 from-dark-blue-700/30 via-dark-blue-700/10   flex-[0_0_23%]">
        <article className="flex flex-col my-3 gap-2 items-center justify-center">
          <Skeleton className="text-transparent">
            <p className="text-start font-bold w-full">Ordenar por:</p>
          </Skeleton>
          <Skeleton className="w-[180px]">pero bueno</Skeleton>
        </article>

        <Skeleton className="text-center text-xl w-full" />
        <article className="flex flex-col my-3 gap-5 items-center justify-center">
          <Skeleton className="text-transparent">
            <p className="text-start font-bold w-full">Precio</p>
          </Skeleton>
          <form className="flex items-end gap-3 justify-center">
            <div className="w-1/3 flex-col gap-2 flex">
              <Skeleton>desde</Skeleton>
              <Skeleton className="w-full h-[2em]" />
            </div>
            <div className="w-1/3 flex-col gap-2 flex">
              <Skeleton className="text-transparent">hasta</Skeleton>
              <Skeleton className="w-full h-[2em]" />
            </div>

            <Skeleton className="w-[50px] h-[2em]" />
          </form>
        </article>
      </aside>

      <section className="flex-wrap w-full flex-1 items-center justify-center gap-2  flex">
        {[1, 2, 3, 4, 5, 6, 8, 9, 10].map((vals) => {
          return (
            <div key={vals} className="flex-auto overflow-hidden">
              <ProductCardFallback />
            </div>
          )
        })}
      </section>
    </>
  )
}

export default LoadingCategory
