exports.up = async (knex) => {
  return knex.schema.table('courses', table => {
    // 英文名稱
    table.string('english_name')
    // 課程代號
    table.string('code')
    // 課程單位數 / 學分
    table.integer('unit')
    // 學期數
    table.integer('semesters')
  })
}

exports.down = async (knex) => {

}
