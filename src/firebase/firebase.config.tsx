// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// need to add auth and db to import

// configure firebase app
const firebaseConfig = {
  apiKey: 'AIzaSyDlKvqqHG_WgHkcbTyi4M9zhYy8rbJzbeU',
  authDomain: 'papasledger.firebaseapp.com',
  databaseURL: 'https://papasledger-default-rtdb.firebaseio.com',
  projectId: 'papasledger',
  storageBucket: 'papasledger.appspot.com',
  messagingSenderId: '1028830466674',
  appId: '1:1028830466674:web:f45391e877da353fa6a8eb',
  measurementId: 'G-W8TLMFV5B6',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const db = getFirestore(app)
// need to add auth and db to initializations
