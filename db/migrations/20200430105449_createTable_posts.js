exports.up = async (knex) => {
  return knex.schema.createTable('posts', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    table.string('creator_id')
    table.string('title')
    table.string('content')
    table.string('course_id')
    table.string('cls_id')
    table.string('school_id')
    table.string('school_dashboard_id')
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('posts')
}
