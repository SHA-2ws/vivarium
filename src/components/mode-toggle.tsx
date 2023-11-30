import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/hooks/useTheme"
import { Arrow, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <Tooltip>
        <DropdownMenuTrigger asChild>
          <TooltipTrigger asChild>
            <Button size="icon" variant="outline">
              <Sun
                className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                strokeWidth={1}
              />
              <Moon
                className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                strokeWidth={1}
              />
              <span className="sr-only">Cambiar tema</span>
            </Button>
          </TooltipTrigger>
        </DropdownMenuTrigger>
        <TooltipContent>
          <p>Cambiar tema</p>
          <Arrow />
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Claro</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Oscuro</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>Sistema</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
