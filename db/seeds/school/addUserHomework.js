const _ = require('lodash')
// let i = 0

// const generateUUID = (prefix = '00000000') => () => {
//   const suffix = `${++i}`.padStart(12, '0')
//   return `${prefix}-0000-0000-0000-${suffix}`
// }
// const uuid = generateUUID('20000000')
// const random = parseInt(Math.random() * data.length)
module.exports = async function (knex, ctx) {
  const classes = ctx.classes.docs
  const files = [{ a: '1', b: '1' }]
  const filesTest = JSON.stringify(files)

  const addUserHomework = []

  for (var i = 0; i < classes.length; i++) {
    addUserHomework.push({
      seq_id: i,
      created_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      homework_id: 20,
      schooluser_id: 500 + i,
      files: filesTest,
      is_submit: false,
      points: 100,
      evaluation: '评论'
    })
  }
  /*   homework_id: '957',
  schooluser_id: '955',
  files: filesTest,
  created_at: new Date(),
  is_submit: true,
  points: 90,
  evaluation: 'very good' */
  // 資料庫操作

  const data = [...addUserHomework]
  while (data.length) {
    const addUserHomeworkArray = []

    for (let i = 0; i < 500; i++) {
      if (!data.length) break
      const random = parseInt(Math.random() * data.length)
      addUserHomeworkArray.push(...data.splice(random, 1))
    }
    await knex('user_homework').insert([...addUserHomeworkArray])
  }
  const docs = [...addUserHomework]

  // 返回
  ctx.addUserHomework = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.created_at
    })
  }
}
