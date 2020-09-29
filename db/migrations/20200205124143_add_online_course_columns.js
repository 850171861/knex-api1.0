exports.up = async function (knex) {
  await knex.schema.table('online_courses', async function (table) {
    table.json('files')
    table.string('phone')
  })
}

exports.down = async function (knex) {

}
