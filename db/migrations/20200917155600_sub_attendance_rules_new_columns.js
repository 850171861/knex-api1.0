exports.up = async (knex) => {
  await knex.schema.table('sub_attendance_rules', async table => {
    table.boolean('is_exempt')
    table.boolean('is_after_school')
    table.integer('section')
  })
}

exports.down = async (knex) => {
  await knex.schema.table('sub_attendance_rules', function (table) {
    table.dropColumn('is_exempt')
    table.dropColumn('is_after_school')
    table.dropColumn('section')
  })
}
