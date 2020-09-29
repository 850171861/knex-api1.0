exports.up = async (knex) => {
  return knex.schema.table('special_health_conditions', function (table) {
    table.string('school_dashboard_id')
  })
}

exports.down = async (knex) => {

}
