
exports.up = async (knex) => {
  return knex.schema.createTable('notification_replies', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
    table.increments('seq_id')
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    // 通告的id
    table.string('notification_id')
    // 回覆者的 id
    table.string('schooluser_id')
    // 回覆內容
    table.string('reply')
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('notification_replies')
}
