exports.up = async (knex) => {
  return knex.schema.createTable('evalutions', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    // 學生的schooluser id
    table.string('schooluser_id')
    // 學生姓名
    table.string('student_name')
    // 教青局編號
    table.string('edu_no')
    // 班級名稱
    table.string('class_name')
    // 班上的學號
    table.integer('student_class_no')
    // 對應的 evalution_report
    table.string('evalution_report_id')
    // 各項目的評分
    table.json('scores')
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('evalutions')
}
