import { GithubIcon } from "lucide-react"
import { Link } from "react-router-dom"

import SvgComponent from "@/components/svg"

const Footer = () => {
  return (
    <footer className="text-center rounded-[30px] z-10 border-t-2 mt-[20px] backdrop-blur-md  flex flex-wrap items-center h-full justify-center gap-5 p-8 w-full leading-[3rem] sticky dark:text-pinky/50 text-grey-blue-100/50  opacity-70">
      <aside className=" flex gap-2 items-center justify-center">
        © {new Date().getFullYear()} Vivarium
        <SvgComponent height={36} width={36} />
      </aside>
      <section className="">
        <ul className=" flex items-center justify-center gap-5">
          <li>
            <Link target="__blank" to={"https://github.com/SHA-2ws/vivarium"}>
              <GithubIcon />
            </Link>
          </li>
        </ul>
      </section>
      <section className="">
        Hecho por <a>Joel Correa</a> con 🖤
      </section>
      <section className="">
        {" "}
        <span title={window.navigator.onLine ? "online" : "offline"}>
          {window.navigator.onLine ? "🟢" : "🔴"} Server{" "}
          {window.navigator.onLine ? "online" : "offline"}
        </span>
      </section>
    </footer>
  )
}

export default Footer
