const _ = require('lodash')

let count = 0
// 作业id
const generateUUID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = generateUUID('10000000')
// 班级ID
const homeworkID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const homework = homeworkID('40000000')
// 课程ID
const coursesID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const courses = coursesID('50000000')

// 学生ID
const studentID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const student = studentID('00000000')

module.exports = async function (knex, ctx) {
  // 建立資料
  const schooluserHomework = []
  for (var i = 0; i < 50; i++) {
    schooluserHomework.push({
      id: uuid(),
      seq_id: i,
      created_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      modified_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      deleted_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      homework_id: homework(),
      remark: '',
      submit_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      schooluser_id: student()
    })
  }

  // 資料庫操作
  await knex('schooluser_homework').insert([
    ...schooluserHomework
  ])

  // 讀取資料
  const docs = await knex.select().table('schooluser_homework')

  // 返回
  ctx.schooluserHomework = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.slug
    })
  }
}
