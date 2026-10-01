
let signupForm = document.getElementById("signupForm");

let email = document.getElementById("email");
let password = document.getElementById("password");
let age = document.getElementById("age");
let country = document.getElementById("country");
let dob = document.getElementById("dob");

let erroremail = document.getElementById("erroremail");
let errorpassword = document.getElementById("errorpassword");
let errorage = document.getElementById("errorage");
let errorcountry = document.getElementById("errorcountry");
let errordob = document.getElementById("errordob");


signupForm.addEventListener("submit", function (e) {

    e.preventDefault();


    // Clear errors

    erroremail.innerText = "";
    errorpassword.innerText = "";
    errorage.innerText = "";
    errorcountry.innerText = "";
    errordob.innerText = "";


    let isValid = true;


    // Email

    if (email.value.trim() == "") {

        erroremail.innerText = "Please enter email";

        isValid = false;
    }


    // Password

    if (password.value == "") {

        errorpassword.innerText = "Please enter password";

        isValid = false;

    } else if (password.value.length < 8) {

        errorpassword.innerText =
            "Password must be at least 8 characters";

        isValid = false;
    }


    // Age

    if (age.value == "") {

        errorage.innerText = "Please enter age";

        isValid = false;
    }


    // Country

    if (country.value == "") {

        errorcountry.innerText = "Please select country";

        isValid = false;
    }


    // Date of Birth

    if (dob.value == "") {

        errordob.innerText = "Please select date of birth";

        isValid = false;
    }


    // Save user

    if (isValid == true) {

        let userObj = {

            email: email.value.trim(),

            password: password.value,

            age: age.value,

            country: country.value,

            dob: dob.value

        };


        localStorage.setItem(
            "user",
            JSON.stringify(userObj)
        );


        console.log("Signup User:", userObj);


        alert("Signup successful");


        // Open login page

        window.location.href = "login.html";

    }

});
