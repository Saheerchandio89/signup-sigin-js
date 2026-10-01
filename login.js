
// =========================
// LOGIN ELEMENTS
// =========================

let loginForm = document.getElementById("loginForm");

let loginEmail = document.getElementById("loginEmail");

let loginPassword =
    document.getElementById("loginPassword");

let loginEmailError =
    document.getElementById("loginEmailError");

let loginPasswordError =
    document.getElementById("loginPasswordError");

let loginError =
    document.getElementById("loginError");


// =========================
// WELCOME ELEMENTS
// =========================

let loginPage =
    document.getElementById("loginPage");

let welcomePage =
    document.getElementById("welcomePage");

let showEmail =
    document.getElementById("showEmail");

let showAge =
    document.getElementById("showAge");

let showCountry =
    document.getElementById("showCountry");

let showDob =
    document.getElementById("showDob");

let logoutBtn =
    document.getElementById("logoutBtn");


// =========================
// SHOW DASHBOARD
// =========================

function showDashboard(user) {

    showEmail.innerText = user.email;

    showAge.innerText = user.age;

    showCountry.innerText = user.country;

    showDob.innerText = user.dob;

    loginPage.style.display = "none";

    welcomePage.style.display = "block";

}


// =========================
// CHECK LOGIN ON REFRESH
// =========================

let loginUser =
    localStorage.getItem("loginUser");


if (loginUser != null) {

    let user = JSON.parse(loginUser);

    showDashboard(user);

}


// =========================
// LOGIN
// =========================

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();


    // Clear errors

    loginEmailError.innerText = "";

    loginPasswordError.innerText = "";

    loginError.innerText = "";


    // Email validation

    if (loginEmail.value.trim() == "") {

        loginEmailError.innerText =
            "Please enter email";

        return;

    }


    // Password validation

    if (loginPassword.value == "") {

        loginPasswordError.innerText =
            "Please enter password";

        return;

    }


    // Get signup user

    let savedUser =
        localStorage.getItem("user");


    if (savedUser == null) {

        loginError.innerText =
            "Please signup first.";

        return;

    }


    // Convert JSON string to object

    savedUser = JSON.parse(savedUser);


    // =========================
    // CHECK EMAIL & PASSWORD
    // =========================

    if (
        loginEmail.value.trim() == savedUser.email &&
        loginPassword.value == savedUser.password
    ) {

        // Save login session

        localStorage.setItem(
            "loginUser",
            JSON.stringify(savedUser)
        );


        console.log(
            "Login Successful:",
            savedUser
        );


        // Show dashboard

        showDashboard(savedUser);

    }

    else {

        loginError.innerText =
            "Invalid email or password";

    }

});


// =========================
// LOGOUT
// =========================

logoutBtn.addEventListener("click", function () {

    // Remove login session

    localStorage.removeItem("loginUser");


    // Hide dashboard

    welcomePage.style.display = "none";


    // Show login

    loginPage.style.display = "block";


    // Clear inputs

    loginEmail.value = "";

    loginPassword.value = "";

});
