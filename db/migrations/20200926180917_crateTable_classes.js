// classes
exports.up = async (knex) => {
  return knex.schema.createTable('classes', function (table) {
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    // 班級名稱
    table.string('name')
    // 英文名稱
    table.string('english_name')
    // 班級代號
    table.string('slug')
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('classes')
}