import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
console.log(import.meta.env.VITE_projectIdtest)
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore()

export default db
