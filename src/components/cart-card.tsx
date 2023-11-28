import { Minus, Plus, Trash } from "lucide-react"

import { Button } from "./ui/button"

export type HeaderCardType = {
  id: string
}

function HeaderCard({
  id,
  handleAdd,
  handleRemove,
  handleClear
}: { handleAdd: () => void; handleRemove: () => void; handleClear: () => void } & HeaderCardType) {
  return (
    <aside className="flex gap-2 " id={id}>
      <legend className="gap-5 flex justify-between items-center">
        <div className="flex  items-center gap-2">
          <Button size={"icon"} variant={"outline"} onClick={handleAdd}>
            <Plus strokeWidth={1} />
          </Button>
          <Button size={"icon"} variant={"outline"} onClick={handleRemove}>
            <Minus strokeWidth={1} />
          </Button>
          <Button size={"icon"} variant={"outline"} onClick={handleClear}>
            <Trash strokeWidth={1} />
          </Button>
        </div>
      </legend>
    </aside>
  )
}

export type BodyCardType = {
  name: string
  q: number
}

function BodyCard({ name, q }: BodyCardType) {
  return (
    <article className="[text-wrap:balance] flex-1">
      <p>
        {" "}
        <span>{name}</span>
      </p>
      {/* <p>
        {" "}
        descr: <span>{desc}</span>
      </p> */}
      <span>X {q}</span>
    </article>
  )
}

export type CartCard = HeaderCardType & BodyCardType
function CartCard({
  id,
  name,
  q,
  handleClear,
  handleAdd,
  handleRemove
}: { handleAdd: () => void; handleRemove: () => void; handleClear: () => void } & CartCard) {
  return (
    <section className="p-4 dark:border-pinky flex gap-5 border-grey-blue border rounded-xl">
      <BodyCard name={name} q={q} />
      <HeaderCard
        handleAdd={handleAdd}
        handleClear={handleClear}
        handleRemove={handleRemove}
        id={id}
      />
    </section>
  )
}

export default CartCard
