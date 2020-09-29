exports.up = async (knex) => {
  await knex.schema.table('posts', function (table) {
    table.renameColumn('event_id', 'talent_id')
  })
}

exports.down = async (knex) => {

}
