let counterValue = 0;
const span = document.querySelector("#value");
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

const incrementClick = () => {
  counterValue += 1;
  span.textContent = counterValue;
};
const decrementClick = () => {
  counterValue -= 1;
  span.textContent = counterValue;
};

incrementButton.addEventListener("click", incrementClick);
decrementButton.addEventListener("click", decrementClick);
