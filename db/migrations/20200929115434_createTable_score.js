exports.up = async (knex) => {
  return knex.schema.createTable('homework_score', function (table) {
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
}

exports.down = async (knex) => {

}
