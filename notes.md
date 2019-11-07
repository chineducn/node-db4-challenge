recipes
    id
    name
ingredients
    id
    name
    quantity
instructions
    id
    description
    ingredient id
steps
    id
    recipe id
    instruction id
    step number



one             many
Recipes <-----> Steps

many           many
Recipes <----> Ingredients


Ingredients are part of steps

Steps may not have ingredients