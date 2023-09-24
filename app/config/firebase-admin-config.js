import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore } from "firebase-admin/firestore"
const serviceAccount = JSON.parse(process.env.FIREBASE_SECRET_KEY);
const firebaseAdminConfig = {
    credential: cert(serviceAccount)
}

if (!getApps().length) {
    initializeApp(firebaseAdminConfig)
}
const adminFirestore = getFirestore()
export { adminFirestore }