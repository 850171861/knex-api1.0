exports.up = async (knex) => {
  await knex.schema.renameTable('events', 'talents')
}

exports.down = async (knex) => {
  await knex.schema.renameTable('talents', 'events')
}
