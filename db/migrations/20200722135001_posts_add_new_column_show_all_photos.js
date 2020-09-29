
exports.up = async (knex) => {
  await knex.schema.table('posts', function (table) {
    table.boolean('show_all_photos').defaultTo(false)
  })
}

exports.down = async (knex) => {

}
