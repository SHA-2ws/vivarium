import { NavLink as NL, type NavLinkProps } from "react-router-dom"

function NavLink(props: NavLinkProps) {
  return (
    <NL
      unstable_viewTransition={true}
      {...props}
      className={({ isActive }) => {
        const base =
          "h-7 truncate px-2 w-fit m-0 text-ellipsis text-center justify-between flex items-center  rounded-sm"
        const def = `${base} dark:hover:text-pinky dark:hover:border-pinky  hover:text-grey-blue hover:border-grey-blue border border-transparent `

        if (isActive) return `${base} dark:text-grey-blue-100 dark:bg-pinky bg-grey-blue text-pinky`

        return def
      }}
    />
  )
}

export default NavLink
