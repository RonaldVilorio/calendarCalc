const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", calculate);

function calculate(e) {
  e.preventDefault();
  const date = document.querySelector("#Date").value;

  console.log(date);
}
