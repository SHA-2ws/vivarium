import {
  type CollectionReference,
  query,
  where,
  and,
  getDocs,
  collection,
  Firestore,
  getDocsFromServer,
  DocumentData,
  QuerySnapshot
} from "firebase/firestore"

export const getCleanDoc = (data: QuerySnapshot<DocumentData, DocumentData>, key: string) => {
  if (data.size === 0) return []

  return data.docs.map((doc) => {
    return {
      [key]: doc.id,
      ...doc.data()
    }
  })
}

export const newestProducts = (db: CollectionReference) =>
  query(db, and(where("hasDiscount", "==", false), where("isNew", "==", true)))

export const salesProducts = (db: CollectionReference) =>
  query(db, and(where("hasDiscount", "==", true), where("isNew", "==", false)))

export const getAllProducts = async (db: CollectionReference) => {
  try {
    const data = await getDocsFromServer(db)

    return data.docs.map(
      (doc) =>
        ({
          productId: doc.id,
          ...(doc.data() as FirebaseProductDoc)
        }) as DetailedProduct
    )
  } catch (err) {
    console.error(err)
  }
}

export type DetailedProduct = {
  productName: string
  description: {
    src: string[]
    text?: string
    nota: string
  }
  isNew: boolean
  hasStock: boolean
  productId: string
  category: string
  src: string[]
  comparePrice: string
  hasDiscount: boolean
  price: string
}

export type FirebaseProductDoc = {
  productName: string
  description: {
    src: string[]
    text?: string
    nota: string
  }
  isNew: boolean
  hasStock: boolean
  category: string
  src: string[]
  comparePrice: string
  hasDiscount: boolean
  price: string
}

export type Products = DetailedProduct[]

export type Category =
  | "interior"
  | "exterior"
  | "sustratos"
  | "fertilizantes"
  | "agroquimicos"
  | "césped"
  | "hogar"

export async function getProductsBy(category: Category, db: Firestore) {
  const categoryRef = collection(db, "products")

  const q = query(categoryRef, where("category", "==", category))

  const data = await getDocs(q)

  return getCleanDoc(data, "productId")
}
