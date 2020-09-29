exports.up = async (knex) => {
  await knex.schema.table('schooluser_courses', table => {
    table.timestamp('archived_at')
    table.string('school_dashboard_id')
    table.string('school_id')
  })
  await knex.schema.table('schooluser_courses', table => {
    table.dropPrimary()
  })
  await knex.schema.table('schooluser_courses', table => {
    table.increments('seq_id')
  })
}

exports.down = async (knex) => {

}
