import { Link } from "react-router-dom"

import PlantasExterior from "./ui/icons/plantas-exterior"
import Sustratos from "./ui/icons/sustratos"
import Fertilizante from "./ui/icons/fertilizante"
import Agroquimicos from "./ui/icons/agroquimicos-icon"
import Cesped from "./ui/icons/cesped-icon"
import Hogar from "./ui/icons/hogar-icon"
import { Skeleton } from "./ui/skeleton"

import PlantasInterior from "@/components/ui/icons/plantas-interior"

const categories = [
  {
    path: "/interior",
    label: "Plantas Interior",
    icon: <PlantasInterior height={60} width={60} />
  },
  {
    path: "/exterior",
    label: "Plantas Exterior",
    icon: <PlantasExterior height={60} width={60} />
  },
  {
    path: "/sustratos",
    label: "Sustratos",
    icon: <Sustratos height={60} width={60} />
  },
  {
    path: "/fertilizantes",
    label: "Fertilizantes",
    icon: <Fertilizante height={60} width={60} />
  },
  {
    path: "/agroquimicos",
    label: "Agroquímicos",
    icon: <Agroquimicos height={60} width={60} />
  },
  {
    path: "/cesped",
    label: "Césped",
    icon: <Cesped height={60} width={60} />
  },
  {
    path: "/hogar",
    label: "Hogar",
    icon: <Hogar height={60} width={60} />
  }
]

function CategoryBanner() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-4">
      {categories.map(({ label, path, icon: Icon }) => {
        return (
          <Link
            key={path}
            className="flex-1 min-h[120px] min-w-[120px] hover:scale-105 transition-transform duration-150  "
            to={`/categorias${path}`}
          >
            <p className="flex flex-col rounded-2xl  items-center justify-center gap-1 backdrop-blur-md shadow-lg shadow-grey-blue-200/30 dark:shadow-pinky-100/30 p-2 ">
              {Icon}
              <span className="text-center [text-wrap:nowrap]">{label}</span>
            </p>
          </Link>
        )
      })}
    </section>
  )
}

export default CategoryBanner

export function BannerLoading() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-4">
      {[1, 2, 3, 4, 5, 6, 7].map((index) => {
        return (
          <Skeleton
            key={index + "banner"}
            className="flex-1 min-h[120px] rounded-2xl  min-w-[120px]"
          >
            <p className="flex flex-col  items-center justify-center gap-1 backdrop-blur-md shadow-lg shadow-grey-blue-200/30 dark:shadow-pinky-100/30 p-2 ">
              <div className="w-[60px] h-[60px]" />
              <div>
                {" "}
                <span className="text-center [text-wrap:nowrap]">categoria</span>
              </div>
            </p>
          </Skeleton>
        )
      })}
    </section>
  )
}
