const recipeData = {
  name: "Broccoli Cheese Soup",
  serves: 6,
  servings: {
    count: 3,
    unit: "cup",
    calories: 600,
  },
  ingredients: [
    {
      name: "broccoli",
      unit: "head",
      count: 4,
    },
    {
      name: "garlic clove",
      count: 2,
    },
    {
      name: "onion",
      count: 2,
    },
    {
      name: "chicken stock",
      count: 4.5,
      unit: "cup",
    },
    {
      name: "sharp cheddar cheese",
      count: 4.5,
      unit: "cup",
    },
    {
      name: "parmesan cheese",
      count: 1.25,
      unit: "cup",
    },
    {
      name: "milk",
      count: 2,
      unit: "cup",
    },
    {
      name: "water",
    },
    {
      name: "butter",
      count: 4,
      unit: "tablespoon",
    },
    {
      name: "salt",
      count: 2,
      unit: "teaspoon",
    },
    {
      name: "pepper",
      count: 1,
      unit: "teaspoon",
    },
  ],
  directions: [
    "Trim broccoli florets from stalks.",
    "Chop broccoli stalks into 1 inch cubes.",
    "Dice onion.",
    "Mince garlic.",
    "In a pot large enough to contain all ingredients, sauté onions in butter until tender, about 5 minutes.",
    "Add garlic and sauté until fragrant.",
    "Add chicken stock and bring to a low simmer. Simmer uncovered for 20 minutes.",
    "Meanwhile, add milk to a pot over low heat.",
    "Stir in cheeses slowly, a 1/2 cup at a time, waiting for each batch to melt before adding any more.",
    "Remove from heat.",
    "Once broccoli is done simmering, divide up contents of pot and blend to a find consistency. Return to pot once done.",
    "Add cheese sauce, salt, and pepper to the large pot over medium heat. Stir to combine.",
    "Add water as necessary to achieve desired consistency.",
    "Remove from heat.",
    "Do not attempt to actually make this! I made it up and it would be terrible.",
  ],
};

const recipeTrans = function (recipe) {
  instruction(recipe);
  ingredient(recipe);
  direction(recipe);
};

const instruction = function (recipe) {
  console.log(
    recipe.name +
      "\n====\n\n" +
      "Makes " +
      recipe.serves +
      ", " +
      recipe.servings.count +
      " " +
      recipe.servings.unit +
      " servings of " +
      recipe.servings.calories +
      " calories each." +
      "\n\nIngredients\n----"
  );
};

const ingredient = function (recipe) {
  for (let i = 0; i < recipe.ingredients.length; i++) {
    let ingre = recipe.ingredients[i];
    let ct = ingre.hasOwnProperty("count") ? ingre.count : "";
    let ut = ingre.hasOwnProperty("unit") ? ingre.unit : "";
    if (!ingre.hasOwnProperty("count") && !ingre.hasOwnProperty("unit")) {
      console.log("* " + ingre.name);
    } else {
      console.log("* " + ingre.name + " " + "(" + ct + ut + ")\n");
    }
  }
};

const direction = function (recipe) {
  console.log("\n\nDirections\n----");
  for (let j = 0; j < recipe.directions.length; j++) {
    let direction = recipe.directions[j];
    console.log(`${j + 1}. ${direction}\n`);
  }
};

recipeTrans(recipeData);
