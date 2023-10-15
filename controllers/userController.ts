// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");


// Initialize Firebase with your project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbaQwG-0LYH3jTTXqbCWzBicme0gFJ2JM",
  authDomain: "teo-heng.firebaseapp.com",
  projectId: "teo-heng",
  storageBucket: "teo-heng.appspot.com",
  messagingSenderId: "119982603346",
  appId: "1:119982603346:web:4a2c30b86190d1ec02338b",
  measurementId: "G-KX6E7T0DMW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();


class UserController {

  static createUser(req, res) {
    console.log(req.body);
    var email = String(req.body.email).trim();
    var password = String(req.body.password).trim();
    console.log(email, password);
    try {
      createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
      res.send("error");
    }
    res.send("ok");
  }
}

module.exports = UserController;