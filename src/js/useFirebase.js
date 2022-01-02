import db from './firebase'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

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

const firebaseSignIn = async (email, password) => {
  try {
    const auth = getAuth()
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    if (userCredential) {
      const user = userCredential.user
      console.log(user);
    }
  } catch (e) {
    console.log(e);
  }
}

const useFirebase = () => {
  return { getDocument, addDocument, firebaseSignIn }
}

export default useFirebase
