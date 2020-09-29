const _ = require('lodash')

let count = 0
// uuid
const generateUUID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = generateUUID('10000000')
// 班级ID
const clsUUID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const clsuuid = clsUUID('40000000')
// 课程ID
const coursesID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const courses = coursesID('50000000')

// 老师ID
const teacherID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const teacher = teacherID('00000000')

module.exports = async function (knex, ctx) {
  // 建立資料
  const homework = []
  for (var i = 0; i < 50; i++) {
    homework.push({
      id: uuid(),
      seq_id: i,
      created_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      modified_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      deleted_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      school_id: uuid(),
      cls_id: clsuuid(),
      course_id: courses(),
      creator_id: teacher(),
      title: '标题',
      content: '说明',
      issued_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      allow_submit_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      end_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000)))
    })
  }

  // 資料庫操作
  await knex('homework').insert([
    ...homework
  ])

  // 讀取資料
  const docs = await knex.select().table('homework')

  // 返回
  ctx.homework = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.slug
    })
  }
}
