const calcularBtn = document.querySelector('.calcular-btn');
const inputDD = document.querySelector('.DD');
const inputMM = document.querySelector('.MM');
const inputYYYY = document.querySelector('.YYYY');
const years = document.querySelector('.years');
const months = document.querySelector('.months');
const days = document.querySelector('.days');
const errorMessage = document.querySelectorAll('.error-message');

calcularBtn.addEventListener('click', () => {
  const birthDate = new Date(inputYYYY.value, inputMM.value - 1, inputDD.value);
  const today = new Date();
  
  // Validación de los campos de fecha
  if (inputDD.value < 1 || inputDD.value > 31 || isNaN(inputDD.value)) {
    errorMessage[0].style.display = 'block';
    return;
  } else {
    errorMessage[0].style.display = 'none';
  }

  if (inputMM.value < 1 || inputMM.value > 12 || isNaN(inputMM.value)) {
    errorMessage[1].style.display = 'block';
    return;
  } else {
    errorMessage[1].style.display = 'none';
  }

  if (inputYYYY.value < 1900 || inputYYYY.value > 2099 || isNaN(inputYYYY.value)) {
    errorMessage[2].style.display = 'block';
    return;
  } else {
    errorMessage[2].style.display = 'none';
  }

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths -= 1;
    ageDays += daysInMonth(birthDate.getMonth(), birthDate.getFullYear());
  }

  if (ageMonths < 0) {
    ageYears -= 1;
    ageMonths += 12;
  }

  years.textContent = ageYears;
  months.textContent = ageMonths;
  days.textContent = ageDays;
});

function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}
