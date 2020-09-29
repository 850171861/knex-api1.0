exports.up = async (knex) => {
  await knex.schema.table('schools', function (table) {
    // 健康模組
    table.boolean('has_health_module').defaultTo(false)
    // 通告模組
    table.boolean('has_notification_module').defaultTo(false)
  })
}

exports.down = async (knex) => {
  await knex.schema.table('schools', function (table) {
    table.dropColumn('has_health_module')
    table.dropColumn('has_notification_module')
  })
}
