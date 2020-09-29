exports.up = async (knex) => {
  await knex.schema.table('schools', table => {
    table.dropPrimary()
  })
  await knex.schema.table('schools', table => {
    table.increments('short_id')
  })
}

exports.down = async (knex) => {

}
