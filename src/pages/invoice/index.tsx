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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { parsePrice } from "@/lib/utils"
import { progress } from "@/lib/utils"
import NavLink from "@/components/navlink"
const ReceiptPage = () => {
  const product = useLoaderData() as {
    productId: string
    timestamp: number
    owner: string
    direction: string
    size: number
    total: string
    coments: string
    email: string
    products: { price: string; productName: string; q: number }[]
  }

  useEffect(() => {
    progress.finish()

    if (product !== null) {
      window.print()
    }
  }, [product])

  if (!product) {
    return (
      <article className="place-content-center w-full h-full grid m-auto">
        <svg
          className="text-mandarina"
          height="50"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
          viewBox="0 0 512.000000 512.000000"
          width="50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="currentColor"
            stroke="none"
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          >
            <path d="M1315 5114 c-188 -44 -302 -104 -473 -247 -136 -114 -258 -267 -330 -412 -99 -200 -156 -466 -169 -780 -5 -149 -4 -163 15 -200 35 -70 104 -115 174 -115 114 0 524 171 723 302 225 147 414 410 501 693 15 50 28 91 30 93 4 5 106 -48 152 -80 111 -76 219 -215 268 -345 53 -137 53 -153 54 -1065 l0 -846 -262 -4 c-306 -4 -294 -1 -503 -125 -205 -121 -240 -136 -304 -131 -48 4 -78 17 -216 96 -88 51 -187 102 -220 114 -78 28 -225 31 -305 6 -142 -45 -296 -176 -367 -314 -79 -152 -77 -132 -81 -664 -4 -547 -2 -566 74 -718 64 -131 165 -232 296 -296 148 -74 167 -76 694 -76 449 0 461 0 482 20 29 28 30 82 1 109 -21 19 -39 20 -503 23 -464 3 -483 4 -538 25 -164 62 -279 180 -334 343 -18 51 -19 92 -19 535 0 472 0 481 23 545 45 130 139 238 261 298 68 34 82 37 155 37 95 -1 115 -9 323 -126 120 -68 141 -84 133 -97 -5 -10 -53 -82 -107 -162 l-98 -144 -260 -186 c-142 -102 -266 -197 -274 -211 -28 -50 27 -120 82 -103 11 3 123 80 249 170 126 90 232 164 236 164 4 0 49 -69 99 -153 51 -85 99 -160 108 -167 23 -19 71 -16 95 5 38 34 26 69 -84 254 l-104 174 113 170 114 170 63 16 c42 11 124 51 250 123 103 59 206 112 230 118 46 10 358 14 358 4 0 -14 -106 -182 -133 -211 -26 -28 -63 -43 -235 -100 -112 -38 -212 -76 -223 -86 -29 -27 -25 -81 7 -106 15 -12 34 -21 43 -21 25 0 390 124 438 149 61 30 103 77 164 178 29 48 58 96 65 106 10 16 32 -18 168 -265 87 -156 166 -291 178 -300 11 -10 31 -18 45 -18 30 0 73 42 73 72 0 13 -70 149 -155 302 -85 154 -155 280 -155 281 0 0 84 -11 188 -25 181 -25 192 -26 342 -14 286 24 434 28 484 14 25 -7 46 -15 46 -19 0 -4 -73 -30 -162 -60 -177 -58 -226 -81 -275 -133 -58 -61 -77 -118 -81 -254 l-4 -121 27 -21 c44 -35 86 -28 110 19 10 18 15 58 15 111 0 100 22 158 72 188 18 11 110 45 203 76 94 32 175 59 180 61 6 2 9 -28 7 -81 -4 -74 -1 -91 23 -145 32 -71 103 -142 170 -171 25 -11 105 -38 178 -61 229 -73 235 -78 302 -281 78 -236 82 -244 115 -258 38 -16 81 4 94 43 9 24 -1 61 -57 230 -98 294 -116 313 -392 402 -95 31 -188 66 -206 78 -83 56 -100 138 -52 259 21 54 30 68 47 68 12 0 82 20 156 45 187 63 255 75 417 75 166 0 249 -16 343 -66 85 -44 186 -147 224 -227 52 -112 56 -146 56 -608 0 -235 -4 -448 -9 -475 -35 -184 -167 -339 -346 -406 l-60 -23 -1392 -5 c-1304 -5 -1393 -6 -1410 -22 -26 -26 -22 -86 6 -110 23 -18 62 -18 1420 -16 1326 3 1399 4 1451 22 179 60 330 182 407 331 79 153 77 134 81 659 3 405 1 480 -13 550 -50 244 -221 435 -460 513 -68 22 -104 26 -241 31 -206 6 -288 -6 -479 -68 -218 -72 -222 -72 -389 -16 -161 55 -192 57 -491 31 -98 -8 -181 -15 -183 -15 -2 0 -2 210 0 468 5 526 3 516 83 678 53 109 151 220 253 288 84 55 142 81 142 62 0 -29 54 -177 99 -272 159 -332 388 -533 798 -698 319 -128 408 -135 495 -38 47 52 52 83 45 258 -18 411 -108 715 -281 945 -208 276 -520 478 -745 481 -42 1 -152 -4 -246 -10 -237 -16 -392 -56 -563 -147 -47 -25 -87 -43 -89 -41 -2 2 -11 35 -19 73 -50 242 -177 477 -354 652 -61 60 -77 71 -106 71 -43 0 -74 -30 -74 -72 0 -26 15 -47 88 -122 174 -181 278 -391 311 -631 l11 -77 -89 -93 c-48 -51 -115 -133 -148 -183 l-60 -89 -6 176 c-6 196 -22 279 -81 407 -93 200 -270 375 -462 454 l-51 22 -7 84 c-8 90 -27 167 -57 226 l-19 38 32 -6 c67 -12 185 -46 256 -75 87 -34 111 -36 140 -9 26 24 29 66 7 97 -34 48 -281 126 -450 142 -124 12 -373 21 -400 15z m161 -155 c52 -13 53 -7 -11 -150 -120 -272 -322 -533 -556 -720 -48 -38 -89 -79 -92 -91 -14 -51 47 -108 95 -89 37 14 172 125 264 217 156 155 297 354 400 561 52 107 58 115 67 92 16 -41 13 -207 -7 -293 -45 -199 -161 -420 -289 -554 -150 -155 -380 -283 -695 -387 -94 -31 -118 -36 -138 -26 -23 10 -24 15 -24 99 0 272 67 597 160 782 64 127 220 306 358 410 37 28 103 68 147 90 131 65 226 83 321 59z m2373 -915 c245 -69 543 -354 655 -626 74 -178 118 -417 120 -647 1 -170 -1 -173 -86 -152 -87 22 -286 100 -401 157 -292 146 -431 283 -563 558 -74 154 -107 283 -107 411 0 55 5 114 10 130 10 29 11 28 56 -67 91 -195 227 -393 377 -551 88 -93 263 -240 300 -252 38 -12 70 3 86 41 20 47 8 67 -90 144 -246 195 -440 453 -573 764 -19 44 -30 83 -25 88 14 14 95 27 142 22 25 -3 69 -12 99 -20z m-475 -21 c-31 -73 -54 -161 -60 -236 l-7 -88 -74 -34 c-196 -90 -364 -264 -448 -463 -67 -160 -68 -168 -72 -688 l-4 -470 -147 21 -147 20 -3 455 c-2 284 1 486 8 538 59 452 392 824 845 943 93 24 120 24 109 2z" />
            <path d="M1733 1110 c-48 -44 -36 -93 35 -147 116 -88 281 -78 388 22 30 29 35 39 32 71 -2 26 -11 43 -30 57 -32 24 -61 19 -112 -23 -67 -53 -136 -50 -212 11 -43 34 -72 37 -101 9z" />
            <path d="M3026 1109 c-40 -31 -36 -82 9 -124 106 -100 272 -110 387 -22 71 54 83 103 35 147 -28 27 -59 25 -95 -5 -35 -29 -92 -55 -122 -55 -26 0 -75 23 -119 55 -41 30 -60 31 -95 4z" />
            <path d="M2495 917 c-123 -41 -235 -142 -235 -213 0 -36 37 -74 72 -74 10 0 48 27 84 61 74 69 114 89 179 89 65 0 105 -20 179 -89 36 -34 74 -61 84 -61 35 0 72 38 72 75 0 57 -86 146 -186 192 -70 32 -185 41 -249 20z" />
          </g>
        </svg>{" "}
        <Alert className="mb-3" variant={"warn"}>
          <AlertTitle>El pedido no existe</AlertTitle>
          <AlertDescription>El numero de orden ingresado es invalido</AlertDescription>
        </Alert>
        <Button asChild variant={"link"}>
          <NavLink className="z-50" to={"/"}>
            Ir al Inicio
          </NavLink>
        </Button>
      </article>
    )
  }

  return (
    <>
      <article className="place-content-center w-full h-full grid m-auto">
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
                <span>{new Date(product.timestamp).toLocaleDateString()}</span>
              </p>
              <p>
                <strong>Detalles: </strong>
                <span>{product.coments}</span>
              </p>
            </div>

            <Separator className="md:flex hidden" orientation={"vertical"} />

            <div>
              <p>
                <strong>Titular: </strong>
                {product.owner}
              </p>
              <p>
                <strong>E-mail: </strong>
                {product.email}
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
                      <TableCell>{parsePrice(price, q)}</TableCell>
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
