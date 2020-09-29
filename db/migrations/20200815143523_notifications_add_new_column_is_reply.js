exports.up = async (knex) => {
  return knex.schema.table('notifications', function (table) {
    // 是否需要回復
    table.boolean('is_reply').defaultTo(false)
    // 是否為全校通告
    table.boolean('is_school_notification').defaultTo(false)
    // 接收群組的班級id，複數
    table.specificType('cls_ids', 'text[]')
  })
}

exports.down = async (knex) => {
  return knex.schema.table('notifications', function (table) {
    table.dropColumn('is_reply')
    table.dropColumn('is_school_notification')
    table.dropColumn('cls_ids')
  })
}
