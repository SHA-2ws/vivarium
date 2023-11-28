import { Suspense, lazy } from "react"
import { Route } from "react-router-dom"

import Categorias from "@/pages/categories/categories"
import { Category, getProductsBy } from "@/services/getProducts"
const CategoryPage = lazy(() => import("@/pages/categories/[category]"))

import CategoryBanner from "@/components/category-banner"

import { getFirestore } from "firebase/firestore"

import { app } from "@/services/firebase"
import LoadingCategory from "@/pages/categories/categories-fallback"
const CategoriesRoutes = (
  <>
    <Route index element={<CategoryBanner />} path="/categorias" />
    <Route element={<Categorias />} path="/categorias">
      <Route
        element={
          <Suspense fallback={<LoadingCategory />}>
            <CategoryPage />
          </Suspense>
        }
        loader={({ params: { categoria } }) => {
          if (categoria) return getProductsBy(categoria as Category, getFirestore(app()))
          else return null
        }}
        path="/categorias/:categoria/"
      />
    </Route>
  </>
)

export default CategoriesRoutes
