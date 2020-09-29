
exports.up = async (knex) => {
  await knex.schema.dropTableIfExists('schools')
  return knex.schema.createTable('schools', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')
    // 學校名字
    table.string('name')
    // 學校英文名字
    table.string('english_name')
    // 學校的slug
    table.string('slug')
    // 創建學校資料的user id
    table.string('created_by')
    // 使用用戶名稱與密碼登入
    table.boolean('login_by_username').defaultTo(false)
    // 使用電郵與密碼登入
    table.boolean('login_by_email').defaultTo(false)
    // 使用SMS登入
    table.boolean('login_by_sms').defaultTo(false)
    // 使用google帳戶認證
    table.boolean('login_by_google').defaultTo(false)
    // 使用電郵認證
    table.boolean('login_by_mail_authentication').defaultTo(false)
  })
}

exports.down = async (knex) => {

}
