
exports.up = async (knex) => {
  return knex.schema.table('evalution_forms', table => {
    // 代碼
    table.string('code')
  })
}

exports.down = async (knex) => {

}
