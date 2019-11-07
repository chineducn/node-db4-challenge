
exports.up = function(knex) {
    return knex
        .schema
        .createTable('recipes', tbl => {
            tbl
                .increments();
            tbl
                .string('name', 255)
                .unique()
                .notNullable();
        })
        .createTable('ingredients', tbl => {
            tbl
                .increments();
            tbl
                .string('name', 255)
                .unique()
                .notNullable();
            tbl
                .float('quantity', 5, 2)
                .notNullable();
        })
        .createTable('steps', tbl => {
            tbl
                .increments();
            tbl
                .integer('step_number')
                .unsigned()
                .notNullable()
            tbl
                .string('description', 255)
                .notNullable()
            tbl
                .integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
            tbl
                .integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
        })
};

exports.down = function(knex) {
    return knex
        .schema
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
