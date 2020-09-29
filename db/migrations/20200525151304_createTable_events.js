
exports.up = async (knex) => {
  await knex.schema.createTable('events', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')
    table.increments('seq_id')

    table.string('name')
    table.string('intelligence_id')
    table.string('school_id')
  })

  await knex.schema.createTable('intelligences', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')
    table.increments('seq_id')

    table.string('name')
    table.string('english_name')
  })

  await knex.schema.table('posts', function (table) {
    table.string('event_id')
  })
}

exports.down = async (knex) => {

}
