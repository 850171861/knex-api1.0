
exports.up = async (knex) => {
  return knex.schema.table('medical_records', function (table) {
    table.string('symptom')
    table.boolean('notified')
  })
}

exports.down = async (knex) => {

}
