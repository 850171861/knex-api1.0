
exports.up = function (knex) {
  return knex.schema.table('campus', table => {
    table.dropColumn('collection_id')
  })
}

exports.down = function (knex) {

}
