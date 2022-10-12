const onceButton = document.getElementById("onceButton");
const monthlyButton = document.getElementById("monthlyButton");
const donateButton = document.getElementById('donateButton');
const donateButtonOnce = document.getElementById('donateButton-once');
const amountWrapper = document.getElementById('amountWrapper');
const donateCaption = document.getElementById('donate-caption');

var amount = 0

onceButton.onclick = function () {
 onceButton.classList.remove('bKkawm');
 onceButton.classList.add('czyTWa');
 monthlyButton.classList.remove('czyTWa');
 monthlyButton.classList.add('bKkawm');
 amountWrapper.style.display = "none";
 donateCaption.innerHTML = "Kindly click the donate button to proceed:";
 donateButtonOnce.style.display = "";
 donateButton.style.display = "none";
};

monthlyButton.onclick = function () {
 monthlyButton.classList.remove('bKkawm');
 monthlyButton.classList.add('czyTWa');
 onceButton.classList.remove('czyTWa');
 onceButton.classList.add('bKkawm');
 amountWrapper.style.display = "";
 donateCaption.innerHTML = "Your support will save lives!<br>Select your monthly donation amount:";
 donateButtonOnce.style.display = "none";
 donateButton.style.display = "";
};

window.onload = function() {
donateButtonOnce.style.display = "none";
};

const amountButton1 = document.getElementById("amountButton1");

amountButton1.onclick = function () {
  amountButton1.classList.add('eOubpp')
  amountButton1.classList.remove('jgBJvx')
  amountButton2.classList.remove('eOubpp')
  amountButton3.classList.remove('eOubpp')
  amountButton4.classList.remove('eOubpp')
  amountButton5.classList.remove('eOubpp')
  amountButton6.classList.remove('eOubpp')
  amountButton2.classList.add('jgBJvx')
  amountButton3.classList.add('jgBJvx')
  amountButton4.classList.add('jgBJvx')
  amountButton5.classList.add('jgBJvx')
  amountButton6.classList.add('jgBJvx')
  amount =  this.getAttribute('payment-url')
};

const amountButton2 = document.getElementById("amountButton2");


amountButton2.onclick = function () {
  amountButton2.classList.add('eOubpp')
  amountButton2.classList.remove('jgBJvx')
  amountButton1.classList.add('jgBJvx')
  amountButton3.classList.add('jgBJvx')
  amountButton4.classList.add('jgBJvx')
  amountButton5.classList.add('jgBJvx')
  amountButton6.classList.add('jgBJvx')
  amountButton1.classList.remove('eOubpp')
  amountButton3.classList.remove('eOubpp')
  amountButton4.classList.remove('eOubpp')
  amountButton5.classList.remove('eOubpp')
  amountButton6.classList.remove('eOubpp')
  amount =  this.getAttribute('payment-url')
};

const amountButton3 = document.getElementById("amountButton3");

amountButton3.onclick = function () {
  amountButton3.classList.add('eOubpp')
  amountButton3.classList.remove('jgBJvx')
  amountButton1.classList.add('jgBJvx')
  amountButton2.classList.add('jgBJvx')
  amountButton4.classList.add('jgBJvx')
  amountButton5.classList.add('jgBJvx')
  amountButton6.classList.add('jgBJvx')
  amountButton1.classList.remove('eOubpp')
  amountButton2.classList.remove('eOubpp')
  amountButton4.classList.remove('eOubpp')
  amountButton5.classList.remove('eOubpp')
  amountButton6.classList.remove('eOubpp')
  amount =  this.getAttribute('payment-url')
};


const amountButton4 = document.getElementById("amountButton4");

amountButton4.onclick = function () {
  amountButton4.classList.add('eOubpp')
  amountButton4.classList.remove('jgBJvx')
  amountButton1.classList.add('jgBJvx')
  amountButton2.classList.add('jgBJvx')
  amountButton3.classList.add('jgBJvx')
  amountButton5.classList.add('jgBJvx')
  amountButton6.classList.add('jgBJvx')
  amountButton1.classList.remove('eOubpp')
  amountButton2.classList.remove('eOubpp')
  amountButton3.classList.remove('eOubpp')
  amountButton5.classList.remove('eOubpp')
  amountButton6.classList.remove('eOubpp')
  amount =  this.getAttribute('payment-url')
};

const amountButton5 = document.getElementById("amountButton5");

amountButton5.onclick = function () {
  amountButton5.classList.add('eOubpp')
  amountButton5.classList.remove('jgBJvx')
  amountButton1.classList.add('jgBJvx')
  amountButton2.classList.add('jgBJvx')
  amountButton3.classList.add('jgBJvx')
  amountButton4.classList.add('jgBJvx')
  amountButton6.classList.add('jgBJvx')
  amountButton1.classList.remove('eOubpp')
  amountButton2.classList.remove('eOubpp')
  amountButton3.classList.remove('eOubpp')
  amountButton4.classList.remove('eOubpp')
  amountButton6.classList.remove('eOubpp')
  amount =  this.getAttribute('payment-url')
};

const amountButton6 = document.getElementById("amountButton6");

amountButton6.onclick = function () {
  amountButton6.classList.add('eOubpp')
  amountButton6.classList.remove('jgBJvx')
  amountButton1.classList.add('jgBJvx')
  amountButton2.classList.add('jgBJvx')
  amountButton3.classList.add('jgBJvx')
  amountButton4.classList.add('jgBJvx')
  amountButton5.classList.add('jgBJvx')
  amountButton1.classList.remove('eOubpp')
  amountButton2.classList.remove('eOubpp')
  amountButton3.classList.remove('eOubpp')
  amountButton4.classList.remove('eOubpp')
  amountButton5.classList.remove('eOubpp')
  amount =  this.getAttribute('payment-url')
};



donateButton.onclick = function () {
  console.log('hi');
  console.log(amount);

  var checkoutUrl = "https://rzp.io/i/"
  var finalUrl = checkoutUrl + amount.toString()

  console.log(finalUrl);
  window.open(finalUrl, "_blank");
}


donateButtonOnce.onclick = function () {
  console.log('hi');
  var finalUrl = "https://rzp.io/l/mowgli-feed"

  console.log(finalUrl);
  window.open(finalUrl, "_blank");
}
