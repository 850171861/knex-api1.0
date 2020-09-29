exports.up = async (knex) => {
  await knex.schema.table('evalution_reports', table => {
    table.dropPrimary()
  })
  await knex.schema.table('evalution_reports', table => {
    table.increments('short_id')
  })
}

exports.down = async (knex) => {

}
