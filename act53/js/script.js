function Submit(){
    var name = document.getElementById("txtName").value;
    var username = document.getElementById("txtUsername").value;
    var password = document.getElementById("passWord").value;
    var email = document.getElementById("emailAdd").value;
    var birthdate = document.getElementById("Birthdate").value;
    var male = document.getElementById("Male").value;
    var female = document.getElementById("Female").value;

  
  
  if(document.getElementById('cbxAgree').checked == true)
  {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.emailAdd.value))
    {
      if(name=="" | username=="" | password=="" | email=="" | birthdate == document.getElementById("Birthdate").defaultValue | male.checked == document.getElementById("Male").defaultValue && male.checked==document.getElementById("Female").defaultValue){
          alert('Please Enter missing parts');
        }
        else{
            alert('You are now registered for Game1');
        }
    }
    else{
      alert("Invalid Email Address!");
    } 
  }
  else{ alert('Please enter missing parts'); event.preventDefault(); }
}
