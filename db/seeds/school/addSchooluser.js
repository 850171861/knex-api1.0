const _ = require('lodash')

let count = 0
// uuid
const generateUUID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = generateUUID('11000000')

// 用户id
const userID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const user = userID('17000000')

// schoolid
const schoolID = (prefix = '00000000') => () => {
  const suffix = `${++count}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const school = schoolID('11000000')

module.exports = async function (knex, ctx) {
  // 建立資料
  const schooluser = []
  for (var i = 0; i < 50; i++) {
    schooluser.push({
      id: uuid(),
      created_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      modified_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      deleted_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      name: '名字' + i,
      email: '569652929@163.com',
      user_id: user(),
      school_id: school(),
      is_student: true,
      is_teacher: false,
      Leave_school_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000)))
    })
  }

  // 資料庫操作
  await knex('schooluser').insert([
    ...schooluser
  ])

  // 讀取資料
  const docs = await knex.select().table('schooluser')

  // 返回
  ctx.schooluser = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.slug
    })
  }
}
