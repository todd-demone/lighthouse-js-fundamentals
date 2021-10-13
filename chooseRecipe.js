const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // loop through recipes
  for (const recipe of recipes) {
    // if each bakery has one ingredient, return recipe.name
    if (ingredientCheck(bakeryA, recipe.ingredients) && ingredientCheck(bakeryB, recipe.ingredients)) {
      return recipe.name;
    }
  }
};

const ingredientCheck = function(bakery, recipeIngredients) {
  for (const bakeryIngredient of bakery) {
    for (const recipeIngredient of recipeIngredients) {
      if (bakeryIngredient === recipeIngredient) {
        return true;
      }
    }
  }
  return false;
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: 'Nima\'s Famous Dijon Raisins',
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));