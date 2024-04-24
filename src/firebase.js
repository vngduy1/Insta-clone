// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: 'insta-a05a0.firebaseapp.com',
    projectId: 'insta-a05a0',
    storageBucket: 'insta-a05a0.appspot.com',
    messagingSenderId: '243930226174',
    appId: '1:243930226174:web:d974b85663744ccbd874af',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// service firebase.storage {
//     match /b/{bucket}/o {
//       match /{allPaths=**} {
//         allow read;
//         allow write: if
//         request.resource.size < 2 * 1024 * 1024 &&
//         request.resource.contentType.matches('image/.*')
//       }
//     }
//   }
