export function LoginDiv(){
    return '<div id="login" class="modal">' +
    `<span onclick="document.getElementById('login').style.display='none'" class="close" title="Close Modal">&times;</span>` +
    '<form class="modal-content" id="loginForm">' +
    '<div class="modalContainer">' +
    '<h1>Login</h1>' +
    '<p>Please fill in this form to create an account.</p>' +
    '<hr>' +
    '<label for="username"><b>Username</b></label>' +
    '<input type="text" id="userAdminLogin" placeholder="Enter Username" name="username" required>' +

    '<label for="psw"><b>Password</b></label>' +
    '<input type="password" id="userAdminPW" placeholder="Enter Password" name="psw" required>' +

    '<div class="clearfix">' +
    `<button type="button" onclick="document.getElementById('login').style.display='none'" class="cancelbtn">Cancel</button>` +
    '<button id="loginbtn" type="submit" class="loginbtn">Login</button>' +
    '</div>' +
    '</div>' +
    '</form>' +
    '</div>'
}
export function ShowModalButtons(){
    return `<div class="modalButtons">`+
    `<button class="modalButton" onclick="document.getElementById('login').style.display='block'" >Login</button>`+
    '</div>'
}