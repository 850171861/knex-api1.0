const _ = require('lodash')
module.exports = async function (knex, ctx) {
  const files = { a: '1', b: '1' }
  const filesTest = JSON.stringify(files)
  const addHomework = [{
    title: '高二3班(美術)',
    end_at: new Date(new Date().getTime() - 2 * 60 * 60 * 1000),
    work_content: '關於本次作畫的內容：XXXXXXXXXXXXXXXXXXXXXX',
    fraction: 100,
    created_at: new Date(),
    cls_id: 9527,
    schooluser_id: 888,
    files: filesTest
  }]

  // 資料庫操作
  await knex('homework').insert([...addHomework])

  // 讀取資料
  const docs = await knex.select().table('homework')

  // 返回
  ctx.addHomework = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.seq_id
    })
  }
}
