import {initializeApp} from 'firebase'

const app = initializeApp({
  apiKey: "AIzaSyCSe2SkQNR0eYpY_Wp4VJb0Q0tXv8yyGIM",
  authDomain: "must-binge.firebaseapp.com",
  databaseURL: "https://must-binge.firebaseio.com",
  projectId: "must-binge",
  storageBucket: "",
  messagingSenderId: "2306870811",
  appId: "1:2306870811:web:4e9cd496896c86d9"
});

export const db = app.firestore();
export const gamesCollection = db.collection('games');
