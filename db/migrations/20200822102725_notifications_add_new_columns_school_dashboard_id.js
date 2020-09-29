
exports.up = async (knex) => {
  await knex.schema.table('notifications', function (table) {
    // 學年
    table.string('school_dashboard_id')
  })
}

exports.down = async (knex) => {
  await knex.schema.table('notifications', function (table) {
    table.dropColumn('school_dashboard_id')
  })
}
