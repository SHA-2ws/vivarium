import { useState } from "react"

const useImage = (iv?: string) => {
  const [imgSrc, setImgSrc] = useState(iv)

  const changeImage = (src: string) => {
    setImgSrc(src)
  }

  return {
    value: imgSrc,
    changeImage
  }
}

export default useImage
