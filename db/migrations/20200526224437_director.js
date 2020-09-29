exports.up = async function (knex) {
  await knex.schema.table('schoolusers', function (table) {
    table.renameColumn('is_principal', 'is_director')
  })
}

exports.down = async function (knex) {

}
