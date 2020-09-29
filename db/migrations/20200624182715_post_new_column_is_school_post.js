
exports.up = async (knex) => {
  await knex.schema.table('posts', function (table) {
    table.boolean('is_school_post').defaultTo(false)
  })
}

exports.down = async (knex) => {

}
