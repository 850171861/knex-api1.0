
exports.up = async (knex) => {
  await knex.schema.table('evalution_reports', function (table) {
    table.renameColumn('school_year_id', 'schoolyear_id')
  })
  await knex.schema.table('courses', function (table) {
    table.renameColumn('school_year_id', 'schoolyear_id')
  })
  await knex.schema.table('classes', function (table) {
    table.renameColumn('school_year_id', 'schoolyear_id')
  })
}

exports.down = async (knex) => {

}
