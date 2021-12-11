const cityForm = document.querySelector(".from");

const updateCity = async () => {};

cityForm.addEventListener("Submit", (e) => {
  //preven default action
  e.preventDefault();

  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update UI with the new city
});
