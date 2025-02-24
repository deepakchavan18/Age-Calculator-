window.onload = function() {
  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth() + 1; // Months are zero-based, so we add 1
  const todayYear = today.getFullYear();
  
  document.getElementById('todayDay').value = todayDay;
  document.getElementById('todayMonth').value = todayMonth;
  document.getElementById('todayYear').value = todayYear;
};

function calculateAge() {
  const todayDay = parseInt(document.getElementById('todayDay').value);
  const todayMonth = parseInt(document.getElementById('todayMonth').value);
  const todayYear = parseInt(document.getElementById('todayYear').value);
  
  const birthDay = parseInt(document.getElementById('birthDay').value);
  const birthMonth = parseInt(document.getElementById('birthMonth').value);
  const birthYear = parseInt(document.getElementById('birthYear').value);

  const todayDate = new Date(todayYear, todayMonth - 1, todayDay);
  const birthDate = new Date(birthYear, birthMonth - 1, birthDay);

  const ageInMilliseconds = todayDate - birthDate;
  const ageDate = new Date(ageInMilliseconds);
  const ageYears = ageDate.getFullYear() - 1970;
  const ageMonths = ageDate.getMonth();
  const ageDays = ageDate.getDate() - 1;

  document.getElementById('result').innerText = `YOUR AGE IS ${ageYears} YEARS ${ageMonths} MONTHS ${ageDays} DAYS`;
}
