const calcularBtn = document.querySelector('.calcular-btn');
const day = document.querySelector('.DD');
const month = document.querySelector('.MM');
const year = document.querySelector('.YYYY');
const yearsOutput = document.querySelector('.years');
const monthsOutput = document.querySelector('.months');
const daysOutput = document.querySelector('.days');

calcularBtn.addEventListener('click', function() {
  const birthday = new Date(`${year.value}-${month.value}-${day.value}`);
  const today = new Date();
  let ageYears = today.getFullYear() - birthday.getFullYear();
  let ageMonths = today.getMonth() - birthday.getMonth();
  let ageDays = today.getDate() - birthday.getDate();
  
  const calcularBtn = document.querySelector('.calcular-btn');

calcularBtn.addEventListener('click', function() {
  // tu código actual aquí
  calcularBtn.classList.add('clicked');
});

  // Check if the birthday hasn't occurred yet this year
  if (today.getMonth() < birthday.getMonth() ||
    (today.getMonth() == birthday.getMonth() && today.getDate() < birthday.getDate())) {
    ageYears--;
    ageMonths = 12 - (birthday.getMonth() - today.getMonth());
    if (today.getDate() < birthday.getDate()) {
      ageMonths--;
      ageDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate() - birthday.getDate() + today.getDate();
    }
  } else {
    if (today.getDate() < birthday.getDate()) {
      ageMonths--;
      ageDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate() - birthday.getDate() + today.getDate();
    }
  }
  
  yearsOutput.textContent = ageYears ;
  monthsOutput.textContent = ageMonths ;
  daysOutput.textContent = ageDays;
});
