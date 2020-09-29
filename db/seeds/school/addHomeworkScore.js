const _ = require('lodash')

let count = 0
// 作业id
const homeworkID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const homework = homeworkID('10000000')
// 学生id
const studentID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const student = studentID('00000000')

// uuid
const uuID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = uuID('10000000')
module.exports = async function (knex, ctx) {
  // 建立資料
  const homeworkScore = []
  for (var i = 0; i < 50; i++) {
    homeworkScore.push({
      id: uuid(),
      seq_id: i,
      created_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      modified_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      deleted_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      fraction: 100,
      schooluser_id: student(),
      homework_id: homework(),
      remark: ''
    })
  }

  // 資料庫操作
  await knex('homework_score').insert([
    ...homeworkScore
  ])

  // 讀取資料
  const docs = await knex.select().table('homework_score')

  // 返回
  ctx.homeworkScore = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.slug
    })
  }
}
