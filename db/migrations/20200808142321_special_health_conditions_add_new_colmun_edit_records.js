exports.up = async (knex) => {
  await knex.schema.table('special_health_conditions', function (table) {
    table.json('edit_logs')
  })
}

exports.down = async (knex) => {
  await knex.schema.table('special_health_conditions', function (table) {
    table.dropColumn('edit_logs')
  })
}
