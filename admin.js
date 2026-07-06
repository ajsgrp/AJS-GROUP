document.getElementById("admin-login-form").addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("admin-email").value;
    const password = document.getElementById("admin-password").value;

    if(email === "admin@ajsgroup.in" && password === "AJS@2026"){

        alert("Welcome Admin!");

        window.location.href = "admin-dashboard.html";

    }else{

        alert("Invalid Email or Password");

    }

});