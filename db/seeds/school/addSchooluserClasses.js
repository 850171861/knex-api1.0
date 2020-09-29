const _ = require('lodash')
const { generateCDSJ1SchooluserClasses } = require('../data/cdsj1/cdsj1SchooluserClasses')
const { generateCDSJ6SchooluserClasses } = require('../data/cdsj6/cdsj6SchooluserClasses')
const { generateFatimaSchooluserClasses } = require('../data/fatima/fatimaSchooluserClasses')
const { generateMadalenaSchooluserClasses } = require('../data/madalena/madalenaSchooluserClasses')
const { generateRegionSchooluserClasses } = require('../data/region/regionSchooluserClasses')
let i = 0
const generateUUID = (prefix = '00000000') => () => {
  const suffix = `${++i}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = generateUUID('60000000')

module.exports = async function (knex, ctx) {
  // 建立資料
  const schooluserClasses = []

  // 聖若瑟教區中學第一校的班級成員
  schooluserClasses.push(
    ...generateCDSJ1SchooluserClasses(uuid, ctx)
  )

  // 聖若瑟教區中學第六校的班級成員
  schooluserClasses.push(
    ...generateCDSJ6SchooluserClasses(uuid, ctx)
  )

  // 化地瑪聖母女子學校的班級成員
  schooluserClasses.push(
    ...generateFatimaSchooluserClasses(uuid, ctx)
  )

  // 聖瑪大肋納學校的班級成員
  schooluserClasses.push(
    ...generateMadalenaSchooluserClasses(uuid, ctx)
  )

  // 地域中學的班級成員
  schooluserClasses.push(
    ...generateRegionSchooluserClasses(uuid, ctx)
  )

  // 資料庫操作
  const data = [...schooluserClasses]
  while (data.length) {
    console.log('add schooluser classes data.length', data.length)

    const dataSplice = data.splice(0, 500)
    await knex('schoolusers_classes').insert([...dataSplice])
  }

  // 讀取資料
  const docs = [...schooluserClasses]

  // await knex('schoolusers_classes').insert([
  //   ...schooluserClasses
  // ])

  // const docs = await knex.select().table('schoolusers_classes')

  // 返回
  ctx.schooluserClasses = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.id
    })
  }
}
