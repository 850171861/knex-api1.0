exports.up = async (knex) => {
  return knex.schema.table('medical_records', function (table) {
    // 申請類型
    table.string('application_type')
    // 申請備註
    table.text('application_remark')
    // 申請時間
    table.timestamp('application_created_at')
    // 申請修改時間
    table.timestamp('application_modified_at')
  })
}

exports.down = async (knex) => {

}
