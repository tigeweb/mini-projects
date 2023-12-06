function calculateAge() {
  const birthDate = new Date(document.getElementById("birth_date").value);
  const currentDate = new Date();

  let ageInMilliseconds = currentDate - birthDate;

  const years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
  ageInMilliseconds -= years * 365.25 * 24 * 60 * 60 * 1000;

  const months = Math.floor(ageInMilliseconds / (30.44 * 24 * 60 * 60 * 1000));
  ageInMilliseconds -= months * 30.44 * 24 * 60 * 60 * 1000;

  const days = Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000));

  document.getElementById("years").innerHTML = years;
  document.getElementById("months").innerHTML = months;
  document.getElementById("days").innerHTML = days;
}
