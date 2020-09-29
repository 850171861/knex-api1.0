exports.up = async (knex) => {
  await knex.schema.table('classes', function (table) {
    table.renameColumn('short_id', 'seq_id')
  })
  await knex.schema.table('courses', function (table) {
    table.renameColumn('short_id', 'seq_id')
  })
  await knex.schema.table('schools', function (table) {
    table.renameColumn('short_id', 'seq_id')
  })
  await knex.schema.table('schooluser_classes', function (table) {
    table.renameColumn('short_id', 'seq_id')
  })
  await knex.schema.table('users', function (table) {
    table.renameColumn('short_id', 'seq_id')
  })
  await knex.schema.table('schools_dashboards', function (table) {
    table.renameColumn('short_id', 'seq_id')
  })
  await knex.schema.table('schoolusers', function (table) {
    table.renameColumn('short_id', 'seq_id')
  })
}

exports.down = async (knex) => {

}
