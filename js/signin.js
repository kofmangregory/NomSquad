// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });
//
// firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });
//
// firebase.auth().signOut().then(function() {
//   // Sign-out successful.
// }).catch(function(error) {
//   // An error happened.
// });


(function() {

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCdUv47KK3LlxRD4gAvEM_yOtekkNxRbeM",
    authDomain: "nomsquad-1b7ce.firebaseapp.com",
    databaseURL: "https://nomsquad-1b7ce.firebaseio.com",
    projectId: "nomsquad-1b7ce",
    storageBucket: "",
    messagingSenderId: "983555408487"
  };
  firebase.initializeApp(config);
// Get Elements

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  // Add login event
  btnLogin.addEventListener('click', e => {
  //Get email and password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
  // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  //Add signup event
  // btnSignUp.addEventListener('click', e=> {
  //   //Get email and password
  //     const email = txtEmail.value;
  //     const pass = txtPassword.value;
  //     const auth = firebase.auth();
  //   // Sign in
  //     const promise = auth.createUserWithEmailAndPassword(email, pass);
  //     promise.catch(e => console.log(e.message));
  // });

  // btnLogout.addEventListener('click' e => {
  //   firebase.auth().signOut();
  // });
  // Add a realtime listener
//   firebase.auth().onAuthStateChanged(firebaseUser => {
//     if (firebaseUser) {
//       console.log(firebaseUser);
//       document.getElementById('btnLogout').style.display = "block";
//     }
//     else {
//       console.log('not logged in');
//       document.getElementById('btnLogout').style.display = "none";
//     }
//   });
// }());
