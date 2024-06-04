// function to check the input field
function validation(){
    // first name input check
    //  the variable of the first name
    let firstName =document.getElementById("firstName").value;
    // set the statue of the field
    let firstTest=0
    // check if the input is empty
    if(firstName == "" || firstName == null){
        document.getElementById("firstName").classList.add("error");
        document.querySelector(".firstLabel").classList.remove("hide")
        document.querySelector(".firstimg").classList.remove("hide")
        document.getElementById("firstName").placeholder=""
        firstTest=0
        // if not empty
    }else{
        firstTest=1
        document.querySelector(".firstLabel").classList.add("hide")
        document.querySelector(".firstimg").classList.add("hide")
        document.getElementById("firstName").classList.remove("error");
    }
    // last name input check
    //  the variable of the last name
    let lastName =document.getElementById("lastName").value;
    // set the statue of the field
    let lastTest=0
    // check if the input is empty
    if(lastName == "" || lastName == null){
        document.getElementById("lastName").classList.add("error");
        document.querySelector(".lastLabel").classList.remove("hide")
        document.querySelector(".lastimg").classList.remove("hide")
        document.getElementById("lastName").placeholder=""
        lastTest=0
        // if not empty
    }else{
        lastTest=1
        document.getElementById("lastName").classList.remove("error")
        document.querySelector(".lastLabel").classList.add("hide")
        document.querySelector(".lastimg").classList.add("hide")
    }
    // password input check
    //  the variable of the password
    let pass =document.getElementById("pass").value;
    // set the statue of the field
    let passTest=0
    // check if the input is empty
    if(pass == "" || pass == null){
        document.getElementById("pass").classList.add("error");
        document.querySelector(".passLabel").classList.remove("hide")
        document.querySelector(".passimg").classList.remove("hide")
        document.getElementById("pass").placeholder=""
        passTest=0
        // if not empty
    }else{
        passTest=1
        document.getElementById("pass").classList.remove("error")
        document.querySelector(".passLabel").classList.add("hide")
        document.querySelector(".passimg").classList.add("hide")
    }
    // email input check
    // set the statue of the field
    let emailTest =0;
    // function of the email validation
    function emailValidation(){
        // the variable of the email
        let email =document.getElementById("email").value;
        // the pattern of the correct email
        let regx= /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
        // if the email is correct
        if(regx.test(email)){
            emailTest=1;
            document.querySelector(".emailLabel").classList.add("hide")
            document.querySelector(".emailimg").classList.add("hide")
            // if the email is not correct
        }else{
            document.querySelector(".emailLabel").classList.remove("hide")
            document.querySelector(".emailimg").classList.remove("hide")
            document.getElementById("email").classList.add("error")
            document.getElementById("email").placeholder="email@example/com"
            emailTest=0;
        }
    }
    // to get the email validatiion function
    emailValidation()
    // check the status of the all inpute
    if(firstTest==1 && lastTest==1 && passTest==1 && emailTest==1){
        document.getElementById("firstName").value="";
        document.getElementById("lastName").value="";
        document.getElementById("email").value="";
        document.getElementById("pass").value="";
        document.getElementById("firstName").placeholder="First Name"
        document.getElementById("lastName").placeholder="Last Name"
        document.getElementById("pass").placeholder="Password"
        document.getElementById("email").placeholder="Email Address"
        document.getElementById("email").classList.remove("error")
    }
}

