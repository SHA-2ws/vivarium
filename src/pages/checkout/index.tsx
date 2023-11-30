import { Loader2, Paperclip, ShoppingCart, Trash2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { doc, getFirestore, setDoc } from "firebase/firestore"
import { ToastAction } from "@radix-ui/react-toast"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import CheckoutIcon from "@/components/ui/icons/checkout"
import { useCheckout } from "@/store/checkout-context"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { app } from "@/services/firebase"
import { useToast } from "@/components/ui/use-toast"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useCart } from "@/store/cart-context"
import { parsePrice } from "@/lib/utils"
const validationOrderSchema = z.object({
  owner: z.string().min(1).max(50),
  email: z.string().min(7).email("Email invalido"),
  direction: z.string().min(1).max(50),
  coments: z.string().max(50)
})

type ValidationSchema = z.infer<typeof validationOrderSchema>

const CheckoutPage = () => {
  const { products, total } = useCheckout()
  const { manage } = useCart()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const { toast } = useToast()

  const db = getFirestore(app())
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationOrderSchema)
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      const id = window.crypto.randomUUID()
      const timestamp = Date.now()

      setLoading(true)
      await setDoc(doc(db, "orders", id), {
        timestamp,
        total,
        size: products.length,
        products: products.map(({ productName, q, price, productId }) => {
          return {
            productName,
            q,
            price,
            productId
          }
        }),
        ...data
      })

      setLoading(false)
      setOpen(false)
      manage({ action: "clearAll" })
      toast({
        duration: Infinity,
        title: "Se cargo una nueva orden de compra",
        description: `# ${id} `,
        action: (
          <ToastAction asChild altText="copy">
            <Button
              size={"icon"}
              variant={"outline"}
              onClick={() => {
                navigator.clipboard.writeText(id)
              }}
            >
              <Paperclip height={17} strokeWidth={1} width={17} />
            </Button>
          </ToastAction>
        )
      })
    } catch (error) {
      console.error(error)
    } finally {
      reset()
    }
  })

  return (
    <section className="flex w-full min-h-max">
      {products.length > 0 ? (
        <div className="grid w-full h-full gap-10 md:grid-cols-[1fr_1fr]">
          <header className="flex text-xl flex-col  w-full gap-5 justify-center items-center">
            <h2 className="inline-flex text-center justify-center w-full font-bold text-grey-blue dark:text-pinky items-center gap-2 text-xl">
              <CheckoutIcon height={60} width={60} />
              Checkout
            </h2>
            <p className="inline-flex gap-2">
              <strong>Total:</strong>
              <span>{total}</span>
            </p>
            <div>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="py-4 text-base font-bold" size={"lg"}>
                    Generar Orden de Compra
                  </Button>
                </DialogTrigger>
                <DialogContent className="flex w-[280px] flex-col gap-5">
                  <DialogHeader className="flex flex-col  w-full  gap-5">
                    <DialogTitle className="text-start self-start">Orden de Compra #{}</DialogTitle>
                    <section className="flex flex-col r gap-5">
                      <form className="w-full flex-col flex gap-4">
                        <label className="flex flex-col gap-2">
                          Nombre Completo
                          <Input
                            {...register("owner")}
                            required
                            className="w-full"
                            name="owner"
                            placeholder="Juan Doe"
                            type="text"
                          />
                          {Boolean(errors.owner) && (
                            <small className="text-destructive">{errors.owner?.message}</small>
                          )}
                        </label>
                        <label className="flex flex-col gap-2">
                          E-mail
                          <Input
                            {...register("email")}
                            required
                            className="w-full"
                            name="email"
                            placeholder="TuSitio@Ejemplo.com"
                            type="email"
                          />
                          {Boolean(errors.email) && (
                            <small className="text-destructive">{errors.email?.message}</small>
                          )}
                        </label>
                        <label className="flex flex-col gap-2">
                          Domicílio
                          <Input
                            {...register("direction")}
                            required
                            className="w-full"
                            name="direction"
                            placeholder="Calle 123"
                            type="text"
                          />
                          {Boolean(errors.direction) && (
                            <small className="text-destructive">{errors.direction?.message}</small>
                          )}
                        </label>
                        <label className="flex flex-col gap-2">
                          Descripción
                          <Input
                            {...register("coments")}
                            className="w-full"
                            name="coments"
                            placeholder="Contenido fragil..."
                            type="text"
                          />
                        </label>
                      </form>
                    </section>
                  </DialogHeader>
                  <DialogFooter>
                    {!loading ? (
                      <Button onClick={onSubmit}>Generar</Button>
                    ) : (
                      <Button disabled>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generando
                      </Button>
                    )}
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </header>
          <section
            className="flex

    max-h-[80vh] overflow-auto
    py-2
    dark:border-pinky-400 border-grey-blue-400  rounded-l-lg border-l-2 flex-col w-full p-4 gap-10"
          >
            <section
              className="flex flex-col item-center py-2 gap-4
      md:justify-center w-full h-screen  md:items-start"
            >
              {products.map(({ productName, price, src, q, productId }) => {
                return (
                  <article
                    key={productId}
                    className="p-2 relative flex flex-col md:flex-row  bg-gradient-to-r  w-full
              px-3
              min-w-[260px]
              rounded-3xl
              self-start
              justify-start
              from-dark-blue-700/30 via-dark-blue-700/10
              dark:from-pinky-100/30
            dark:via-pinky-300/20
          md:rounded-full gap-3 md:justify-between items-start"
                  >
                    <header
                      className="flex items-center
              [text-wrap:balance] justify-center gap-2"
                    >
                      <picture>
                        <img
                          alt={productName}
                          className="aspect-square object-center p-0 rounded-full "
                          height={60}
                          srcSet={src.join("")}
                          width={60}
                        />
                      </picture>

                      <legend className="flex flex-col start-full ">
                        <h3>{productName}</h3>
                        <span>Unidades: {q}</span>
                        <p className="inline-flex gap-2">
                          <span>{parsePrice(price, q)}</span>
                        </p>
                      </legend>
                    </header>

                    <Button
                      className="-translate-x-5 absolute -translate-y-2 bottom-0 right-0"
                      size={"icon"}
                      variant={"outline"}
                      onClick={() =>
                        manage({
                          action: "clear",
                          value: { id: productId, q, name: productName }
                        })
                      }
                    >
                      <Trash2 strokeWidth={1} />
                    </Button>
                  </article>
                )
              })}
            </section>
          </section>
        </div>
      ) : (
        <article className="place-content-center flex w-full gap-5 flex-col items-center justify-center">
          <Alert className="w-fit " variant={"warn"}>
            <AlertDescription className="w-full items-center flex justify-center">
              <span className="inline-flex font-bold gap-2 items-center text-center">
                <ShoppingCart /> Tu carrito esta vacio
              </span>
            </AlertDescription>
          </Alert>

          <Button asChild variant="link">
            <Link to="/categorias">Ver Categorias </Link>
          </Button>
        </article>
      )}
    </section>
  )
}

export default CheckoutPage
