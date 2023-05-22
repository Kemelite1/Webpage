
// object to store details
let userDetailsDatabase = { }

function getUserDetails() {

    // username
let username = prompt('Enter your username')
if (username == null){
    return
}

function validateUsername(username){
    if (username.length < 10 && username.length > 0) {
        return true

    } else{
        return false
    }
    
}
while(validateUsername(username) == false) {
    username = prompt("username must be less than 10 and greater than zero")
}
userDetailsDatabase["username"] = username

// email
let email = prompt('Enter your Email Address')
if (email == null) {
    return
}

function validateEmail(email){
    const emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    emailCheckResult = emailCheck.test(email)
    if(emailCheckResult == true){
        return true
    } else{
        return false
    }
}

while (validateEmail(email) == false){
    email = prompt("Enter a valid email")
}
userDetailsDatabase["email"] = email
console.log(userDetailsDatabase)

// phone number
let phoneNumber = prompt('Enter your phone number')
if (phoneNumber == null){
    return
}

function validatephoneNumber(phoneNumber){
    if (phoneNumber.length == 11){
        return true
    } else{
        return false
    }
}

while (validatephoneNumber(phoneNumber) == false){
    phoneNumber = prompt("phone number must be 11 digits")
}
userDetailsDatabase["phoneNumber"] = phoneNumber

// password
let password = prompt('Enter your password')
if (password == null){
    return
}

function validatepassword(password){
    if (password.length < 6){
        return false
    } else{
        return true
    }
}

while (validatepassword(password) == false){
    phoneNumber = prompt("password must not be less than six digits")
}

// confirm password
let confirmpassword = prompt('Confirm password')
if (confirmpassword == null){
    return
}

function validateconfirmpassword(confirmpassword){
    if (confirmpassword != password){
        return false
    } else{
        return true
    }
}

while (validateconfirmpassword(confirmpassword) == false){
    confirmpassword = prompt("password does not match")
}

console.log(userDetailsDatabase)


}

function displayUserDetails(){
    alert(`Your Details\n\nusername: ${userDetailsDatabase.username}\nphoneNumber: ${userDetailsDatabase.phoneNumber}\nemail: ${userDetailsDatabase.email}`)
}

