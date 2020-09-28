const _ = require('lodash')
module.exports = async function (knex, ctx) {
  const classes = ctx.classes.docs
  const files = [{ a: '1', b: '1' }]
  const filesTest = JSON.stringify(files)

  const addHomework = []/*  [{

  }] */
  for (var i = 0; i < classes.length; i++) {
    addHomework.push({
      created_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      title: '高二3班',
      end_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      work_content: '關於本次作畫的內容：XXXXXXXXXXXXXXXXXXXXXX',
      fraction: 100,
      cls_id: classes[i].seq_id,
      schooluser_id: 500 + i,
      files: filesTest
    })
  }
  const data = [...addHomework]

  // 資料庫操作
  await knex('homework').insert([...addHomework])
  while (data.length) {
    const addHomeworkArray = []

    for (let i = 0; i < 500; i++) {
      if (!data.length) break
      const random = parseInt(Math.random() * data.length)
      addHomeworkArray.push(...data.splice(random, 1))
    }
    await knex('homework').insert([...addHomeworkArray])
  }
  const docs = [...addHomework]

  // 返回
  ctx.addHomework = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.seq_id
    })
  }
}
