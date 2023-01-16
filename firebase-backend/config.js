
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
const firebaseConfig = {
 apiKey: "AIzaSyDv-lQutho-fL8RbAEPhCidUnQ0Vu19Tao",
  authDomain: "cms-db-demo.firebaseapp.com",
  databaseURL: "https://cms-db-demo-default-rtdb.firebaseio.com",
  projectId: "cms-db-demo",
  storageBucket: "cms-db-demo.appspot.com",
  messagingSenderId: "493353095684",
  appId: "1:493353095684:web:3c6834ad2f891f49c01b51",
  measurementId: "G-VWXG9JVJ2P",
  databaseURL : "https://cms-db-demo-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);