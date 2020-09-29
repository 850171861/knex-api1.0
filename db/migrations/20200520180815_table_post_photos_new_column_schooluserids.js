exports.up = async (knex) => {
  await knex.schema.table('post_photos', function (table) {
    table.specificType('participant_ids', 'text[]')
  })
}

exports.down = async (knex) => {

}
