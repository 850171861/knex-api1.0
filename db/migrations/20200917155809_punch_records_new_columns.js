exports.up = async (knex) => {
  await knex.schema.table('punch_records', async table => {
    table.integer('section')
    table.integer('official_leaves')
    table.integer('absences')
  })
}

exports.down = async (knex) => {
  await knex.schema.table('punch_records', function (table) {
    table.dropColumn('section')
    table.dropColumn('official_leaves')
    table.dropColumn('absences')
  })
}
