const _ = require('lodash')
const { v4: uuidv4 } = require('uuid')
let i = 0

const generateUUID = (prefix = '00000000') => () => {
  const suffix = `${++i}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = generateUUID('15000000')

const diseasesData = [
  { name: 'G6PD缺乏症(俗稱蠶豆症)' },
  { name: '哮喘' },
  { name: '腦癇病' },
  { name: '高熱引致抽搐' },
  { name: '心臟病' },
  { name: '糖尿病' },
  { name: '腎病' },
  { name: '結核病' },
  { name: '血友病' },
  { name: '貧血' },
  { name: '消化系統疾病' },
  { name: '皮膚疾病' },
  { name: '聽覺障礙' },
  { name: '藥物敏感' },
  { name: '疫苗敏感' },
  { name: '食物敏感' },
  { name: '其他' }
]

module.exports = async function (knex, ctx) {
  // 獲取Fatima 的學生
  const schoolusers = _.filter(ctx.schoolusers.docs, { school_id: ctx.schools.obj['school-fatima'].id, is_student: true })

  // 以管理员作为创建者
  const schoolusersByAdmin = _.filter(ctx.schoolusers.docs, { school_id: ctx.schools.obj['school-fatima'].id, is_admin: true })

  // 建立資料
  const data = []
  // 隨機拿三百個學生用戶
  for (let i = 0; i < 300; i++) {
    const schooluser = schoolusers[parseInt(Math.random() * schoolusers.length)]
    const creator = schoolusersByAdmin[parseInt(Math.random() * schoolusersByAdmin.length)]
    const diseaseName = diseasesData[parseInt(Math.random() * diseasesData.length)].name

    // 如果其中一個不為空，就不要這個數據
    if (!!schooluser.archived_at || !!schooluser.archived_reason) continue

    const birthAt = ctx.students.obj[schooluser.id].birth_at

    let birthYear = 0
    let currentYear = 0
    if (birthAt) {
      birthYear = new Date(birthAt).getFullYear()
      currentYear = new Date().getFullYear()
    }

    data.push({
      id: uuid(),
      created_at: new Date(),
      creator_id: creator.id,
      schooluser_id: schooluser.id,
      emergency_phones: [],
      diseases: [{ id: uuidv4(), name: diseaseName, age: currentYear - birthYear, time: new Date(), frequency: '', drugName: '', approach: '', remarks: '' }],
      reason: '',
      school_id: schooluser.school_id,
      school_dashboard_id: ctx.schoolsDashboards.obj['fatima 2019/2020 Dashboard'].id
    })
  }
  // 資料庫操作
  await knex('special_health_conditions').insert([
    ...data
  ])

  // 讀取資料
  const docs = await knex.select().table('special_health_conditions')

  // 返回
  ctx.specialHealthConditions = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.id
    })
  }
}
