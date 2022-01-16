const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients')
const ingredientsList = [];

for (const ingredient of ingredients) {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("item");
  ingredientsList.push(ingredientItem);
}

ingredientsRef.append(...ingredientsList)


