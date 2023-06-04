import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAM0MrqgBY0n3jilmMErDtcb79FMIXb5_E",
    authDomain: "mystudyproject-8a3c8.firebaseapp.com",
    projectId: "mystudyproject-8a3c8",
    storageBucket: "mystudyproject-8a3c8.appspot.com",
    messagingSenderId: "223485523493",
    appId: "1:223485523493:web:bf4582a21480714e6ff1cc",
    databaseURL: "https://mystudyproject-8a3c8-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);

export default app;