
exports.up = async (knex) => {
  await knex.schema.table('posts', table => {
    table.dropPrimary()
  })
  await knex.schema.table('posts', table => {
    table.increments('seq_id')
  })
}

exports.down = async (knex) => {

}
