
exports.up = async (knex) => {
  await knex.schema.table('posts', function (table) {
    table.specificType('member_ids', 'text[]')
  })
}

exports.down = async (knex) => {

}
