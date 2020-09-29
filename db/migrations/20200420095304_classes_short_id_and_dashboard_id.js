exports.up = async function (knex) {
  await knex.schema.table('classes', table => {
    table.dropPrimary()
  })
  await knex.schema.table('classes', table => {
    table.increments('short_id')
  })
  await knex.schema.table('classes', table => {
    table.renameColumn('schoolyear_id', 'school_dashboard_id')
  })
}

exports.down = async function (knex) {

}
