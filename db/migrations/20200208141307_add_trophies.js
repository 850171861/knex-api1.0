exports.up = async function (knex) {
  await knex.schema.table('users_online_courses', function (table) {
    table.renameColumn('online_courses_id', 'online_course_id')
  })
  await knex.schema.createTable('users_trophies', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.string('user_id')
    table.string('online_course_id')
    table.string('type')
  })
}

exports.down = async function (knex) {
  await knex.schema.table('users_online_courses', function (table) {
    table.renameColumn('online_course_id', 'online_courses_id')
  })
  await knex.schema.dropTableIfExists('users_trophies')
}
