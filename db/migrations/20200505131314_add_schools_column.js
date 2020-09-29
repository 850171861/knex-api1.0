exports.up = async (knex) => {
  await knex.schema.table('schools', table => {
    table.string('collection_id')
  })
}

exports.down = async (knex) => {

}
