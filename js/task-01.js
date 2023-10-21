const categoriesList = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesList.children.length}`);

const categoriesItems = document.querySelectorAll(".item");

categoriesItems.forEach((categoriesItem) => {
  const title = categoriesItem.querySelector("h2").textContent;
  const lengthListItem = categoriesItem.querySelector("ul").children.length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${lengthListItem}`);
});
