const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");
let counterValue = 0;
counter.textContent = counterValue;

btnDecrementEl.addEventListener("click", () => {
  counter.textContent = counterValue -= 1;
});

btnIncrementEl.addEventListener("click", () => {
  counter.textContent = counterValue += 1;
});
