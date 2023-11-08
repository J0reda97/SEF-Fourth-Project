let username = document.querySelector("#username");
let pwd = document.querySelector("#pwd");
let login = document.querySelector("#login");

let storedusername = localStorage.getItem("username");
let storedemail = localStorage.getItem("email");
let storedpwd = localStorage.getItem("password");

login.addEventListener("click", function () {
  if (username.value.trim() === "" || pwd.value === "") {
    alert("Fill all Fields");
  } else if (
    (storedusername !== null && username.value.trim() === storedusername) ||
    (storedemail !== null && username.value.trim() === storedemail)
  ) {
    if (pwd.value === storedpwd) {
      window.location.assign("../index.html");
    } else {
      alert("Incorrect Password");
    }
  } else {
    alert("Account Not Found");
  }
});
