
exports.up = async (knex) => {
  await knex.schema.table('evalutions', function (table) {
    table.renameColumn('student_name', 'schooluser_name')
    table.renameColumn('edu_no', 'schooluser_edu_no')
    table.renameColumn('class_name', 'cls_name')
    table.renameColumn('student_class_no', 'schooluser_cls_num')
  })
}

exports.down = async (knex) => {

}
