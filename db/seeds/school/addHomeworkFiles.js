const _ = require('lodash')

let count = 0

// 作业ID
const homeworkID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const homework = homeworkID('10000000')
// uuID
const UUID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = UUID('40000000')
// 课程ID
const coursesID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const courses = coursesID('50000000')

// 学生id
const studentID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const student = studentID('00000000')

module.exports = async function (knex, ctx) {
  // 建立資料
  const homeworkFiles = []
  for (var i = 0; i < 50; i++) {
    homeworkFiles.push({
      id: uuid(),
      seq_id: i,
      created_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      modified_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      deleted_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      creator_id: student(),
      homework_id: homework(),
      schooluser_homework_id: student(),
      files_name: '',
      files_type: '',
      files_url: ''
    })
  }

  // 資料庫操作
  await knex('homework_files').insert([
    ...homeworkFiles
  ])

  // 讀取資料
  const docs = await knex.select().table('homework_files')

  // 返回
  ctx.homeworkFiles = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.slug
    })
  }
}
