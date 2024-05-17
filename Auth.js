
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC6w8AMyjQiL3qJWCAXwp81bxeSW0IC7yY",
    authDomain: "todo-list-app-b4306.firebaseapp.com",
    projectId: "todo-list-app-b4306",
    storageBucket: "todo-list-app-b4306.appspot.com",
    messagingSenderId: "55814714617",
    appId: "1:55814714617:web:aa1831f88966c63e779e28"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  //inputs
 

  const submitBtn = document.getElementById('submit');
  submitBtn.addEventListener("click", handleFormSubmits);
function handleFormSubmits(event){
  event.preventDefault();
  
  //inputs
  const email = document.getElementById("Email").value.trim();
  const password = document.getElementById("password").value.trim();

  function validateEmail(email) {
    const trimmedEmail = email.trim();
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(trimmedEmail.toLowerCase());
  }


  if (!email || !password) {
    alert("Please fill in all fields.");
    return; // Exit function if any field is empty
  }
  
  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return; // Exit function if email is invalid
  }

  // Show loader and change button text
  const btnText = document.getElementById("btn-text");
  const loaderSpin = document.getElementById('loader');
  loaderSpin.classList.remove("hidden");
  btnText.textContent = "Loading";
  submitBtn.disabled = true;
  
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      setTimeout(() => {
        btnText.textContent = "Done";
        loaderSpin.classList.add("hidden");
        submitBtn.disabled = false;

        // Redirect to dashboard
        window.location.href = "./dashboard.html";
      }, 5000); // Adjust the timeout as needed
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorMessage);
    });

}
    
  
   
