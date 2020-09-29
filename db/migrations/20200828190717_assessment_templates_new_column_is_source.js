
exports.up = async (knex) => {
  await knex.schema.table('assessment_templates', function (table) {
    table.boolean('is_source').defaultTo(true)
  })
}

exports.down = async (knex) => {
  await knex.schema.table('assessment_templates', function (table) {
    table.dropColumn('is_source')
  })
}
