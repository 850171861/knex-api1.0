
exports.up = async (knex) => {
  await knex.schema.table('punch_records', function (table) {
    table.string('school_dashboard_id')
  })
}

exports.down = async (knex) => {
  await knex.schema.table('punch_records', function (table) {
    table.dropColumn('school_dashboard_id')
  })
}
