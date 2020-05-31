import { RegisterDiv, LoginDiv, ShowModalButtons } from "./divs.js";

ShowLoginOrLoggedIn();

function ShowLoginOrLoggedIn() {
  if (localStorage.UserName) {
    ShowLoggedInPage();
  }
  else {
    ShowLoginPage();
  }
}
function ShowLoginPage() {
  var header = document.getElementById("header");
  var mainDiv = document.getElementById("main");

  var content = ShowModalButtons() + RegisterDiv() + LoginDiv();

  mainDiv.innerHTML = content;
  header.innerHTML = '<h1>Welcome, please login or register!</h1>';

}
async function Login() {
  userName = document.getElementById("username").value;
  pw = document.getElementById("pw").value
  try {
    const response = await fetch("http://localhost:5001/api/users");
    const data = await response.json();

    let user = data.find(x => x.password == pw && x.name == userName);

    if (user != undefined) {
      localStorage.UserName = user.name;
      localStorage.UserId = user.id;
    }
    else {
      alert("Incorrect login")
    }
  } catch (error) {
    alert(error)
  }
  ShowLoginOrLoggedIn();
}
function Logout() {
  localStorage.clear();
  alert("Logged out")
}