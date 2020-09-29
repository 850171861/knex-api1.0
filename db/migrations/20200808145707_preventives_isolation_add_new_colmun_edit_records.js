exports.up = async (knex) => {
  await knex.schema.table('preventives_isolation', function (table) {
    table.json('edit_logs')
  })
}

exports.down = async (knex) => {
  await knex.schema.table('preventives_isolation', function (table) {
    table.dropColumn('edit_logs')
  })
}
