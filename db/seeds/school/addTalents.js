const _ = require('lodash')

let i = 0

const generateUUID = (prefix = '00000000') => () => {
  const suffix = `${++i}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = generateUUID('12000000')

module.exports = async function (knex, ctx) {
  // 建立資料
  // 需要添加智能的學校 id
  const schoolIds = [
    ctx.schools.obj['school-cdsj1'].id,
    ctx.schools.obj['school-cdsj6'].id,
    ctx.schools.obj['school-fatima'].id,
    ctx.schools.obj['school-madalena'].id
  ]

  // 智能
  const talents = [
    {
      name: '學生會競選演說',
      intelligence_id: ctx.intelligences.obj['語言能力'].id

    },
    {
      name: '喜好吟詩作樂',
      intelligence_id: ctx.intelligences.obj['語言能力'].id
    },
    {
      name: '喜好閱讀',
      intelligence_id: ctx.intelligences.obj['語言能力'].id
    },
    {
      name: '奧林匹克數學競賽',
      intelligence_id: ctx.intelligences.obj['數學邏輯'].id
    },
    {
      name: '物理課實驗表現優秀',
      intelligence_id: ctx.intelligences.obj['數學邏輯'].id
    },
    {
      name: '全國網頁設計比賽獲得銀賞',
      intelligence_id: ctx.intelligences.obj['數學邏輯'].id
    },
    {
      name: '美術課繪畫作品優秀',
      intelligence_id: ctx.intelligences.obj['視覺空間'].id
    },
    {
      name: '工藝課作品優秀',
      intelligence_id: ctx.intelligences.obj['視覺空間'].id
    },
    {
      name: '美術課雕刻作品優秀',
      intelligence_id: ctx.intelligences.obj['視覺空間'].id
    },
    {
      name: '校內足球比賽',
      intelligence_id: ctx.intelligences.obj['肢體動覺'].id
    },
    {
      name: '課後與同學一起打籃球',
      intelligence_id: ctx.intelligences.obj['肢體動覺'].id
    },
    {
      name: '排球校隊',
      intelligence_id: ctx.intelligences.obj['肢體動覺'].id
    },
    {
      name: '校內合唱比賽',
      intelligence_id: ctx.intelligences.obj['音樂旋律'].id
    },
    {
      name: '參與校內熱門音樂社團',
      intelligence_id: ctx.intelligences.obj['音樂旋律'].id
    },
    {
      name: '音樂課表現優秀',
      intelligence_id: ctx.intelligences.obj['音樂旋律'].id
    },
    {
      name: '學生會活動',
      intelligence_id: ctx.intelligences.obj['人際溝通'].id
    },
    {
      name: '關懷弱勢同學，善解人意。',
      intelligence_id: ctx.intelligences.obj['人際溝通'].id
    },
    {
      name: '到幼兒園舉辨唱跳活動',
      intelligence_id: ctx.intelligences.obj['人際溝通'].id
    },
    {
      name: '能夠快速理解錯誤並改正',
      intelligence_id: ctx.intelligences.obj['個人內省'].id
    },
    {
      name: '擅長和班上優秀同學看齊',
      intelligence_id: ctx.intelligences.obj['個人內省'].id
    },
    {
      name: '時間規劃優秀',
      intelligence_id: ctx.intelligences.obj['個人內省'].id
    },
    {
      name: '廚神當道第一名',
      intelligence_id: ctx.intelligences.obj['自然探索'].id
    },
    {
      name: '認養照顧校內花卉',
      intelligence_id: ctx.intelligences.obj['自然探索'].id
    },
    {
      name: '參與學校露營活動',
      intelligence_id: ctx.intelligences.obj['自然探索'].id
    },
    {
      name: '喜好思考哲學性問題',
      intelligence_id: ctx.intelligences.obj['存在思考'].id
    },
    {
      name: '參加社區宗教活動',
      intelligence_id: ctx.intelligences.obj['存在思考'].id
    },
    {
      name: '到長照機構照顧老人',
      intelligence_id: ctx.intelligences.obj['存在思考'].id
    }
  ]

  const data = []
  schoolIds.forEach(schoolid => {
    talents.forEach(talent => {
      data.push({
        id: uuid(),
        ...talent,
        school_id: schoolid
      })
    })
  })

  // 資料庫操作
  await knex('talents').insert([
    ...data
  ])

  // 讀取資料
  const docs = await knex.select().table('talents')

  // 返回
  ctx.talents = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.id
    })
  }
}
