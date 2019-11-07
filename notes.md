recipes
    id
    name
steps
    id
    instructions
ingredients
    id
    name
recipe_step
    recipe id
    step number
    step id
ingredient_step
    ingredient id
    step id
    ingredient quantity



one             many
Recipes <-----> Steps

many           many
Recipes <----> Ingredients


Ingredients are part of steps

Steps may not have ingredients