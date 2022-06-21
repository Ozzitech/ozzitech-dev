
function validateForm(event)                                    
{ 

   event.preventDefault();
    var name = document.forms["myForm"]["name"];    
    var short_msg = document.forms["myForm"]["short_msg"];           
    var email = document.forms["myForm"]["email"]; 
    var num = document.forms["myForm"]["num"];   
    var msg = document.forms["myForm"]["msg"];   
   
    if (name.value == "")                                  
    { 
        document.getElementById('errorname').innerHTML="Please enter a valid name";  
        name.focus(); 
        return false; 
    }else{
        document.getElementById('errorname').innerHTML="";  
    }
       

    if (short_msg.value == "")                                  
    { 
        document.getElementById('errorshort_msg').innerHTML="Enter your message";  
        name.focus(); 
        return false; 
    }else{
        document.getElementById('errorshort_msg').innerHTML="";  
    }


    if (email.value == "")                                   
    { 
        document.getElementById('erroremail').innerHTML="Please enter your Mail Id"; 
        email.focus(); 
        return false; 
    }else{
        document.getElementById('erroremail').innerHTML="";  
    }

   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    } 
   
    
    if (num.value == "")                                   
    { 
        document.getElementById('errornum').innerHTML="Please enter your Phone Number"; 
        email.focus(); 
        return false; 
    }
       else{
        document.getElementById('errornum').innerHTML="";  
    }


    if (msg.value == "")                           
    {
        document.getElementById('errormsg').innerHTML="must be fill more than 30 words"; 
        msg.focus(); 
        return false; 
    }else{
        document.getElementById('errormsg').innerHTML="";  
    }
    return true; 
}
