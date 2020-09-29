
exports.up = async (knex) => {
  await knex.schema.table('courses', function (table) {
    table.renameColumn('class_id', 'cls_id')
  })
  await knex.schema.table('schooluser_classes', function (table) {
    table.renameColumn('class_id', 'cls_id')
  })
  await knex.schema.table('evalution_reports', function (table) {
    table.renameColumn('class_ids', 'cls_ids')
  })
}

exports.down = async (knex) => {

}
