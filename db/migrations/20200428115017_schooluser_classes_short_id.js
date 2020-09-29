exports.up = async (knex) => {
  await knex.schema.table('schooluser_classes', table => {
    table.dropPrimary()
  })
  await knex.schema.table('schooluser_classes', table => {
    table.increments('short_id')
  })
}

exports.down = async (knex) => {

}
