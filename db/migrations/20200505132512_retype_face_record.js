
exports.up = async (knex) => {
  await knex.schema.table('schooluser_photos', async table => {
    await table.dropColumn('face_record')
  })

  await knex.schema.table('post_photos', async table => {
    await table.dropColumn('face_record')
  })

  await knex.schema.table('schooluser_photos', async table => {
    await table.json('face_record')
  })

  await knex.schema.table('post_photos', async table => {
    await table.json('face_record')
  })
}

exports.down = async (knex) => {

}
