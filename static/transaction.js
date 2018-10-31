function withdraw(){
	var userInput=document.getElementById("withdraw").value;
	if ((userInput<=0))//should be <=0
	{
		alert(" Incorrect withdrawal amount");
		return;
	}
	else if ((acctBalance-(userInput*1.05)<0)) {
		alert(" Insufficient funds");
		return;
	}
	else {
		acctBalance=acctBalance-(userInput*1.05);
		alert("Successful transaction! <br/> Current balance is: "+acctBalance);
		return;

	}