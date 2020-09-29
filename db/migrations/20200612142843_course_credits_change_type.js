
exports.up = async (knex) => {
  await knex.schema.table('courses', async table => {
    await table.dropColumn('credits')
  })

  await knex.schema.table('courses', async table => {
    await table.float('credits')
  })
}

exports.down = async (knex) => {

}
