/*
The code below will change is for validating the login details.
@ fname : User First Name
@ lname : User Last Name
*/

function validate_me()
{
 var fname = document.getElementById("fname").value;
 var lname = document.getElementById("lname").value;

 if(fname == '' || lname=='')
 	{
 		alert("Please enter the First Name or Last Name");
 	}

}