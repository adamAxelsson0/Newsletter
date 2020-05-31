import { LoginDiv, ShowModalButtons } from "./divs.js";
import { GetAdmins, GetUsers } from "./fetch.js";

ShowLoginOrLoggedIn();

function ShowLoginOrLoggedIn() {
    if (localStorage.Admin) {
        ShowLoggedInPage();
    }
    else {
        ShowLoginPage();
    }
}
function ShowLoginPage() {
    var header = document.getElementById("header");
    var mainDiv = document.getElementById("main");

    var content = ShowModalButtons() + LoginDiv();

    mainDiv.innerHTML = content;
    header.innerHTML = '<h1>Welcome, please login here admin!</h1>';
}
async function ShowLoggedInPage() {
    var header = document.getElementById("header");
    var mainDiv = document.getElementById("main");
    const users = await GetUsers();

    header.innerHTML = `<h1>Welcome ${localStorage.Admin}</h1> `;
    mainDiv.innerHTML = '<button onclick="Logout()">Logout</button>' +
        `<h3 style="text-align:center">Here are all our users</h3>` +
        '<table id="usersTable">' +
        '<tr>' +
        '<th>User</th>' +
        '<th>Email</th>' +
        '<th>NewsLetter</th>' +
        '</tr>' +
        '</table>';

    var usersTable = document.getElementById("usersTable");
    users.forEach(user => {
        var subscribed = "";
        if (user.newsletter) {
            subscribed = "Subscribed"
        }
        else {
            subscribed = "Not  Subscribed"
        }
        usersTable.innerHTML +=
            '<tr>' +
            `<td>${user.username}</td>` +
            `<td>${user.email}</td>` +
            `<td>${subscribed}</td>` +
            '</tr>';
    });
}
function Logout() {
    console.log("im here")
    localStorage.clear();
    ShowLoginOrLoggedIn();
};

document.getElementById("loginbtn").addEventListener("click", async function () {
    const username = document.getElementById("userAdminLogin").value;
    const pw = document.getElementById("userAdminPW").value;
    const admins = await GetAdmins();

    if (admins.find(x => x.username == username && x.password == pw)) {
        localStorage.Admin = username;
    }
});