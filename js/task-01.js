const listEl = document.querySelector("#categories");
console.log("Number of categories:", listEl.children.length);

const itemEl = document.querySelectorAll(".item");
console.log(itemEl);

itemEl.forEach((el) => {
  console.log("Category:", el.firstElementChild.textContent);
  console.log("Elements:", el.lastElementChild.children.length);
});
