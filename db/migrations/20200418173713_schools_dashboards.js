exports.up = async function (knex) {
  await knex.schema.createTable('schools_dashboards', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
    table.increments('short_id')
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    table.string('name')
    table.string('school_id')
    table.boolean('is_default').defaultTo(false)
  })
}

exports.down = async function (knex) {

}
