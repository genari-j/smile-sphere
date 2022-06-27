exports.up = function (knex) {
    return knex.schema.createTable("patients", (table) => {
        table.increments("id").primary()
        table.string("name").notNull()
        table.string("email").notNull()
        table.date("birth").notNull()
        table.string("genre").notNull()
        table.string("ocupation").notNull()
        table.string("civil").notNull()
        table.string("address").notNull()
        table.string("complement").notNull()
        table.string("city").notNull()
        table.string("state").notNull()
        table.string("zipcode").notNull()
        table.string("telephone").notNull()
        table.string("cell").notNull()
        table.date("treatment").notNull()
        table.string("weight").notNull()
        table.string("height").notNull()
        table.string("comorbidity").notNull()
        table.string("antecedent").notNull()
    })
};


exports.down = function (knex) {
    return knex.schema.dropTable("patients")
};