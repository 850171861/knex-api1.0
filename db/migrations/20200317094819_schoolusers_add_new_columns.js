
exports.up = async (knex) => {
  await knex.schema.table('schoolusers', function (table) {
    table.string('english_name')
    table.string('password')
    table.string('gender')
    table.string('sms')

    // 學生證號碼
    table.string('student_no')
    // 身份證號碼
    table.string('id_no')
    // 教青局教師證/學生證編號，Education and Youth Affairs Bureau id
    table.string('edu_no')
    // 拍卡卡號
    table.string('card_no')
  })
}

exports.down = async (knex) => {

}
