exports.up = async (knex) => {
  await knex.schema.table('post_photos', function (table) {
    table.string('type')
  })
}

exports.down = async (knex) => {
  await knex.schema.table('post_photos', function (table) {
    table.dropColumn('type')
  })
}
