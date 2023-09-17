// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChR1zPYFOKFIjF5KsqkVr59Y3Hh-rvvz8",
  authDomain: "doctorappointmentbooking-70d18.firebaseapp.com",
  projectId: "doctorappointmentbooking-70d18",
  storageBucket: "doctorappointmentbooking-70d18.appspot.com",
  messagingSenderId: "274789026546",
  appId: "1:274789026546:web:488de35ba33abb26759e6b",
  measurementId: "G-2DHZN92C72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);