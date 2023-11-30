import { Suspense, lazy } from "react"
import { createBrowserRouter, Route, createRoutesFromElements, defer } from "react-router-dom"
import { collection, getDocs, getFirestore } from "firebase/firestore"

const Product = lazy(() => import("@/pages/product"))
const Home = lazy(() => import("@/pages/app/app"))

import LayoutApp from "./app"
import CategoriesRoutes from "./categorias"

import { newestProducts, salesProducts } from "@/services/getProducts"
import { getProductBy } from "@/services/getProduct"
import { app } from "@/services/firebase"
import CheckoutPage from "@/pages/checkout"
import LoadingHome from "@/pages/app/home-fallback"
import ProductLoading from "@/pages/product/product-fallback"
import ErrorPage from "@/pages/error-handler"
import ReceiptPage from "@/pages/invoice"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
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

            const novedades = getDocs(newestProducts(db))
            const ofertas = getDocs(salesProducts(db))

            return defer({
              novedades,
              ofertas
            })
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

            if (id) return getProductBy(store, id, "products")
            else return null
          }}
          path="/productos/:id"
        />
        <Route index element={<CheckoutPage />} path="/checkout" />
      </Route>
      <Route
        element={
          <Suspense fallback={<div>loading...</div>}>
            <ReceiptPage />
          </Suspense>
        }
        loader={async ({ params: { id } }) => {
          const store = getFirestore(app())

          if (id) return getProductBy(store, id, "orders")
          else return null
        }}
        path="/pedidos/:id"
      />
    </>
  )
)
