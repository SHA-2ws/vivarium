import { Suspense, lazy } from "react"
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom"
import { collection, getDocs, getFirestore } from "firebase/firestore"

import ErrorPage from "@/pages/error-handler"

const Product = lazy(() => import("@/pages/product"))
const Home = lazy(() => import("@/pages/app/app"))

import LayoutApp from "./app"

import { getProductBy } from "@/services/getProduct"

import CategoriesRoutes from "./categorias"

import CheckoutPage from "@/pages/checkout"
import { DetailedProduct, getCleanDoc, newestProducts, salesProducts } from "@/services/getProducts"
import { app } from "@/services/firebase"
import LoadingHome from "@/pages/app/home-fallback"
import ProductLoading from "@/pages/product/product-fallback"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<LayoutApp />} errorElement={<ErrorPage />} path="/">
      <Route
        element={
          <Suspense fallback={<LoadingHome />}>
            <Home />
          </Suspense>
        }
        loader={async () => {
          const store = getFirestore(app())
          const db = collection(store, "products")

          const novedades = await getDocs(newestProducts(db))
          const ofertas = await getDocs(salesProducts(db))

          return {
            novedades: getCleanDoc(novedades, "productId") as DetailedProduct[],
            ofertas: getCleanDoc(ofertas, "productId") as DetailedProduct[]
          }
        }}
        path="/"
      />
      {CategoriesRoutes}
      <Route
        element={
          <Suspense fallback={<ProductLoading />}>
            <Product />
          </Suspense>
        }
        loader={async ({ params: { id } }) => {
          const store = getFirestore(app())

          if (id) return getProductBy(store, id)
          else return null
        }}
        path="/productos/:id"
      />
      <Route index element={<CheckoutPage />} path="/checkout" />
    </Route>
  )
)
