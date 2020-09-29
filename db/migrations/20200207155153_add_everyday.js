
exports.up = function (knex) {
  return knex.schema.createTable('everyday', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    // 日期
    table.string('date')

    // // 小一至小三
    // table.string('category')

    // // 主題
    // table.specificType('topics', 'text[]')

    // // online_course_ids
    // // [ '', '', '' ]
    // table.specificType('online_course_ids', 'text[]')

    // var data = {
    //   p123: {
    //     topics: [],
    //     online_course_ids: []
    //   }
    // }

    table.json('data')

    table.index('date', 'date_idx')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('everyday')
}
