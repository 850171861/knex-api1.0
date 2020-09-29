exports.up = async (knex) => {
  await knex.schema.table('classes', function (table) {
    table.renameColumn('code', 'slug')
  })
  await knex.schema.table('courses', function (table) {
    table.renameColumn('code', 'slug')
  })
}

exports.down = async (knex) => {

}
