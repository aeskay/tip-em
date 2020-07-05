function calculator(){
	var cost = document.getElementById("cost").value;
	var number = document.getElementById("number").value;	
	var service = document.getElementById("service").value;
	var tip = document.getElementById("totalTip");

	if (cost <= 0 || cost === "") {
		tip.style.color ="red";
		tip.style.background ="white";
	 	tip.innerHTML = "Please enter a value for cost!";		
		return;
	}	
	else if (number <=0 || number==="") {
	 	tip.style.color ="red";
	 	tip.style.background ="white";
	 	tip.innerHTML = "Please enter a value for number of people!";
	 	return;
	 }	
	
	else if (service == 0) {
	 	tip.style.color ="red";
	 	tip.style.background ="white";
	 	tip.innerHTML = "Please enter a value for service!";
		return;
	 } else{
	 	var calculate = (cost * service) / number;
	 	calculate = Math.round(calculate);
	 	
	 	var result = isNaN(calculate);
	if (result = false) {
		tip.style.color ="red";
	 	tip.style.background ="white";
	 	tip.innerHTML = "Please enter digits only!";
		return;
	} else {
		if (number == 1) {
			tip.innerHTML = "You should tip $" +calculate;
		} else{
		tip.innerHTML = "You should tip $" +calculate + " each!";
	}
}

}
}


