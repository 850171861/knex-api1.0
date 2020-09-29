
exports.up = async (knex) => {
  await knex.schema.table('users_notifications', function (table) {
    // 是否已讀
    table.boolean('is_read').defaultTo(false)
  })
}

exports.down = async (knex) => {
  await knex.schema.table('users_notifications', function (table) {
    table.dropColumn('is_read')
  })
}
