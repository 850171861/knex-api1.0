
exports.up = async (knex) => {
  await knex.schema.table('schoolusers', function (table) {
    table.boolean('is_notification_admin')
  })
}

exports.down = async (knex) => {
  await knex.schema.table('schoolusers', function (table) {
    table.dropColumn('is_notification_admin')
  })
}
