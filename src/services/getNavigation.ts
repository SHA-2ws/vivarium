import navigation from "@/db/index.json" assert { type: "json" }

function getEntries(three: {
  [key: string]: {
    slug: string
    children?: { [key: string]: { slug: string } }
  }
}): { label: string; slug: string; children?: { label: string; slug: string }[] }[] {
  return Object.entries(three).map(([label, path]) => {
    return {
      label,
      slug: path.slug,
      ...(path?.children ? { children: getEntries(path.children) } : null)
    }
  })
}

const navEntries = getEntries(navigation)

export function getNavigation(): typeof navEntries {
  return navEntries
}
