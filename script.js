var address = "t1a2yCdgCcT14rxFxDhU4xZsTDYXig2Bt6P";
var workerLink = "https://api.nanopool.org/v1/zec/user/" + address;
var paymentsLink = "https://api.nanopool.org/v1/zec/payments/" + address;
var zcashLink = "https://coinmarketcap-nexuist.rhcloud.com/api/zec/price";

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

var worker = JSON.parse(Get(workerLink));
var zcash = JSON.parse(Get(zcashLink));
var payments = JSON.parse(Get(paymentsLink));
var paymentAmount = 0;

var i = 0;
for (var i; i < payments.data.length; i++) {
	paymentAmount += payments.data[i].amount;
}

var balance = parseFloat(worker.data.balance);
var ubalance = parseFloat(worker.data.unconfirmed_balance);
var price = zcash.usd;
var total = balance + ubalance;

document.getElementById("price").innerHTML += price;
document.getElementById("confirmedBalance").innerHTML += balance + " ($" + balance * price + ")";
document.getElementById("unconfirmedBalance").innerHTML += ubalance + " ($" + ubalance * price + ")";
document.getElementById("totalBalance").innerHTML += total + " ($" + total * price + ")";
document.getElementById("numPayments").innerHTML += i;
document.getElementById("totalPayments").innerHTML += paymentAmount + " ($" + paymentAmount * price + ")";
document.getElementById("paymentsAndBalance").innerHTML += total + paymentAmount + " ($" + (total + paymentAmount) * price + ")";