import { useEffect, useState } from "react"

const useLocalStorage = (key: string) => {
  const storage = window.localStorage.getItem(key)
  const [value, setValue] = useState(storage ?? "[]")

  useEffect(() => {
    window.localStorage.setItem(key, value)
  }, [key, value])

  const setVault = <t>(value: t) => {
    setValue(JSON.stringify(value))
  }

  const getFromVault = (key: string) => {
    return JSON.parse(window.localStorage.getItem(key) ?? "")
  }

  return {
    vault: JSON.parse(value),
    setVault,
    getFromVault
  }
}

export default useLocalStorage
