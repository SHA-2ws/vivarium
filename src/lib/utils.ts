import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import accounting from "accounting"
import ProgressBar from "@badrap/bar-of-progress"

export const progress = new ProgressBar({
  color: "#b855b8",
  size: 3,
  className: "progress-glow",
  delay: 90
})
export const parsePrice = (price: string, q: number = 1) => {
  try {
    const parsed = accounting.unformat(price, ",")

    return accounting.formatMoney(parsed * q, "$", 2, ".", ",")
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
