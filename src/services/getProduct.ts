import { Firestore, doc, getDoc } from "firebase/firestore"

import { FirebaseProductDoc, type DetailedProduct } from "./getProducts"

export async function getProductBy(db: Firestore, id: string): Promise<DetailedProduct | null> {
  const categoryRef = doc(db, "products", id)

  const data = await getDoc(categoryRef)

  if (!data.exists()) return null

  return {
    productId: data.id,
    ...(data.data() as FirebaseProductDoc)
  }
}
