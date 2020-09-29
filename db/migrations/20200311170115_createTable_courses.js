exports.up = async (knex) => {
  return knex.schema.createTable('courses', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    // 班級名稱
    table.string('name')
    // Dashboard度
    table.string('school_year')
    // 屬於哪個學校
    table.string('school_id')
    // 屬於哪個班級
    table.string('class_id')
    // 課程類別: 選修、必修、...
    table.string('type')
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('courses')
}
