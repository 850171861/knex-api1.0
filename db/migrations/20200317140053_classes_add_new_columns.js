
exports.up = async (knex) => {
  await knex.schema.table('classes', function (table) {
    // 英文名稱
    table.string('english_name')
    // 班級代號
    table.string('code_name')
  })
}

exports.down = async (knex) => {

}
