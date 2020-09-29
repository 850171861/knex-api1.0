exports.up = async function (knex) {
  await knex.schema.table('post_photos', function (table) {
    table.specificType('delete_face_ids', 'text[]')
  })
}

exports.down = async function (knex) {

}
