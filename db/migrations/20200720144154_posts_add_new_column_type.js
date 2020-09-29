
exports.up = async (knex) => {
  await knex.schema.table('posts', function (table) {
    table.string('type')
  })
}

exports.down = async (knex) => {

}
