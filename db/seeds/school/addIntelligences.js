const _ = require('lodash')

let i = 0

const generateUUID = (prefix = '00000000') => () => {
  const suffix = `${++i}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = generateUUID('13000000')

module.exports = async function (knex, ctx) {
  // 建立資料
  const schoolIds = [
    ctx.schools.obj['school-cdsj6'].id,
    ctx.schools.obj['school-fatima'].id,
    ctx.schools.obj['school-madalena'].id
  ]

  const intelligences = [
    {
      name: '個人內省',
      english_name: 'intra-personal'
    },
    {
      name: '視覺空間',
      english_name: 'spatial'
    },
    {
      name: '數學邏輯',
      english_name: 'logical-mathematical'
    },
    {
      name: '自然探索',
      english_name: 'naturalist'
    },
    {
      name: '人際溝通',
      english_name: 'interpersonal'
    },
    {
      name: '語言能力',
      english_name: 'linguistic'
    },
    {
      name: '肢體動覺',
      english_name: 'bodily-kinesthetic'
    },
    {
      name: '音樂旋律',
      english_name: 'musical'
    },
    {
      name: '存在思考',
      english_name: 'existential'
    }
  ]

  const data = []
  schoolIds.forEach(schoolid => {
    intelligences.forEach(intelligence => {
      data.push({
        id: uuid(),
        ...intelligence,
        school_id: schoolid
      })
    })
  })

  // 資料庫操作
  await knex('intelligences').insert([
    ...data
  ])

  // 讀取資料
  const docs = await knex.select().table('intelligences')

  // 返回
  ctx.intelligences = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.name
    })
  }
}
