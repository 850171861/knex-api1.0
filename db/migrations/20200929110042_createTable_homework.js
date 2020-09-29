exports.up = async (knex) => {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

  await knex.schema.createTable('homework', function (table) {
    // 记录ID
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
    // 短ID
    table.increments('seq_id')
    // 创建时间
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    // 修改时间
    table.timestamp('modified_at')
    // 删除时间
    table.timestamp('deleted_at')
    // 学校的ID
    table.string('school_id')
    // 班级的ID
    table.string('cls_id')
    // 课程的ID
    table.string('course_id')
    // 创建者的ID
    table.string('creator_id')
    // 作业的标题
    table.string('title')
    // 作业的说明
    table.text('content')
    // 发布时间
    table.timestamp('issued_at')
    // 允许学生开始提交作业的时间
    table.timestamp('allow_submit_at')
    // 作业的截至时间
    table.timestamp('end_at')
  })
}

exports.down = async (knex) => {

}
