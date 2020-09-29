exports.up = async (knex) => {
  await knex.schema.table('schoolusers', table => {
    table.dropPrimary()
  })
  await knex.schema.table('schoolusers', table => {
    table.increments('short_id')
  })
}

exports.down = async (knex) => {

}
