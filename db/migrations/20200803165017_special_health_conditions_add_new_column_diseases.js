exports.up = async (knex) => {
  return knex.schema.table('special_health_conditions', function (table) {
    // 存儲多個緊急聯絡電話
    table.specificType('emergency_phones', 'text[]')
    // 疾病，用json，如：[{ name: '哮喘', age: '22', time: new Date(), frequency: '', drugName: '', approach: '', Remarks: '' }]
    table.specificType('diseases', 'text[]')
    // 不適宜參加學校活動的原因
    table.string('reason')
  })
}

exports.down = async (knex) => {

}
