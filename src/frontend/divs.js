export function RegisterDiv(){
    return `<button onclick="document.getElementById('register').style.display='block'" style="width:auto;">Register</button>` +
    '<div id="register" class="modal">' +
    `<span onclick="document.getElementById('register').style.display='none'" class="close" title="Close Modal">&times;</span>` +
    '<form class="modal-content" id="registerForm">' +
    '<div class="container">' +
    '<h1>Register</h1>' +
    '<p>Please fill in this form to create an account.</p>' +
    '<hr>' +
    '<label for="email"><b>Email</b></label>' +
    '<input type="text" placeholder="Enter Email" name="email" required>' +

    '<label for="psw"><b>Password</b></label>' +
    '<input type="password" placeholder="Enter Password" name="psw" required>' +

    '<label for="email"><b>Email</b></label>' +
    '<input type="email" placeholder="Enter Email" name="psw" required>' +

    '<label>' +
    '<input type="checkbox" checked="checked" name="newsletter" style="margin-bottom:15px"> Subscribe to newsletter ' +
    '</label>' +

    '<div class="clearfix">' +
    `<button type="button" onclick="document.getElementById('register').style.display='none'" class="cancelbtn">Cancel</button>` +
    '<button type="submit" onclick="Register()" class="signupbtn">Sign Up</button>' +
    '</div>' +
    '</div>' +
    '</form>' +
    '</div>'
}