
exports.up = async (knex) => {
  return knex.schema.createTable('post_photos', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    table.string('post_id')
    table.string('key')
    table.string('url')
    table.specificType('face_record', 'json[]')
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('post_photos')
}
