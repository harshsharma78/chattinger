import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCSjWXDM12m9Kxwrg_kY7tzhleG1XI4uSY',
	authDomain: 'chattinger-f2ee4.firebaseapp.com',
	projectId: 'chattinger-f2ee4',
	storageBucket: 'chattinger-f2ee4.appspot.com',
	messagingSenderId: '694569199044',
	appId: '1:694569199044:web:6f09f6075164bee4527091',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
