var Name = document.forms["form"]["txtName"];
var Username = document.forms["form"]["txtUserName"];

var NameInput = document.getElementById("txtName")
var UsernameInput = document.getElementById("txtUsername")
var Male = document.getElementById("Male")
var Female = document.getElementById("Female")
var Checkbox = document.getElementById("cbxAgree")

var NameError = document.getElementById("nameError");
var UsernameError = document.getElementById("usernameError");
var SexError = document.getElementById("sexError")
var CheckboxError = document.getElementById("checkboxError")

function validateForm(){
  if (Name.value=="") {
    NameError.style.display="block";
    NameInput.classList.add("invalid")
    return false;
  }
  if (Username.value=="") {
    UsernameError.style.display="block";
    UsernameInput.classList.add("invalid")
    return false;
  }
  if (Male.checked==false && Female.checked==false) {
    SexError.style.display="block"
    return false;
  }
  if(Checkbox.checked==false){
    CheckboxError.style.display="block"
    return false;
  }
  alert('Success')
}
