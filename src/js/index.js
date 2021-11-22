import db from './firebase'
import { doc, getDoc } from 'firebase/firestore'

export const getDocument = async (collection, docId) => {
    const docRef = doc(db, collection, docId)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        return docSnap
    } else {
        console.error(`doc do not exist`)
    }
}
