
   const firebaseConfig = {
    apiKey: "AIzaSyCFngHzmUL5Sck2KSgvYOsDlpdxu_kfZyg",
    authDomain: "q-sort-mlb-trial.firebaseapp.com",
    databaseURL: "https://q-sort-mlb-trial-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "q-sort-mlb-trial",
    storageBucket: "q-sort-mlb-trial.firebasestorage.app",
    messagingSenderId: "786127660076",
    appId: "1:786127660076:web:97f20bf26eabd67cc3dd89"
  };
  
  firebase.initializeApp(firebaseConfig);  
  var rootRef = firebase.database().ref();