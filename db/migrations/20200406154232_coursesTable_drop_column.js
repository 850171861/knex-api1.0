
exports.up = async (knex) => {
  await knex.schema.table('courses', function (table) {
    table.dropColumns('semesters')
  })
}

exports.down = async (knex) => {

}
