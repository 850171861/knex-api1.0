const _ = require('lodash')

let count = 0
// uuid
const generateUUID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = generateUUID('10000000')

// schoolid
const schoolID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const school = schoolID('11000000')

// 班级ID
const clsUUID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const clsuuid = clsUUID('40000000')

// 学年ID
const yearID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}

const year = yearID('51000000')

module.exports = async function (knex, ctx) {
  // 建立資料
  const classes = []
  for (var i = 0; i < 50; i++) {
    classes.push({
      id: uuid(),
      created_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      modified_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      deleted_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      name: '名字' + i,
      school_id: school(),
      cls_id: clsuuid(),
      school_dashboard_id: year()
    })
  }

  // 資料庫操作
  await knex('classes').insert([
    ...classes
  ])

  // 讀取資料
  const docs = await knex.select().table('classes')

  // 返回
  ctx.classes = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.slug
    })
  }
}
