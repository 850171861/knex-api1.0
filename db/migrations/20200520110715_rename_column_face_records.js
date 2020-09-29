
exports.up = async (knex) => {
  await knex.schema.table('post_photos', function (table) {
    table.renameColumn('face_record', 'face_records')
  })
  await knex.schema.table('schooluser_photos', function (table) {
    table.renameColumn('face_record', 'face_records')
  })
}

exports.down = async (knex) => {

}
