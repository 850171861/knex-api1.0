exports.up = async (knex) => {
  return knex.schema.createTable('evalution_forms', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    // 表單模版的名稱
    table.string('name')
    // 版本號
    table.integer('revision')
    // 表單內容
    table.specificType('sections', 'json[]')
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('evalution_forms')
}
