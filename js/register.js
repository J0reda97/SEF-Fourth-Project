let username = document.querySelector("#name");
let email = document.querySelector("#email");
let pwd = document.querySelector("#pwd");
let repwd = document.querySelector("#repwd");
let register = document.querySelector("#register");

register.addEventListener("click", function () {
  if (
    username.value.trim() === "" ||
    email.value.trim() === "" ||
    pwd.value === "" ||
    repwd.value === ""
  ) {
    alert("Fill all Fields");
  } else if (pwd.value !== repwd.value) {
    alert("Passwords Missmatch");
  } else {
    localStorage.setItem("username", username.value.trim());
    localStorage.setItem("password", pwd.value);
    localStorage.setItem("email", email.value.trim());
    window.location.assign("login.html");
  }
});
