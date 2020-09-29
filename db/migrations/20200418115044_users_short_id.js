exports.up = async (knex) => {
  await knex.schema.table('users', table => {
    table.dropPrimary()
  })
  await knex.schema.table('users', table => {
    table.increments('short_id')
  })
}

exports.down = async (knex) => {

}
