
exports.up = async (knex) => {
  await knex.schema.table('classes', async table => {
    await table.dropColumn('label_ids')
  })
  await knex.schema.table('notifications', async table => {
    await table.dropColumn('label_ids')
  })

  await knex.schema.table('classes', async table => {
    await table.specificType('label_ids', 'text[]')
  })

  await knex.schema.table('notifications', async table => {
    await table.specificType('label_ids', 'text[]')
  })
}

exports.down = async (knex) => {

}
