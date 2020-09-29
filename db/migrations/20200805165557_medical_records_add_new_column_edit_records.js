
exports.up = async (knex) => {
  await knex.schema.table('medical_records', function (table) {
    table.json('edit_logs')
  })
}

exports.down = async (knex) => {
  await knex.schema.table('medical_records', function (table) {
    table.dropColumn('edit_logs')
  })
}
