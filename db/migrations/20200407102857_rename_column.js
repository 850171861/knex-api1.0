
exports.up = async (knex) => {
  await knex.schema.table('schooluser_classes', function (table) {
    table.renameColumn('is_class_teacher', 'is_cls_teacher')
  })
}

exports.down = async (knex) => {

}
