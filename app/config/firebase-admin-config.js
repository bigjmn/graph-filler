import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore } from "firebase-admin/firestore"
const firebaseAdminConfig = {
    credential: cert(process.env.FIREBASE_SECRET_KEY)
}

if (!getApps().length) {
    initializeApp(firebaseAdminConfig)
}
const adminFirestore = getFirestore()
export { adminFirestore }