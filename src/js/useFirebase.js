import db from './firebase'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import store from '../store/index'

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
      await store.dispatch("user/storeUser", user)
    }
  } catch (e) {
    console.log(e);
  }
}

const checkUserState = async (fn, args = []) => {
  const auth = await getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('success: ', user)
      if (typeof fn === "function") {
        fn.apply(this, args)
      }
    } else {
      console.error('there is no user and authentication failed!')
    }
  })
}

const useFirebase = () => {
  return { getDocument, addDocument, firebaseSignIn, checkUserState }
}

export default useFirebase
