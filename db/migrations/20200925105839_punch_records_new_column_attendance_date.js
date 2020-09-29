
exports.up = async (knex) => {
  await knex.schema.table('punch_records', function (table) {
    table.date('attendance_date')
  })
}

exports.down = async (knex) => {
  await knex.schema.table('punch_records', function (table) {
    table.dropColumn('attendance_date')
  })
}
