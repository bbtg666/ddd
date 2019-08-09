import Firebase from "firebase";

const config = {
  apiKey: "AIzaSyAXG99GnIM79e59KdBIkBADaOqL02PSGTo",
  authDomain: "locationgps-8240b.firebaseapp.com",
  databaseURL: "https://locationgps-8240b.firebaseio.com",
  projectId: "locationgps-8240b",
  storageBucket: "locationgps-8240b.appspot.com",
  messagingSenderId: "825049450783",
  appId: "1:825049450783:web:3dccde4ca18557f2"
};
Firebase.initializeApp(config);

export default Firebase;
