
exports.up = async (knex) => {
  await knex.schema.table('schools', function (table) {
    table.boolean('has_attendance_module').defaultTo(false)
  })
  await knex.schema.table('schoolusers', function (table) {
    table.boolean('is_attendance_admin').defaultTo(false)
  })
}

exports.down = async (knex) => {
  await knex.schema.table('schools', function (table) {
    table.dropColumn('has_attendance_module')
  })
  await knex.schema.table('schoolusers', function (table) {
    table.dropColumn('is_attendance_admin')
  })
}
