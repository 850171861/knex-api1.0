exports.up = async (knex) => {
  return knex.schema.createTable('punch_records', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
    table.increments('seq_id')
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    // 所屬的學校
    table.string('school_id')
    // 所屬的用戶
    table.string('schooluser_id')
    // 拍卡卡號
    table.string('card_no')
    // 到校打卡時間
    table.timestamp('punch_in_at')
    // 離校打卡時間
    table.timestamp('punch_out_at')
    // 曠課節數
    table.integer('absenteeisms')
    // 遲到次數
    table.integer('lates')
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('punch_records')
}
