const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", calculate);

function calculate(e) {
  e.preventDefault();
  const date = document.querySelector("#Date").value;
  const year = date.slice(0, 4);
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    // leap
  } else {
    // no leap
  }
}
