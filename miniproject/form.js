function validloan()
{
	var dur=0;
var Name = document.TF.name.value;
var mobile = document.TF.MobileNo.value;
var Email = document.TF.EmailId.value;
var loan = document.TF.amount.value;
if(loan==null||loan=="")
{
	alert("Please select a loan amount.");
	return false;
}
else if(loan==50000)
{
	dur=1;	
}
else if(loan==100000)
{
	dur=2;	
}
else if(loan==500000)
{
	dur=5;	
}
else if(loan==1000000)
{
	dur=10;	
}
alert("Customer Name:" +Name+"\nMobile:"+mobile+"\nEmail ID:"+Email+"\nLoan duration is : "+dur);

}