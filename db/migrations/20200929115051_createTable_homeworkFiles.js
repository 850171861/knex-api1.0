exports.up = async (knex) => {
  return knex.schema.createTable('homework_files', function (table) {
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
}

exports.down = async (knex) => {

}
