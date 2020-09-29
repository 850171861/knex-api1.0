
exports.up = async (knex) => {
  return knex.schema.createTable('medical_records', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    table.string('creator_id')
    table.string('schooluser_id')

    table.text('remarks')

    // 屬於哪個學校
    table.string('school_id')
    table.string('school_dashboard_id')

    table.string('chief_complaint')
    // 症狀
    table.specificType('symptoms', 'text[]')
    table.increments('seq_id')
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('medical_records')
}
