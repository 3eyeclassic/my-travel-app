import firebase from 'firebase/app';
import 'firebase/auth'; // 認証用
import 'firebase/firestore'; // データベース用

const firebaseConfig = {
    apiKey: "AIzaSyA2iA3bBlvdeEOzYUfyylYLB6CzNaDEPgw",
    authDomain: "my-travel-app-b2819.firebaseapp.com",
    projectId: "my-travel-app-b2819",
    storageBucket: "my-travel-app-b2819.appspot.com",
    messagingSenderId: "206359407373",
    appId: "1:206359407373:web:15031c17e820eeefd4de44",
    measurementId: "G-KE86M011BL"};

// Firebaseを初期化
firebase.initializeApp(firebaseConfig);

export default firebase;
