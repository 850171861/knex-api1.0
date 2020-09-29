
exports.up = function (knex) {
  return knex.schema.createTable('campus', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')
    // 學校名字
    table.string('name')
    //  學校 rekognition create collection 後的 collection_id
    table.string('collection_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('campus')
}
