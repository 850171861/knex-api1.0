
exports.up = async (knex) => {
    await knex.schema.table('schooluser_classes', function (table) {
        table.increments('seq_id')
    })
}

exports.down = async (knex) => {
    await knex.schema.table('schooluser_classes', function (table) {
        table.dropColumn('seq_id')
    })
}
