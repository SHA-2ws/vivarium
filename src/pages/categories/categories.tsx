import { Outlet } from "react-router-dom"

function Categorias() {
  return (
    <>
      <section className="flex flex-col w-full gap-5">
        <section className="flex-1 flex gap-5 flex-wrap overflow-hidden justify-center ">
          <Outlet />
        </section>
      </section>
    </>
  )
}

export default Categorias
