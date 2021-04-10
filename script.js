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
let extraDaysPerMonth = {
  1: 3,
  2: 3,
  3: 6,
  4: 8,
  5: 11,
  6: 13,
  7: 16,
  8: 19,
  9: 22,
  10: 24,
  11: 26,
  12: 29,
}
// birthMonth - 1 * 28 + day + extraDatPerMonth - 1 = days
// ex: 11/22
//  (10) * 28 + 22 + (10) = 326 days/year
  
  // obj with the old calendar
  // obj with new calendar
  // match the days from old into the new calendar
}
