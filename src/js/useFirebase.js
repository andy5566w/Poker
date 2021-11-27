import db from './firebase'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'

const getDocument = async (collection, docId) => {
  const docRef = doc(db, collection, docId)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return docSnap
  } else {
    console.error(`doc do not exist`)
  }
}

const addDocument = async (collection, docId, payload = {}) => {
  await setDoc(doc(db, collection, docId), {
    ...payload,
    createAt: Timestamp.fromDate(new Date()),
  })
}

const useFirebase = () => {
  return { getDocument, addDocument }
}

export default useFirebase
