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
     else
     {
      alert("Password must be at least 6 characters long");
        return false;
     }
    }
    // Submit form with name function.
function submit_by_name() {
  var name=document.getElementById("name").value;
  var password=document.getElementById("password").value;
  if (validation()) // Calling validation function
  {
  var x=document.getElementsByName('form_name');
  x[0].submit(); //form submission
  alert(" Name : " + name + " n Password : " + password+ " n Form Name : " + document.getElementById("form_id").getAttribute("name") + "nn Form Submitted Successfully......");
  }
  }