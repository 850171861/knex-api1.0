exports.up = async (knex) => {
  return knex.schema.createTable('school_years', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    // Dashboard的顯示名稱
    table.string('name')
    // 所屬的學校
    table.string('school_id')
    // 是否為現在的Dashboard
    table.boolean('is_current').defaultTo(false)
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('school_years')
}
