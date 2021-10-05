import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
   
        apiKey: "AIzaSyDhCjvtRbM1eYCBhTrwywt6pjQta-ge_KY",
        authDomain: "team-voting-app-18e3c.firebaseapp.com",
        projectId: "team-voting-app-18e3c",
        storageBucket: "team-voting-app-18e3c.appspot.com",
        messagingSenderId: "731085515772",
        appId: "1:731085515772:web:7f9c54fc6a594798e3e079"
      };
      
     

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();