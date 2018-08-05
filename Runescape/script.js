const TRIDENT_MAX_CHARGES = 2500;

const osrsApi = "http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item="

function trident() {
	var currentCharges = document.getElementById("currentCharges").value;
	var chargesNeeded = TRIDENT_MAX_CHARGES - currentCharges;
	
	var death = chargesNeeded;
	var chaos = chargesNeeded;
	var fire = chargesNeeded * 5;
	var gp = chargesNeeded * 10;
	
	document.getElementById("death").innerHTML = death;
	document.getElementById("chaos").innerHTML = chaos;
	document.getElementById("fire").innerHTML = fire;
	document.getElementById("gp").innerHTML = gp;
	
	getItemPrice(560);
}

function getItemPrice(id) {
	var url = osrsApi + id;
	$.get(url, function(data, status) {
		console.log(`${data}`)
	});
}