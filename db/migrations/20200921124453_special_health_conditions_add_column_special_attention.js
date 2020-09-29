
exports.up = async (knex) => {
  await knex.schema.table('special_health_conditions', function (table) {
    table.boolean('special_attention').defaultTo(false)
  })
}

exports.down = async (knex) => {
  await knex.schema.table('special_health_conditions', function (table) {
    table.dropColumn('special_attention')
  })
}
