const _ = require('lodash')
// let i = 0

// const generateUUID = (prefix = '00000000') => () => {
//   const suffix = `${++i}`.padStart(12, '0')
//   return `${prefix}-0000-0000-0000-${suffix}`
// }
// const uuid = generateUUID('20000000')
// const random = parseInt(Math.random() * data.length)
module.exports = async function (knex, ctx) {
  const files = { a: '1', b: '1' }
  const filesTest = JSON.stringify(files)
  const addUserHomework = [{
    homework_id: '957',
    schooluser_id:'955',
    files:filesTest,
    created_at: new Date(),
    is_submit:true,
    points:90,
    evaluation:'very good'
  }]

  // 資料庫操作
  await knex('user_homework').insert([...addUserHomework])

  // 讀取資料
  const docs = await knex.select().table('user_homework')

  // 返回
  ctx.addUserHomework = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.seq_id
    })
  }
}
