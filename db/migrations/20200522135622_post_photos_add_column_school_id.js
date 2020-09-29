
exports.up = async (knex) => {
  await knex.schema.table('post_photos', function (table) {
    table.string('school_id')
  })
}

exports.down = async (knex) => {

}
