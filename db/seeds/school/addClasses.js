const _ = require('lodash')
const { generateCDSJ1Classes } = require('../data/cdsj1/cdsj1Classes')
const { generateCDSJ6Classes } = require('../data/cdsj6/cdsj6Classes')
const { generateFatimaClasses } = require('../data/fatima/fatimaClasses')
const { generateMadalenaClasses } = require('../data/madalena/madalenaClasses')

const { generateRegionClasses } = require('../data/region/regionClasses')
let i = 0
const generateUUID = (prefix = '00000000') => () => {
  const suffix = `${++i}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = generateUUID('40000000')

module.exports = async function (knex, ctx) {
  // 建立資料
  const classes = []

  // 聖若瑟教區中學第一校班級
  classes.push(
    ...generateCDSJ1Classes(uuid, ctx)
  )

  // 聖若瑟教區中學第六校班級
  classes.push(
    ...generateCDSJ6Classes(uuid, ctx)
  )

  // 化地瑪聖母女子學校班級
  classes.push(
    ...generateFatimaClasses(uuid, ctx)
  )

  // 聖瑪大肋納學校班級
  classes.push(
    ...generateMadalenaClasses(uuid, ctx)
  )

  // 地域中學班級
  classes.push(
    ...generateRegionClasses(uuid, ctx)
  )

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
