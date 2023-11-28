import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse text-transparent backdrop-blur-xl rounded-md bg-primary/10",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
