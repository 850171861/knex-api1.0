exports.up = async (knex) => {
  return knex.schema.createTable('sub_attendance_rules', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
    table.increments('seq_id')
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    // 所屬的學校
    table.string('school_id')
    // 生效開始時間
    table.timestamp('start_time')
    // 生效結束時間
    table.timestamp('end_time')
    // 類型: 上午、下午、全日、放假
    table.string('type')
    // 遲到次數
    table.integer('lates')
    // 曠課次數
    table.integer('absenteeisms')
    // 對應的主規則id
    table.string('rule_id')
    // 註解
    table.text('remarks')
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('sub_attendance_rules')
}
