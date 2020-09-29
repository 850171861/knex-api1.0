
exports.up = async (knex) => {
  await knex.schema.table('schoolusers', function (table) {
    table.boolean('is_paramedic').defaultTo(false)
  })
}

exports.down = async (knex) => {
  await knex.schema.table('schoolusers', function (table) {
    table.dropColumn('is_paramedic')
  })
}
