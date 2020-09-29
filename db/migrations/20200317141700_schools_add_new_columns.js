
exports.up = async (knex) => {
  await knex.schema.table('schools', function (table) {
    // 使用用戶名稱與密碼登入
    table.boolean('login_by_username').defaultTo(false)
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
