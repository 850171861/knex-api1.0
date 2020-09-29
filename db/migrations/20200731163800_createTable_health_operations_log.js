
exports.up = async (knex) => {
  return knex.schema.createTable('health_operations_log', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    // 屬於哪個學校
    table.string('school_id')
    table.string('school_dashboard_id')

    table.string('module_name')
    table.string('module_english_name')

    table.increments('seq_id')
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('health_operations_log')
}
