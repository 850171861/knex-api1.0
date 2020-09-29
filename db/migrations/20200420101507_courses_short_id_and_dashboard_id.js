exports.up = async function (knex) {
  await knex.schema.table('courses', table => {
    table.dropPrimary()
  })
  await knex.schema.table('courses', table => {
    table.increments('short_id')
  })
  await knex.schema.table('courses', table => {
    table.renameColumn('schoolyear_id', 'school_dashboard_id')
  })
}

exports.down = async function (knex) {

}
