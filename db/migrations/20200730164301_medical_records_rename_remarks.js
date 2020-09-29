
exports.up = async (knex) => {
  await knex.schema.table('medical_records', function (table) {
    table.renameColumn('remarks', 'remark')
  })
}

exports.down = async (knex) => {

}
