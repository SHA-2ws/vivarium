import { useLoaderData } from "react-router-dom"
import "../../index.css"
import { useEffect } from "react"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import SvgComponent from "@/components/svg"

const ReceiptPage = () => {
  const product = useLoaderData() as unknown

  useEffect(() => {
    if (product !== null) {
      window.print()
    }
  }, [product])

  return (
    <>
      <article className="place-content-center grid m-auto">
        <section
          className="border-l-2 overflow-visible shadow-2xl shadow-dark-blue-800/90 dark:shadow-pinky/10 p-4 backdrop-blur-md rounded-lg bg-gradient-to-br from-dark-blue-800 via-dark-blue-800/20 to-dark-blue-800 dark:from-pinky/20 dark:via-pinky-100/30 dark:to-pinky/10 flex-col flex capitalize gap-5  min-h-full justify-center"
          id="invoice"
        >
          <div className="flex-wrap flex gap-2">
            <SvgComponent height={36} width={36} />

            <h1
              className="leading-none bg-gradient-to-r fill-transparent  dark:from-pinky-200 dark:to-pinky from-grey-blue-500 to-dark-blue-700  font-geist-bold font-bold "
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: 30
              }}
            >
              Vivarium
            </h1>
          </div>

          <header className="gap-5  grid md:grid-cols-[auto_auto_auto]">
            <div>
              <h2 className="[text-wrap:balance]">
                <strong>Pedido #{product.productId}</strong>
              </h2>
              <p>
                <strong>Fecha: </strong>
                <span>{product.timestamp}</span>
              </p>
            </div>

            <Separator className="md:flex hidden" orientation={"vertical"} />

            <div>
              <p>
                <strong>Titular: </strong>
                {product.owner}
              </p>
              <p>
                <strong>Direccion: </strong>
                {product.direction}
              </p>
            </div>
          </header>

          <section className="w-full self-center h-full">
            <Table>
              <TableCaption>
                <footer className="gap-1 p-2 flex justify-between w-full">
                  <p>
                    <strong>Unidades: </strong>
                    <span>{product.size}</span>
                  </p>
                  <p>
                    <strong>Total: </strong>
                    {product.total}
                  </p>
                </footer>
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">Producto</TableHead>
                  <TableHead className="text-center">Precio</TableHead>
                  <TableHead className="text-center">Cantidad</TableHead>
                  <TableHead className="text-center">Subtotal</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-center">
                {product.products.map(({ price, productName, q }) => {
                  return (
                    <TableRow>
                      <TableCell className="[text-wrap:balance]">{productName}</TableCell>
                      <TableCell>{price}</TableCell>
                      <TableCell>{q}</TableCell>
                      <TableCell>{q}</TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </section>
        </section>
      </article>
    </>
  )
}

export default ReceiptPage
