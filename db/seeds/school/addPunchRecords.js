const _ = require('lodash')

let i = 0

const generateUUID = (prefix = '00000000') => () => {
  const suffix = `${++i}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = generateUUID('20000000')

module.exports = async function (knex, ctx) {
  const punchRecords = [
  ]

  for (var i = 1; i < 51; i++) {
    punchRecords.push(
      {
        id: uuid(),
        created_at: new Date(),
        school_id: ctx.schools.obj['school-region'].id,
        schooluser_id: ctx.schoolusers.obj[`student${i}`].id,
        card_no: ctx.schoolusers.obj[`student${i}`].card_no,
        punch_in_at: new Date('2020-09-02 08:30'),
        punch_out_at: new Date('2020-09-02 12:15'),
        attendance_date: '2020-09-02',
        absenteeisms: 0,
        lates: 0,
        section: 1,
        official_leaves: 0,
        absences: 0
      },
      {
        id: uuid(),
        created_at: new Date(),
        school_id: ctx.schools.obj['school-region'].id,
        schooluser_id: ctx.schoolusers.obj[`student${i}`].id,
        card_no: ctx.schoolusers.obj[`student${i}`].card_no,
        punch_in_at: new Date('2020-09-02 13:30'),
        punch_out_at: new Date('2020-09-02 18:30'),
        attendance_date: '2020-09-02',
        absenteeisms: 0,
        lates: 0,
        section: 2,
        official_leaves: 0,
        absences: 0
      }
    )
  }

  // 資料庫操作
  await knex('punch_records').insert([
    ...punchRecords
  ])

  // 讀取資料
  const docs = await knex.select().table('punch_records')

  // 返回
  ctx.punchRecords = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.id
    })
  }
}
