const _ = require('lodash')
const { generateFatimaStudents } = require('../data/fatima/fatimaStudents')

let i = 0
const generateUUID = (prefix = '00000000') => () => {
  const suffix = `${++i}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = generateUUID('13000000')

module.exports = async function (knex, ctx) {
  // **Fatima**
  const students = []
  students.push(
    ...generateFatimaStudents(uuid, ctx).map(doc => _.omit(doc, ['cls', 'card_no', 'profile_photo', 'student_no', 'username', 'courses', 'num', 'face_id', 'image_id']))
  )

  // 資料庫操作
  const data = [...students]
  while (data.length) {
    console.log('add students data.length', data.length)

    const dataSplice = data.splice(0, 500)
    await knex('students').insert([...dataSplice])
  }

  // 讀取資料
  const docs = [...students]

  ctx.students = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.schooluser_id
    })
  }
}
