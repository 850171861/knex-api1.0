
exports.up = async (knex) => {
  await knex.schema.table('classes', function (table) {
    // 是否已封存
    table.timestamp('archived_at')
  })
  await knex.schema.table('courses', function (table) {
    // 是否已封存
    table.timestamp('archived_at')
  })
}

exports.down = async (knex) => {

}
