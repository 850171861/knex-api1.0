exports.up = async (knex) => {
  return knex.schema.createTable('attendance_rules', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
    table.increments('seq_id')
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    // 所屬的學校
    table.string('school_id')
    // 適用星期日子
    table.specificType('days', 'INT[]')
    // 註解
    table.text('remarks')
    // 優先權
    table.integer('priority')
    // 生效開始日期
    table.timestamp('start_date')
    // 生效結束日期
    table.timestamp('end_date')
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('attendance_rules')
}
