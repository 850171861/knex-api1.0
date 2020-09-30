const _ = require('lodash')

let count = 0
// uuid
const generateUUID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = generateUUID('11000000')

module.exports = async function (knex, ctx) {
  // 建立資料
  const schools = []
  for (var i = 0; i < 5; i++) {
    schools.push({
      id: uuid(),
      created_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      modified_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      deleted_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      name: '名字' + i
    })
  }

  // 資料庫操作
  await knex('schools').insert([
    ...schools
  ])

  // 讀取資料
  const docs = await knex.select().table('schools')

  // 返回
  ctx.schools = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.slug
    })
  }
}
