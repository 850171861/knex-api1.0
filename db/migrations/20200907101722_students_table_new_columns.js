
exports.up = async (knex) => {
  await knex.schema.table('students', function (table) {
    // 校部編號
    table.string('schsub_code')
    // 葡文姓名
    table.string('portuguese_name')
    // 年級
    table.string('grand')
    // 班別 A~Z
    table.string('cls_code')
    // 班內學號
    table.string('cls_no')
  })
}

exports.down = async (knex) => {
  await knex.schema.table('students', function (table) {
    table.dropColumn('schsub_code')
    table.dropColumn('portuguese_name')
    table.dropColumn('grand')
    table.dropColumn('cls_code')
    table.dropColumn('cls_no')
  })
}
