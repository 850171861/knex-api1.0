const _ = require('lodash')

let i = 0

const generateUUID = (prefix = '00000000') => () => {
  const suffix = `${++i}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = generateUUID('30000000')

module.exports = async function (knex, ctx) {
  // 建立資料
  const dashboards = []

  // **學校 slug**
  const schoolsSlug = ['cdsj1', 'cdsj6', 'fatima', 'madalena', 'region']
  const dashboardsArray = [
    '2015/2016 Dashboard',
    '2016/2017 Dashboard',
    '2017/2018 Dashboard',
    '2018/2019 Dashboard',
    '2019/2020 Dashboard',
    '2020/2021 Dashboard'
  ]

  // 給學校添加學年信息
  schoolsSlug.forEach(slug => {
    dashboardsArray.forEach((dashboard, index) => {
      dashboards.push({
        id: uuid(),
        created_at: new Date(),
        name: `${slug} ${dashboard}`,
        school_id: ctx.schools.obj[`school-${slug}`].id,
        is_default: (index === dashboardsArray.length - 1)
      })
    })
  })

  // 資料庫操作
  await knex('schools_dashboards').insert([
    ...dashboards
  ])

  // 讀取資料
  const docs = await knex.select().table('schools_dashboards')

  // 返回
  ctx.schoolsDashboards = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.name
    })
  }
}
