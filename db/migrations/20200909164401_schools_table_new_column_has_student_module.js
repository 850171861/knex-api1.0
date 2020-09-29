exports.up = async (knex) => {
  await knex.schema.table('schools', function (table) {
    // 學生資料模組
    table.boolean('has_student_module').defaultTo(false)
  })
}

exports.down = async (knex) => {
  await knex.schema.table('schools', function (table) {
    table.dropColumn('has_student_module')
  })
}
