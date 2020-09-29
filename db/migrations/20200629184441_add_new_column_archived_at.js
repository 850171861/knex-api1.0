
exports.up = async (knex) => {
  await knex.schema.table('schoolusers', function (table) {
    table.timestamp('archived_at')
  })
  await knex.schema.table('classes', function (table) {
    table.timestamp('archived_at')
  })
  await knex.schema.table('courses', function (table) {
    table.timestamp('archived_at')
  })
}

exports.down = async (knex) => {

}
