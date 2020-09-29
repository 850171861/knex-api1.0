
exports.up = async (knex) => {
  await knex.schema.table('students', function (table) {
    table.string('schooluser_id')
    table.string('school_id')
    table.string('goldcard_no')
  })
}

exports.down = async (knex) => {
  await knex.schema.table('students', function (table) {
    table.dropColumn('schooluser_id')
    table.dropColumn('school_id')
    table.dropColumn('goldcard_no')
  })
}
