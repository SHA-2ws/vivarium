import React from "react"

import { Arrow, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export function TooltipWrapper({ text, children }: { text: string; children: React.ReactNode }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild className="text-center truncate w-[150px] self-center">
        {children}
      </TooltipTrigger>
      <TooltipContent className="shadow-lg" side="bottom">
        <p>{text}</p>
        <Arrow className="fill-black dark:fill-white" />
      </TooltipContent>
    </Tooltip>
  )
}
