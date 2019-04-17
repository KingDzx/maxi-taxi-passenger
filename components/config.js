import Firebase from 'firebase';  
let config = {  
    apiKey: "AIzaSyAvpNOm0tP6GDSxprXijvOmQBhco32MDFw",
    authDomain: "maxi-taxi-c2eae.firebaseapp.com",
    databaseURL: "https://maxi-taxi-c2eae.firebaseio.com",
    projectId: "maxi-taxi-c2eae",
    storageBucket: "maxi-taxi-c2eae.appspot.com",
    messagingSenderId: "433591686426"
};
let app = Firebase.initializeApp(config);  
export const db = app.database();  