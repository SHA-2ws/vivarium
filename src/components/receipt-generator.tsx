import { ReceiptIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
// import { getFirestore } from "firebase/firestore"
import { useNavigate } from "react-router-dom"

import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Arrow, Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { app } from "@/services/firebase"

const validationOrderSchema = z.object({
  orderId: z.string().uuid("Ingrese una Orden Valida")
})

type ValidationSchema = z.infer<typeof validationOrderSchema>

function ReceiptGenerator() {
  const navigate = useNavigate()
  // const db = getFirestore(app())
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
      navigate("/pedidos/" + data.orderId)
    } catch (error) {
      console.error(error)
    } finally {
      reset()
    }
  })

  return (
    <Popover>
      <Tooltip>
        <TooltipTrigger asChild>
          <PopoverTrigger asChild>
            <Button size={"icon"} variant={"outline"}>
              <ReceiptIcon strokeWidth={1} />
            </Button>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>Ver Pedidos</p>
          <Arrow />
        </TooltipContent>
      </Tooltip>

      <PopoverContent className="w-80">
        <form className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Ver Pedido</h4>
            <p className="text-sm text-muted-foreground">
              Ingresa el Numero de Orden para poder ver el pedido.
            </p>
          </div>
          <div className="grid ">
            <div className="grid grid-cols-[auto_auto_auto] items-center gap-4">
              <Label htmlFor="width">#</Label>
              <Input
                {...register("orderId")}
                className="h-8"
                id="orderId"
                placeholder="Numero de orden"
              />

              <Button onClick={onSubmit}>Ver</Button>
            </div>
            {Boolean(errors.orderId) && (
              <small className="text-destructive text-start ml-[45px]">
                {errors.orderId?.message}
              </small>
            )}
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}

export default ReceiptGenerator
