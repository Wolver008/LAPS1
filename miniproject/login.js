function login()
{
	var dur={};
var UserId = document.login.UserId.value;
if(UserId==null||UserId=="")
{
	alert("Please select a loan amount.");
	return false;
}
else if(UserId>158000&&UserId<158999)
{
	dur="Admin Department";	
}
else if(UserId>168000&&UserId<168999)
{
	dur="LAD Department";	
}
alert("Customer Name:" +UserId+"\nYour Department is : "+dur);

}