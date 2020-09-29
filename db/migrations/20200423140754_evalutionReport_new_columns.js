
exports.up = async (knex) => {
  await knex.schema.table('evalution_reports', table => {
    table.string('title')
    table.string('subtitle')
  })
}

exports.down = async (knex) => {

}
