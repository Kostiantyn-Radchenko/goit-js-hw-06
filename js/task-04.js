// const btnDecrementEl = document.querySelector('[data-action="decrement"]');
// const btnIncrementEl = document.querySelector('[data-action="increment"]');
// const counter = document.querySelector("#value");
// let counterValue = 0;
// counter.textContent = counterValue;

// btnDecrementEl.addEventListener("click", () => {
//   counter.textContent = counterValue -= 1;
// });

// btnIncrementEl.addEventListener("click", () => {
//   counter.textContent = counterValue += 1;
// });
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
