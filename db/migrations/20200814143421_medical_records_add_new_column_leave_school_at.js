
exports.up = async (knex) => {
  return knex.schema.table('medical_records', function (table) {
    // 提早離校時間
    table.timestamp('leave_school_at')
  })
}

exports.down = async (knex) => {
  return knex.schema.table('medical_records', function (table) {
    table.dropColumn('leave_school_at')
  })
}
