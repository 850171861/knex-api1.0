exports.up = async (knex) => {
  return knex.schema.createTable('mobile_token', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
    table.increments('seq_id')
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    // 手機的token
    table.string('token')
    // 用戶id
    table.string('user_id')
  })
}

exports.down = async (knex) => {

}
