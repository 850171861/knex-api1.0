
exports.up = async (knex) => {
  return knex.schema.table('courses', table => {
    table.integer('term')
  })
}

exports.down = async (knex) => {

}
