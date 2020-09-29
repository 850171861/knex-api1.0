exports.up = async (knex) => {
  await knex.schema.table('posts', function (table) {
    table.text('content_blocks')
  })
}

exports.down = async (knex) => {
  await knex.schema.table('posts', function (table) {
    table.dropColumn('content_blocks')
  })
}
