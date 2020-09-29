
exports.up = async (knex) => {
  return knex.schema.createTable('notifications', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
    table.increments('seq_id')
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    // 學校的id
    table.string('school_id')
    // 創建者 id
    table.string('creator_id')
    // 接收者的id，複數
    table.specificType('schooluser_ids', 'text[]')
    // 發佈時間
    table.timestamp('date_of_issue')
    // 通告的標題
    table.string('title')
    // 通告的內文
    table.text('content')
    // 回覆選項
    table.specificType('selections', 'text[]')
    // 回覆期限
    table.timestamp('submission_date_end')
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('notifications')
}
