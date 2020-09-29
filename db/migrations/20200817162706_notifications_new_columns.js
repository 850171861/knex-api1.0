
exports.up = async (knex) => {
  await knex.schema.table('notifications', function (table) {
    // 是否已發佈
    table.boolean('is_issued').defaultTo(false)
    // 附件檔案的url
    table.specificType('files', 'text[]')
  })
}

exports.down = async (knex) => {
  await knex.schema.table('notifications', function (table) {
    table.dropColumn('is_issued')
    table.dropColumn('files')
  })
}
