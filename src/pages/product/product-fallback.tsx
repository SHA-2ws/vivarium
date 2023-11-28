import { Heart } from "lucide-react"

import { Skeleton } from "@/components/ui/skeleton"

const ProductLoading = () => {
  return (
    <>
      <section className="grid xl:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr] xl:grid-rows-[auto] lg:grid-rows-[1fr_1fr] p-4 flex-col gap-5 w-full h-full">
        <picture className="md:flex-row col-span-1  flex gap-10 items-center relative flex-col">
          <aside className="gap-2 flex  md:flex-col   ">
            {[1, 2, 3, 4].map((key) => {
              return <Skeleton key={key} className="w-[70px] h-[70px]" />
            })}
          </aside>
          <Skeleton className={`aspect-square w-[80%]  rounded-md object-contain`} />
        </picture>

        <article className="flex gap-10 px-8  relative  items-start col-span-1 flex-col">
          <header className="flex gap-5   items-start flex-col">
            <Skeleton>
              <h2 className={` [text-wrap:balance]  text-start text-4xl`}>nombre del producto</h2>
            </Skeleton>

            <Skeleton className="absolute w-[40px] h-[40px] top-0 right-0">
              <Heart />
            </Skeleton>
            <section className="inline-flex text-3xl gap-2">
              <Skeleton>
                <strong>precio del producto</strong>
              </Skeleton>
            </section>
          </header>

          <Skeleton className="w-fit flex xl:hidden">disponible</Skeleton>

          <Skeleton className="py-6 w-full h-6 flex xl:hidden ">Comprar Ahora</Skeleton>
          <div className="w-full flex- xl:hidden">
            <Skeleton className="py-6 w-full h-6 flex xl:hidden ">Comprar Ahora</Skeleton>
          </div>

          <footer className="hidden xl:flex flex-col gap-2 w-5/6 ">
            <span>
              <Skeleton>
                <p className="whitespace-pre-line ">textos largos</p>
              </Skeleton>
            </span>

            <Skeleton className=" w-1/2">
              <p className="whitespace-pre-line ">textos largos</p>
            </Skeleton>
            <Skeleton>
              <p className="whitespace-pre-line ">textos largos</p>
            </Skeleton>

            <Skeleton className=" w-1/2">
              <p className="whitespace-pre-line ">textos largos</p>
            </Skeleton>
          </footer>
        </article>

        <footer className="xl:hidden flex flex-col gap-4">
          <span>
            <Skeleton>
              <p className="whitespace-pre-line ">textos largos</p>
            </Skeleton>
          </span>

          <Skeleton>
            <p className="whitespace-pre-line ">textos largos</p>
          </Skeleton>

          <Skeleton className=" w-1/2">
            <p className="whitespace-pre-line ">textos largos</p>
          </Skeleton>
          <Skeleton className=" w-1/2">
            <p className="whitespace-pre-line ">textos largos</p>
          </Skeleton>
        </footer>

        <aside className="hidden xl:flex col-span-1 text-center w-auto gap-5 [text-wrap:balance] flex-col px-8 justify-center">
          <Skeleton className="w-fit xl:flex hidden">disponible</Skeleton>

          <Skeleton className="py-6 w-full h-6  xl:flex hidden ">Comprar Ahora</Skeleton>
          <Skeleton className="py-6 w-full h-6 xl:flex hidden ">Comprar Ahora</Skeleton>
        </aside>
      </section>

      <section>productos relacionados</section>
    </>
  )
}

export default ProductLoading
