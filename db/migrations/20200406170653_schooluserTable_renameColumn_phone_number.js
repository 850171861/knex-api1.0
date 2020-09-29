
exports.up = async (knex) => {
  await knex.schema.table('schoolusers', function (table) {
    table.renameColumn('sms', 'phone_number')
  })
}

exports.down = async (knex) => {

}
