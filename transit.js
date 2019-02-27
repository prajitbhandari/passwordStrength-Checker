var handleInputOnChange =function(event){
	var password=event.target.value;
	var inputLength=event.target.value.length;
	console.log(password,inputLength);

	if(inputLength===0){
		document.getElementById("content").style.background = "#376a82";
		
	}

	else if (inputLength>0 && inputLength<=5){
		document.getElementById("content").style.background = "red";
		document.getElementById("displayStrength").innerText= "Your password is weak!!!";
	}
	
	else if (inputLength>5 && inputLength<=10){
		document.getElementById("content").style.background = "orange";
		document.getElementById("displayStrength").innerText= "Your password is good!!!";

	}
	
	else{
		document.getElementById("content").style.background = "green";
		document.getElementById("displayStrength").innerText= "Your password is strong!!!";
	}

}

	
