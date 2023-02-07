// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhEEYjdMzm44e80sToherWos4TA6kYxzg",
  authDomain: "todolistapp-539c0.firebaseapp.com",
  projectId: "todolistapp-539c0",
  storageBucket: "todolistapp-539c0.appspot.com",
  messagingSenderId: "982014783796",
  appId: "1:982014783796:web:c26b377276644792043561",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDILdT7fZs0jNjYq14fpjdxKqWSwmDBZRk",
//   authDomain: "todo-app-240c5.firebaseapp.com",
//   projectId: "todo-app-240c5",
//   storageBucket: "todo-app-240c5.appspot.com",
//   messagingSenderId: "24460312288",
//   appId: "1:24460312288:web:80a09eac0deb6d68c19a85",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
