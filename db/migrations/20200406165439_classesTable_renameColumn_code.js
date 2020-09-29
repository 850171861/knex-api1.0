
exports.up = async (knex) => {
  await knex.schema.table('classes', function (table) {
    table.renameColumn('code_name', 'code')
  })
}

exports.down = async (knex) => {

}
