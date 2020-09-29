exports.up = async (knex) => {
  await knex.schema.table('schoolusers', table => {
    table.specificType('groups', 'text[]')
  })
}

exports.down = async (knex) => {

}
