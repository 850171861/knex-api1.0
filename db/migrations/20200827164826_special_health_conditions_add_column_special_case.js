
exports.up = async (knex) => {
  await knex.schema.table('special_health_conditions', function (table) {
    table.text('special_case')
  })
}

exports.down = async (knex) => {
  await knex.schema.table('special_health_conditions', function (table) {
    table.dropColumn('special_case')
  })
}
