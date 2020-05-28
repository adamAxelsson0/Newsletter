import { RegisterDiv } from "./divs.js";

ShowLoginOrLoggedIn();

function ShowLoginOrLoggedIn() {
  if (localStorage.getItem("user")) {
    ShowLoggedInPage();
  }
  else {
    ShowLoginPage();
  }
}
function ShowLoginPage() {
  console.log("got here")
  var div = document.getElementById("main");
  div.innerHTML = RegisterDiv();

}
function Login() { }
function Logout() { }
async function Register() {
  try {
    const thisForm = document.getElementById('registerForm');
    const formData = new FormData(thisForm).entries()
    await fetch('http://localhost:4000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData))
    });
  } catch (error) {
    alert(error);
    console.log(error);
  }
}