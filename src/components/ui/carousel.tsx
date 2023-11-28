import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import React, { forwardRef } from "react"

export function Carousel({ children }: { children: React.ReactNode }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <section
      ref={emblaRef}
      className="embla__viewport w-[320px] md:w-[720px] lg:w-[1080px]  overflow-hidden"
    >
      {children}
    </section>
  )
}

export const CarouselContainer = forwardRef(({ children }: { children: React.ReactNode }) => {
  return (
    <div className="embla__container items-start justify-start [backface-visibility:hidden] [touch-action:pan-y] flex">
      {children}
    </div>
  )
})

export const CarouselItem = forwardRef(({ children }: { children: React.ReactNode }) => {
  return (
    <div className="embla__slide min-w-0 lg:flex-[0_0_calc(100%_/_3)] md:flex-[0_0_33%] flex-[0_0_calc(100%_/_1)]">
      {children}
    </div>
  )
})
