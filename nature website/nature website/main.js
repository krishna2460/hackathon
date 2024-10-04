let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.addEventListener('scroll', () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
});

document.getElementById("loginBtn").addEventListener("click", function() {
    window.location.href = "login.html"; // Change this to the path of your login page
});

function onGoogleSignIn(googleUser) {
    // Get the user profile information
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    // Redirect after successful sign-in
    window.location.href = 'your-redirect-url.html'; // Change this to your desired URL
}

function onFailure(error) {
    console.error(error);
}
function renderButton() {
    gapi.signin2.render('g_id_signin', {
        'scope': 'profile email',
        'width': 400,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onGoogleSignIn,
        'onfailure': onFailure
    });
}