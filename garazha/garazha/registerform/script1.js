<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function() {
  const showSignIn = document.getElementById("showSignIn");
  const showRegister = document.getElementById("showRegister");
  const signInForm = document.getElementById("signInForm");
  const registerForm = document.getElementById("registerForm");

  showSignIn.addEventListener("click", function(event) {
    event.preventDefault();
    signInForm.classList.add("active");
    registerForm.classList.remove("active");
  });

  showRegister.addEventListener("click", function(event) {
    event.preventDefault();
    signInForm.classList.remove("active");
    registerForm.classList.add("active");
  });

  registerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const registerUsername = document.getElementById("registerUsername").value;
    const registerPassword = document.getElementById("registerPassword").value;
    const registerAddress = document.getElementById("registerAddress").value;
    const registerCity = document.getElementById("registerCity").value;
    const registerPhone = document.getElementById("registerPhone").value;
    const registerMessage = document.getElementById("registerMessage");

    if (registerUsername.length < 3) {
      registerMessage.innerText = "Username must be at least 3 characters.";
      return;
    }

    if (registerPassword.length < 6) {
      registerMessage.innerText = "Password must be at least 6 characters.";
      return;
    }

    if (registerAddress.trim() === "") {
      registerMessage.innerText = "Please enter your address.";
      return;
    }

    if (registerCity.trim() === "") {
      registerMessage.innerText = "Please enter your city.";
      return;
    }

    if (registerPhone.length < 10) {
      registerMessage.innerText = "Phone number must be at least 10 characters.";
      return;
    }

    // Your registration logic here
    console.log("Registered:", registerUsername, registerPassword, registerAddress, registerCity, registerPhone);
    registerMessage.innerText = "Registration successful!";
  });

  signInForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const signInUsername = document.getElementById("signInUsername").value;
    const signInPassword = document.getElementById("signInPassword").value;
    const signInMessage = document.getElementById("signInMessage");

    // Your sign-in logic here
    console.log("Sign In:", signInUsername, signInPassword);
    signInMessage.innerText = "Sign In successful!";
  });
});
=======
document.addEventListener("DOMContentLoaded", function() {
  const showSignIn = document.getElementById("showSignIn");
  const showRegister = document.getElementById("showRegister");
  const signInForm = document.getElementById("signInForm");
  const registerForm = document.getElementById("registerForm");

  showSignIn.addEventListener("click", function(event) {
    event.preventDefault();
    signInForm.classList.add("active");
    registerForm.classList.remove("active");
  });

  showRegister.addEventListener("click", function(event) {
    event.preventDefault();
    signInForm.classList.remove("active");
    registerForm.classList.add("active");
  });

  registerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const registerUsername = document.getElementById("registerUsername").value;
    const registerPassword = document.getElementById("registerPassword").value;
    const registerAddress = document.getElementById("registerAddress").value;
    const registerCity = document.getElementById("registerCity").value;
    const registerPhone = document.getElementById("registerPhone").value;
    const registerMessage = document.getElementById("registerMessage");

    if (registerUsername.length < 3) {
      registerMessage.innerText = "Username must be at least 3 characters.";
      return;
    }

    if (registerPassword.length < 6) {
      registerMessage.innerText = "Password must be at least 6 characters.";
      return;
    }

    if (registerAddress.trim() === "") {
      registerMessage.innerText = "Please enter your address.";
      return;
    }

    if (registerCity.trim() === "") {
      registerMessage.innerText = "Please enter your city.";
      return;
    }

    if (registerPhone.length < 10) {
      registerMessage.innerText = "Phone number must be at least 10 characters.";
      return;
    }

    // Your registration logic here
    console.log("Registered:", registerUsername, registerPassword, registerAddress, registerCity, registerPhone);
    registerMessage.innerText = "Registration successful!";
  });

  signInForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const signInUsername = document.getElementById("signInUsername").value;
    const signInPassword = document.getElementById("signInPassword").value;
    const signInMessage = document.getElementById("signInMessage");

    // Your sign-in logic here
    console.log("Sign In:", signInUsername, signInPassword);
    signInMessage.innerText = "Sign In successful!";
  });
});
>>>>>>> f5cc7fd07694562e0025755edd0562732c17522f
