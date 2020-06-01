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

    header.innerHTML = `<h1>Welcome ${localStorage.Admin}</h1>` +
        `<button style="background-color:red" onclick="Logout()">Logout</button>`;
    mainDiv.innerHTML =
        `<h2 style="text-align:center">Here are all users:</h2>` +
        '<table id="usersTable">' +
        '<tr>' +
        '<th>User</th>' +
        '<th>Email</th>' +
        '<th>Newsletter</th>' +
        '</tr>' +
        '</table>';

    var usersTable = document.getElementById("usersTable");
    users.forEach(user => {
        var subscribed = "Not  Subscribed";
        if (user.newsletter) {
            subscribed = "Subscribed"
        }
        usersTable.innerHTML +=
            '<tr>' +
            `<td>${user.username}</td>` +
            `<td>${user.email}</td>` +
            `<td>${subscribed}</td>` +
            '</tr>';
    });
}


function Login() {
    const username = document.getElementById("userAdminLogin").value;
    const pw = document.getElementById("userAdminPW").value;

    if ("test" == username && "1234" == pw) {
        localStorage.Admin = username;
        ShowLoginOrLoggedIn();
    };
};
function Logout() {
    localStorage.clear();
    ShowLoginOrLoggedIn();
}
function LoginDiv() {
    return '<div id="login" class="modal">' +
        `<span onclick="document.getElementById('login').style.display='none'" class="close" title="Close Modal">&times;</span>` +
        '<form class="modal-content" id="loginForm">' +
        '<div class="modalContainer">' +
        '<h1>Login</h1>' +
        '<p>Enter your admin information to login.</p>' +
        '<hr>' +
        '<label for="username"><b>Username</b></label>' +
        '<input type="text" id="userAdminLogin" placeholder="Enter Username" name="username" required>' +

        '<label for="psw"><b>Password</b></label>' +
        '<input type="password" id="userAdminPW" placeholder="Enter Password" name="psw" required>' +

        '<div class="clearfix">' +
        `<button type="button" onclick="document.getElementById('login').style.display='none'" class="cancelbtn">Cancel</button>` +
        '<button onclick="Login()" type="submit" class="loginbtn">Login</button>' +
        '</div>' +
        '</div>' +
        '</form>' +
        '</div>'
}
function ShowModalButtons() {
    return `<div class="modalButtons">` +
        `<button class="modalButton" onclick="document.getElementById('login').style.display='block'" >Login</button>` +
        '</div>'
}
async function GetAdmins() {
    const response = await fetch("http://localhost:4000/api/admins");
    return await response.json();
}
async function GetUsers() {
    const response = await fetch("http://localhost:4000/api/users");
    return await response.json();
}