exports.up = async (knex) => {
  await knex.schema.table('schooluser_classes', table => {
    table.timestamp('archived_at')
    table.string('school_dashboard_id')
    table.string('school_id')
  })
}

exports.down = async (knex) => {

}
