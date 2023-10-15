const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientEl = document.querySelector("#ingredients");

const makeIngredietEl = (components) => {
  return components.map((el) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = el;
    itemEl.classList.add("item");

    return itemEl;
  });
};
const item = makeIngredietEl(ingredients);
ingredientEl.append(...item);
