function CalcAge() {
  const dateInput = document.querySelector(".date").value;

  let Y = document.querySelector(".year");
  let M = document.querySelector(".month");
  let D = document.querySelector(".day");

  let date = new Date();
  let currentYear = date.getFullYear();
  let currentMonth = date.getMonth() + 1;
  let currentDay = date.getDate();

  let birthYear = parseInt(dateInput.slice(0, 4));
  let birthMonth = parseInt(dateInput.slice(5, 7));
  let birthDay = parseInt(dateInput.slice(8, 10));

  let ageYear = currentYear - birthYear;
  let ageMonth = currentMonth - birthMonth;
  let ageDay = currentDay - birthDay;

  if (ageDay < 0) {
    ageMonth--;
    ageDay += new Date(currentYear, currentMonth - 1, 0).getDate();
  }

  if (ageMonth < 0) {
    ageYear--;
    ageMonth += 12;
  }

  Y.innerHTML = ageYear;
  M.innerHTML = ageMonth;
  D.innerHTML = ageDay;
}
