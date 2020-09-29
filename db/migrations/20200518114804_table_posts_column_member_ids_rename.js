
exports.up = async (knex) => {
  await knex.schema.table('posts', function (table) {
    table.renameColumn('member_ids', 'participant_ids')
  })
}

exports.down = async (knex) => {

}
