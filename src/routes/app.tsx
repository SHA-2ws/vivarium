import { useEffect } from "react"
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom"

import { progress } from "@/lib/utils"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const LayoutApp = () => {
  const navigation = useNavigation()

  useEffect(() => {
    if (navigation.state === "idle") {
      progress.finish()
    }
    if (navigation.state === "loading") {
      progress.start()
    }
  }, [navigation.state])

  return (
    <>
      <ScrollRestoration
        getKey={(location) => {
          const paths = ["/products"]

          return paths.includes(location.pathname)
            ? // home and notifications restore by pathname
              location.pathname
            : // everything else by location like the browser
              location.key
        }}
      />
      <Navbar />
      <main className="flex-1 mt-[15px] min-w-screen min-h-max relative flex flex-col items-center px-4 py-2 gap-10 justify-center ">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default LayoutApp
