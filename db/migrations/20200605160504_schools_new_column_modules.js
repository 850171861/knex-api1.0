
exports.up = async (knex) => {
  await knex.schema.table('schools', function (table) {
    table.boolean('has_intelligence_module').defaultTo(false)
  })
}

exports.down = async (knex) => {
  await knex.schema.table('schools', function (table) {
    table.dropColumn('has_intelligence_module')
  })
}
