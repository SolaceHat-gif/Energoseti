import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Заглушка конфигурации Firebase (сюда нужно будет вставить реальные ключи)
const firebaseConfig = {
  apiKey: "AIzaSy_MOCK_KEY",
  authDomain: "mock-rosseti.firebaseapp.com",
  projectId: "mock-rosseti",
  storageBucket: "mock-rosseti.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:mockid"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
