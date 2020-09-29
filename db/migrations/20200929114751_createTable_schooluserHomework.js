exports.up = async (knex) => {
  return knex.schema.createTable('schooluser_homework', function (table) {
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
}

exports.down = async (knex) => {

}
