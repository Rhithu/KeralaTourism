function phvalidate(){

var phone=document.getElementById("ph");
var val=phone.value;
console.log(val);
var ph_reg=/^\d{10}$/;
var ph_reg_2=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
console.log(val.match(ph_reg));
if((val.match(ph_reg))||(val.match(ph_reg_2))){
   return true;
}
else{
    alert("Phone number in unsupported format.");
    return false;
}
}

function pwd_validate(){
    var pwd=document.getElementById("pwd").value;
    var pwd_reg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(pwd.match(pwd_reg)){
        return true;
    }
    else{
        alert("Password must be minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");
        return false;
    }
}

function strength_ind()
{
    var pwd=document.getElementById("pwd");
    var len=pwd.value.length;
    var mm1=document.getElementById("meter1");
    var mm2=document.getElementById("meter2");
    var mm3=document.getElementById("meter3");
  
    if(len<3){
        pwd.style.border="2px solid red";
        mm1.removeAttribute("hidden");
        mm1.style.color="red";
        mm2.setAttribute("hidden","true");
        mm3.setAttribute("hidden","true");
    }
    if(len>3&&len<6){
        pwd.style.border="2px solid yellow";
        mm2.removeAttribute("hidden");
        mm1.style.color="yellow";
        mm2.style.color="yellow";
        mm3.setAttribute("hidden","true");
    }
    if(len>6){
        pwd.style.border="2px solid green";
        mm3.removeAttribute("hidden");
        mm3.style.color="green";
        mm1.style.color="green";
        mm2.style.color="green";
    }
    
}