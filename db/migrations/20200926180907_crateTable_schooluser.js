// schoolusers
exports.up = async (knex) => {
  return knex.schema.createTable('schoolusers', function (table) {
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    table.string('name')
    table.string('englishName')
    table.string('email')

    table.boolean('is_student').defaultTo(false)
    table.boolean('is_teacher').defaultTo(false)
    table.boolean('is_director').defaultTo(false)
    table.boolean('is_admin').defaultTo(false)
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('schoolusers')
}