<script type="module">
  import { auth } from "./firebase-config.js";
  import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    sendPasswordResetEmail,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence 
  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

  let isLogin = true;

  function toggleForm() {
    isLogin = !isLogin;
    document.getElementById("formTitle").innerText = isLogin ? "লগইন করুন" : "সাইন আপ করুন";
    document.querySelector("button").innerText = isLogin ? "লগইন" : "সাইন আপ";
    document.querySelector(".switch-auth").innerHTML = isLogin
      ? 'নতুন ব্যবহারকারী? <span onclick="toggleForm()">সাইন আপ করুন</span>'
      : 'আগেই একাউন্ট আছে? <span onclick="toggleForm()">লগইন করুন</span>';
    document.getElementById("message").innerText = "";
  }

  function login() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const remember = document.getElementById("rememberMe").checked;

    const persistence = remember ? browserLocalPersistence : browserSessionPersistence;

    setPersistence(auth, persistence).then(() => {
      if (isLogin) {
        return signInWithEmailAndPassword(auth, email, pass);
      } else {
        return createUserWithEmailAndPassword(auth, email, pass);
      }
    }).then(() => {
      window.location.href = "page2.html"; // ✅ লগইন হলে নতুন পেজে রিডাইরেক্ট
    }).catch(error => {
      document.getElementById("message").innerText = error.message;
    });
  }

  function forgotPassword() {
    const email = document.getElementById("email").value;
    if (!email) {
      document.getElementById("message").innerText = "ইমেইল লিখুন";
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        document.getElementById("message").innerText = "রিসেট লিংক পাঠানো হয়েছে!";
      })
      .catch(error => {
        document.getElementById("message").innerText = error.message;
      });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.href = "page2.html";
    }
  });

</script>
