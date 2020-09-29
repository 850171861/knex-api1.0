exports.up = async (knex) => {
  return knex.schema.createTable('schooluser_courses', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    table.string('schooluser_id')
    table.string('course_id')
    table.boolean('is_student').defaultTo(false)
    table.boolean('is_course_teacher').defaultTo(false)
    table.boolean('is_teacher').defaultTo(false)
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('schooluser_courses')
}
