import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import React, { LegacyRef, forwardRef, useCallback } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { Button } from "./button"

export function Carousel({ children }: { children: React.ReactNode }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  // const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  return (
    <>
      <section
        ref={emblaRef}
        className="embla__viewport w-[320px]  md:w-[720px] lg:w-[1080px] items-center overflow-hidden"
      >
        {children}
      </section>
      <footer className="flex min-w-[300px] w-full absolute -translate-y-[50%] px-10 justify-between">
        <Button size={"icon"} variant={"secondary"} onClick={scrollPrev}>
          <ChevronLeftIcon />
        </Button>
        <Button size={"icon"} variant={"secondary"} onClick={scrollNext}>
          <ChevronRightIcon />
        </Button>
      </footer>
    </>
  )
}

export const CarouselContainer = forwardRef(({ children }: { children: React.ReactNode }, ref) => {
  return (
    <div
      ref={ref as LegacyRef<HTMLDivElement>}
      className="embla__container items-start justify-start [backface-visibility:hidden] [touch-action:pan-y] flex"
    >
      {children}
    </div>
  )
})

export const CarouselItem = forwardRef(({ children }: { children: React.ReactNode }, ref) => {
  return (
    <div
      ref={ref as LegacyRef<HTMLDivElement>}
      className="embla__slide min-w-0 lg:flex-[0_0_calc(100%_/_3)] md:flex-[0_0_33%] flex-[0_0_calc(100%_/_1)]"
    >
      {children}
    </div>
  )
})
