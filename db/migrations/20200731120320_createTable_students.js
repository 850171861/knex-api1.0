
exports.up = async (knex) => {
  return knex.schema.createTable('students', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
    table.increments('seq_id')
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    // 姓名
    table.string('name')
    // 英文姓名
    table.string('english_name')
    // 性別
    table.string('gender')
    // 國籍
    table.string('nationality')

    // 入學日期
    table.timestamp('enrollment_at')
    // 出生日期
    table.timestamp('birth_at')
    // 出生地點
    table.string('birthplace')
    // 聯絡電話
    table.string('phone_number')
    // 住址
    table.string('address')
    // 父親姓名
    table.string('father_name')
    // 父親職業
    table.string('father_occupation')
    // 父親電話
    table.string('father_phone')
    // 母親姓名
    table.string('mother_name')
    // 母親職業
    table.string('mother_occupation')
    // 母親電話
    table.string('mother_phone')

    // 監護人身份
    table.string('guardianship')
    // 監護人姓名
    table.string('guardian_name')
    // 監護人職業
    table.string('guardian_occupation')
    // 監護人電話
    table.string('guardian_phone')

    // 身份證號碼
    table.string('id_no')
    // 身份證類型: 永久、非永久、其它
    table.string('id_type')
    // 身份證簽發地點
    table.string('id_issue_location')
    // 教青局編號
    table.string('edu_no')
    // 港澳居民來往內地通行證(回鄉證ID)
    table.string('homecoming_permit_id')
  })
}

exports.down = async (knex) => {

}
