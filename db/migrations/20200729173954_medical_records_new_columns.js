
exports.up = async (knex) => {
  return knex.schema.table('medical_records', function (table) {
    table.timestamp('admission_at')
    table.timestamp('discharge_at')
    table.text('treatment')
  })
}

exports.down = async (knex) => {

}
