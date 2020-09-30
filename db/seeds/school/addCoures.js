const _ = require('lodash')

let count = 0
// uuid
const generateUUID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
// 学校id
const schoolID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const school = schoolID('11000000')

const uuid = generateUUID('10000000')
// 班级ID
const clsUUID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const cls = clsUUID('40000000')
// 课程ID
const coursesID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const courses = coursesID('50000000')

module.exports = async function (knex, ctx) {
  // 建立資料
  const courses = []
  for (var i = 0; i < 50; i++) {
    courses.push({
      id: uuid(),
      created_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      modified_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      deleted_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      name: '课程名称' + i,
      year: '学年',
      school_id: school(),
      cls_id: cls()
    })
  }

  // 資料庫操作
  await knex('courses').insert([
    ...courses
  ])

  // 讀取資料
  const docs = await knex.select().table('courses')

  // 返回
  ctx.courses = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.slug
    })
  }
}
