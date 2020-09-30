const _ = require('lodash')

let count = 0
// uuid
const generateUUID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = generateUUID('11000000')

// 用户id
const userID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const user = userID('17000000')

// 班级ID
/* const clsUUID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const clsuuid = clsUUID('40000000') */

module.exports = async function (knex, ctx) {
  // 建立資料
  const schooluserClasses = []
  for (var i = 0; i < 50; i++) {
    schooluserClasses.push({
      id: uuid(),
      created_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      modified_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      deleted_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      cls_id: '40000000-0000-0000-0000-000000000003',
      schooluser_id: user(),
      is_student: false,
      is_teacher: false
    })
  }

  // 資料庫操作
  await knex('schooluser_classes').insert([
    ...schooluserClasses
  ])

  // 讀取資料
  const docs = await knex.select().table('schooluser_classes')

  // 返回
  ctx.schooluserClasses = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.slug
    })
  }
}
