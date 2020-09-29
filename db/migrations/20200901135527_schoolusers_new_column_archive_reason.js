
exports.up = async (knex) => {
  await knex.schema.table('schoolusers', function (table) {
    table.string('archived_reason')
  })
}

exports.down = async (knex) => {
  await knex.schema.table('schoolusers', function (table) {
    table.dropColumn('archived_reason')
  })
}
