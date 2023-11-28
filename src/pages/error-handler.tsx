import type { ErrorResponse } from "react-router-dom"

import { Link } from "react-router-dom"
import { useRouteError } from "react-router-dom"

import { Button } from "@/components/ui/button"
import NotFoundIcon from "@/components/ui/icons/404Icon"

type ErrorHandler = {
  message: string
} & ErrorResponse
export default function ErrorPage() {
  const error = useRouteError() as ErrorHandler

  return (
    <article
      className="flex flex-col justify-center gap-5 items-center w-auto h-full flex-1 p-4  "
      id="error-page"
    >
      <header className="flex gap-2 items-center">
        <NotFoundIcon />
        <h1 className="text-4xl flex flex-col">
          <span className="font-extrabold">{error.status}</span>
          {error.statusText}
        </h1>
      </header>

      <p className="[text-wrap:balance] text-center">{error.data || error.message}</p>
      <p>
        <Button asChild>
          <Link className="z-50 sticky" to={"/"}>
            Ir al inicio
          </Link>
        </Button>
      </p>
      <p className="flex gap-3 items-center text-center" />
    </article>
  )
}
