
exports.up = async (knex) => {
  return knex.schema.createTable('special_health_conditions', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    table.string('creator_id')
    table.string('schooluser_id')

    table.string('etiology_id')
    table.text('etiology_detail')

    // 屬於哪個學校
    table.string('school_id')

    table.increments('seq_id')
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('special_health_conditions')
}
