exports.up = async (knex) => {
  return knex.schema.table('special_health_conditions', function (table) {
    table.string('hospital')
  })
}

exports.down = async (knex) => {

}
