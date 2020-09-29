
exports.up = function (knex) {
  return knex.schema.createTable('users_online_courses', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.string('user_id')
    table.string('online_courses_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users_online_courses')
}
