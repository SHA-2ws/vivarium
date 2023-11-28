import { useLoaderData } from "react-router-dom"

import ProductCard from "@/components/product-card"
import { DetailedProduct } from "@/services/getProducts"
import CategoryBanner from "@/components/category-banner"
import { Carousel, CarouselContainer, CarouselItem } from "@/components/ui/carousel"
import NewIcons from "@/components/ui/icons/nuevos"
import OffersIcon from "@/components/ui/icons/ofertas"

function Home() {
  const data = useLoaderData() as { novedades: DetailedProduct[]; ofertas: DetailedProduct[] }

  return (
    <>
      <section className="flex-col overflow-hidden rounded-[30px] bg-gradient-to-b dark:from-pinky-100/30 dark:via-pinky-100/10 from-dark-blue-700/30 via-dark-blue-700/10  p-4 w-full backdrop-blur-sm  flex justify-center items-center">
        <h2 className="text-xl flex items-center gap-4 self-start font-geist-bold text-grey-blue-300/70 dark:text-pinky">
          <NewIcons height={60} strokeWidth={2} width={60} /> Novedades
        </h2>
        <Carousel>
          <CarouselContainer>
            {data.novedades.map((product) => {
              return (
                <CarouselItem key={product.productId}>
                  <ProductCard {...product} forNew />
                </CarouselItem>
              )
            })}
          </CarouselContainer>
        </Carousel>
      </section>

      <CategoryBanner />

      <section className="flex-col overflow-hidden rounded-[30px] bg-gradient-to-b dark:from-pinky-100/30 dark:via-pinky-100/10 from-dark-blue-700/30 via-dark-blue-700/10  p-4 w-full backdrop-blur-sm  flex justify-center items-center">
        <h2 className="text-xl flex items-center gap-4 self-start font-geist-bold text-grey-blue-300/70 dark:text-pinky">
          <OffersIcon height={70} strokeWidth={2} width={70} /> Ofertas
        </h2>
        <Carousel>
          <CarouselContainer>
            {data.ofertas.map((product) => {
              return (
                <CarouselItem key={product.productId}>
                  <ProductCard {...product} forSale />
                </CarouselItem>
              )
            })}
          </CarouselContainer>
        </Carousel>
      </section>
    </>
  )
}

export default Home
