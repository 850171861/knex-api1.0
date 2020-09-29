
exports.up = async (knex) => {
  await knex.schema.table('labels', function (table) {
    // 對應的 school
    table.string('school_id')
  })
}

exports.down = async (knex) => {
  await knex.schema.table('labels', function (table) {
    table.dropColumn('school_id')
  })
}
