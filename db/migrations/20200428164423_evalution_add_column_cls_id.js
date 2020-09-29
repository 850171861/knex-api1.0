exports.up = async (knex) => {
  await knex.schema.table('evalutions', table => {
    table.string('cls_id')
  })
}

exports.down = async (knex) => {

}
