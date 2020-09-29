const _ = require('lodash')

let i = 0

const generateUUID = (prefix = '00000000') => () => {
  const suffix = `${++i}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = generateUUID('16000000')

module.exports = async function (knex, ctx) {
  // 獲取Fatima 的學生
  const schoolusers = _.filter(ctx.schoolusers.docs, { school_id: ctx.schools.obj['school-fatima'].id, is_student: true })
  const schoolDashboards = ctx.schoolsDashboards

  // 以管理员作为创建者
  const schoolusersByAdmin = _.filter(ctx.schoolusers.docs, { school_id: ctx.schools.obj['school-fatima'].id, is_admin: true })

  // 隨機拿三百個學生用戶
  const data = []
  for (let i = 0; i < 300; i++) {
    const schooluser = schoolusers[parseInt(Math.random() * schoolusers.length)]
    const creator = schoolusersByAdmin[parseInt(Math.random() * schoolusersByAdmin.length)]

    // 如果其中一個不為空，就不要這個數據
    if (!!schooluser.archived_at || !!schooluser.archived_reason) continue

    const currentTiem = new Date()

    data.push({
      id: uuid(),
      created_at: new Date(),
      start_at: new Date(currentTiem.setMonth(currentTiem.getMonth() + (parseInt(Math.random() * 3) || 1))),
      end_at: new Date(currentTiem.setMonth(currentTiem.getMonth() + (parseInt(Math.random() * 5) || 3))),
      creator_id: creator.id,
      schooluser_id: schooluser.id,
      reason: '',
      school_id: schoolDashboards.obj['fatima 2020/2021 Dashboard'].school_id,
      school_dashboard_id: schoolDashboards.obj['fatima 2020/2021 Dashboard'].id
    })
  }

  // 資料庫操作
  await knex('preventives_isolation').insert([
    ...data
  ])

  // 讀取資料
  const docs = await knex.select().table('preventives_isolation')

  // 返回
  ctx.preventivesIsolation = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.id
    })
  }
}
