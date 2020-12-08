const yearInputRef = document.getElementById("yearInput");
const leapCheckButton = document.getElementById("leapCheckButton");
const leapCheck = document.getElementById("leapCheck");

const numberInputRef = document.getElementById("numberInput");
const primeCheckButton = document.getElementById("primeCheckButton");
const primeCheck = document.getElementById("primeCheck");

function checkPrimeNumber(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

function checkLeapYear(year) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      return true;
    } else {
      return false;
    }
  } else if (year % 4 == 0) {
    return true;
  } else {
    return false;
  }
}

function leapHandler() {
  var year = parseInt(yearInputRef.value);

  if (checkLeapYear(year)) {
    leapCheck.innerText = "Leap year!";
  } else {
    leapCheck.innerText = "Not a leap year!";
  }
}

function primeHandler() {
  var number = parseInt(numberInputRef.value);

  if (checkPrimeNumber(number)) {
    primeCheck.innerText = "Prime number!";
  } else {
    primeCheck.innerText = "Not a prime number!";
  }
}

leapCheckButton.addEventListener("click", leapHandler);
primeCheckButton.addEventListener("click", primeHandler);
