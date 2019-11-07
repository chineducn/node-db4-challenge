recipes
    id
    name
ingredients
    id
    name
    quantity
steps
    id
    step number
    description
    ingredient id
    recipe id



one             many
Recipes <-----> Steps

many           many
Recipes <----> Ingredients


Ingredients are part of steps

Steps may not have ingredients