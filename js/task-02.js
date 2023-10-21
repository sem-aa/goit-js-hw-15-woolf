const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const createArrItems = (ingredients) => {
  const arrElements = ingredients.map((element) => {
    const item = document.createElement("li");
    item.textContent = element;
    item.classList = "item";
    return item;
  });
  return arrElements;
};

ingredientsList.append(...createArrItems(ingredients));
