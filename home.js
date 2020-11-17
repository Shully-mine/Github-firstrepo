console.log();
 function msg (message) 
 {
 console.log(message);
 alert (message);
}
 
function validateform ()
{
    var name=document.myform.name.value;
    var password=document.myform.password.value;
    if (name==null||name==""){
      alert("Name cannot be blank");
      return false;
    }
     else(password.length<6)
     {
      alert("Password must be at least 6 characters long");
        return false;
     }
