exports.up = async (knex) => {
  return knex.schema.createTable('evalution_reports', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    // 評估表的名稱
    table.string('name')
    // Dashboard
    table.string('school_year')
    // 學段
    table.integer('term')
    // 評估表模版的id
    table.string('evalution_form_id')
    // 開始開放填寫的時間
    table.timestamp('active_at')
    // 結束開放填寫的時間
    table.timestamp('inactive_at')
    // 發布的時間
    table.timestamp('date_of_issue')
    // 老師最後填寫的時間
    table.timestamp('last_generate_evalution')
    // 是否為英文版
    table.boolean('is_english')
    // 適用的班級對像
    table.specificType('class_ids', 'text[]')
    // 適用的學生對像
    table.specificType('schooluser_ids', 'text[]')
    // 各別的用戶設定
    table.specificType('user_options', 'json[]')
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('evalution_reports')
}
