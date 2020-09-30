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

  await knex.schema.createTable('schooluser_homework', function (table) {
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
    // 作业的ID
    table.string('homework_id')
    // 学生提交时候备注
    table.text('remark')
    // 学生提交时间
    table.timestamp('submit_at')
    // 学生ID
    table.string('schooluser_id')
  })

  await knex.schema.createTable('homework_files', function (table) {
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
    // 创建者的ID
    table.string('creator_id')
    // 作业的ID
    table.string('homework_id')
    // 记录学生ID
    table.string('schooluser_homework_id')
    // 作业名字
    table.string('files_name')
    // 作业类型
    table.string('files_type')
    // 作业链接
    table.string('files_url')
  })

  await knex.schema.createTable('homework_score', function (table) {
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
    // 学生分数
    table.integer('fraction')
    // 用户ID
    table.string('schooluser_id')
    // 作业ID
    table.string('homework_id')
    // 评语
    table.string('remark')
  })

  await knex.schema.createTable('classes', function (table) {
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
    // 学生名字
    table.string('name')
    // 学年ID
    table.string('school_dashboard_id')
    // 学校ID
    table.string('school_id')
    // 班级ID
    table.string('cls_id')
  })

  await knex.schema.createTable('schooluser', function (table) {
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
    // 学生或者老师名字
    table.string('name')
    // 邮箱
    table.string('email')
    // 用户ID
    table.string('user_id')
    // 学校ID
    table.string('school_id')
    // 是否是学生
    table.boolean('is_student')
    // 是否是老师
    table.boolean('is_teacher')
    // 离校时间
    table.timestamp('Leave_school_at')
  })

  await knex.schema.createTable('schools', function (table) {
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
    // 学校名字
    table.string('name')
  })

  await knex.schema.createTable('courses', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')
    // 班級
    table.string('name')
    // 学年
    table.string('year')
    // 學校ID
    table.string('school_id')
    // 班級ID
    table.string('cls_id')
  })

  await knex.schema.createTable('schooluser_classes', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')
    table.string('schooluser_id')
    table.string('cls_id')
    table.boolean('is_student')
    table.boolean('is_teacher')
  })
}

exports.down = async (knex) => {

}
