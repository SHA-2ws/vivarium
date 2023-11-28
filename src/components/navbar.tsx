import { Link } from "react-router-dom"
import { ChevronsUpDown, HeartIcon, MenuIcon, SearchIcon } from "lucide-react"
import { Fragment } from "react"

import NavLink from "./navlink"
import SvgComponent from "./svg"
import { Button } from "./ui/button"
import Cart from "./cart"

import { ModeToggle } from "@/components/mode-toggle"
import { getNavigation } from "@/services/getNavigation"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"

export default function Navbar() {
  const navigation = getNavigation()

  return (
    <>
      <header className="sticky border-b-2 md:border-b py-2   m-0 rounded-b-[20px] border-grey-blue dark:border-pinky top-0 z-50 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40">
        <NavigationMenu>
          <NavigationMenuList className="text-sm items-center flex md:flex-wrap px-2 py-0 justify-center gap-x-10 text-center  font-bold leading-[3rem]">
            <NavigationMenuItem asChild className="ml-3">
              <Link className="inline-flex text-center items-center justify-center gap-2" to={"/"}>
                <SvgComponent height={36} width={36} />

                <h1 className="text-3xl bg-gradient-to-r bg-clip-text fill-transparent  dark:from-pinky-200 dark:to-pinky from-grey-blue-500 to-dark-blue-700 hidden lg:flex  font-geist-bold font-bold  text-transparent ">
                  Vivarium
                </h1>
              </Link>
            </NavigationMenuItem>

            <div className="flex items-center flex-col align-middle flex-auto gap-2">
              <div className="flex items-center w-full justify-center  gap-2">
                {/**
                 * componente de busqueda
                 */}
                <Input className="w-[90%]" placeholder="Búsqueda..." />
                <Button size={"icon"} variant={"outline"}>
                  <SearchIcon strokeWidth={1} />
                </Button>

                <div className="flex flex-row-reverse items-center gap-2 justify-center sm:flex-row ">
                  <div className="md:hidden justify-center py-2 self-center items-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        asChild
                        className=" h-9  w-9 p-1 justify-center active:dark:text-grey-blue-100 active:dark:bg-pinky active:bg-grey-blue active:text-pinky  m-0 dark:hover:text-pinky dark:hover:border-pinky  hover:text-grey-blue hover:border-grey-blue border border-input font-geist-bold text-base text-center items-center rounded-sm"
                      >
                        <MenuIcon className="text-center" strokeWidth={1} />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <NavigationItemsHamburger navigation={navigation} />
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
              <div className="items-center gap-2 flex-wrap hidden h-[36px] md:flex justify-center">
                <NavigationItems navigation={navigation} />
                <NavigationMenuIndicator />
              </div>
            </div>
            <div className="hidden p-2 justify-center items-center sm:flex gap-2">
              <NavigationMenuItem asChild className="justify-center">
                <ModeToggle />
              </NavigationMenuItem>
              <Link className="justify-center flex" to={"/favoritos"}>
                <Button size={"icon"} variant={"outline"}>
                  <HeartIcon strokeWidth={1} />
                </Button>
              </Link>
              <Cart />
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </>
  )
}

type Props = {
  navigation: {
    label: string
    slug: string
    children?: { label: string; slug: string }[]
  }[]
}

function NavigationItems({ navigation }: Props) {
  return (
    <>
      {navigation.map(({ label, slug, children }) => {
        if (children) {
          return (
            <NavigationMenu key={slug + "navbar"}>
              <NavigationMenuItem>
                <NavigationMenuTrigger className=" h-7 active:dark:text-grey-blue-100 active:dark:bg-pinky active:bg-grey-blue active:text-pinky m-0 dark:hover:text-pinky dark:hover:border-pinky bg-transparent hover:text-grey-blue hover:border-grey-blue border border-transparent font-geist-bold text-sm text-center items-center rounded-sm">
                  {label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid-cols-[1fr] p-4 grid gap-3 items-center justify-center">
                    <NavigationItems navigation={children} />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuIndicator />
            </NavigationMenu>
          )
        }

        return (
          <li key={slug + "navbar"} className="row-span-3">
            <NavigationMenuItem asChild>
              <NavLink to={`/categorias/${slug}`}>{label}</NavLink>
            </NavigationMenuItem>
          </li>
        )
      })}
    </>
  )
}

function NavigationItemsHamburger({ navigation }: Props) {
  return (
    <ScrollArea className="h-[267px]">
      {navigation.map(({ label, slug, children }) => {
        if (children) {
          return (
            <Collapsible key={slug + "hamburger"}>
              <CollapsibleTrigger>
                <DropdownMenuLabel className="whitespace-nowrap inline-flex gap-2">
                  {label} <ChevronsUpDown width={16} />
                </DropdownMenuLabel>
              </CollapsibleTrigger>

              <DropdownMenuSeparator />

              <CollapsibleContent>
                {children.map(({ label, slug }) => {
                  return (
                    <DropdownMenuItem
                      key={slug + "hamburger"}
                      asChild
                      className="[text-wrap:balance]"
                    >
                      <NavLink to={`/categorias/${slug}`}>{label}</NavLink>
                    </DropdownMenuItem>
                  )
                })}
              </CollapsibleContent>
            </Collapsible>
          )
        }

        return (
          <Fragment key={slug + "hamburger"}>
            <DropdownMenuItem asChild>
              <NavLink to={`/categorias/${slug}`}>{label}</NavLink>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </Fragment>
        )
      })}
    </ScrollArea>
  )
}
