import { BannerLoading } from "@/components/category-banner"
import { ProductCardFallback } from "@/components/product-card"
import { Carousel, CarouselContainer, CarouselItem } from "@/components/ui/carousel"
import NewIcons from "@/components/ui/icons/nuevos"
import OffersIcon from "@/components/ui/icons/ofertas"
import { Skeleton } from "@/components/ui/skeleton"

const LoadingHome = () => {
  return (
    <>
      <section className="flex-col overflow-hidden rounded-[30px] bg-gradient-to-b dark:from-pinky-100/30 dark:via-pinky-100/10 from-dark-blue-700/30 via-dark-blue-700/10  p-4 w-full backdrop-blur-sm  flex justify-center items-center">
        <h2 className="text-xl flex items-center gap-4 self-start font-geist-bold text-grey-blue-300/70 dark:text-pinky">
          <Skeleton>
            <NewIcons height={60} strokeWidth={2} width={60} />
          </Skeleton>{" "}
          <Skeleton>Novedades</Skeleton>
        </h2>
        <Carousel>
          <CarouselContainer>
            {[1, 2, 3].map((product) => {
              return (
                <CarouselItem key={product}>
                  <ProductCardFallback />
                </CarouselItem>
              )
            })}
          </CarouselContainer>
        </Carousel>
      </section>

      <BannerLoading />

      <section className="flex-col overflow-hidden rounded-[30px] bg-gradient-to-b dark:from-pinky-100/30 dark:via-pinky-100/10 from-dark-blue-700/30 via-dark-blue-700/10  p-4 w-full backdrop-blur-sm  flex justify-center items-center">
        <h2 className="text-xl flex items-center gap-4 self-start font-geist-bold text-grey-blue-300/70 dark:text-pinky">
          <Skeleton>
            <OffersIcon height={70} strokeWidth={2} width={70} />
          </Skeleton>{" "}
          <Skeleton>Ofertas</Skeleton>
        </h2>

        <Carousel>
          <CarouselContainer>
            {[1, 2, 3].map((product) => {
              return (
                <CarouselItem key={product}>
                  <ProductCardFallback />
                </CarouselItem>
              )
            })}
          </CarouselContainer>
        </Carousel>
      </section>
    </>
  )
}

export default LoadingHome
