const _ = require('lodash')
let i = 0

const generateUUID = (prefix = '00000000') => () => {
  const suffix = `${++i}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = generateUUID('14000000')

const symptomsData = [
  { name: '頭痛', englishName: 'headache' },
  { name: '頭暈', englishName: 'dizziness' },
  { name: '發燒', englishName: 'fever' },
  { name: '嘔吐', englishName: 'vomiting' },
  { name: '腹痛', englishName: 'abdominal pain' },
  { name: '腹瀉', englishName: 'diarrhea' },
  { name: '咳嗽', englishName: 'cough' },
  { name: '流涕', englishName: 'runny nose' },
  { name: '咽痛', englishName: 'sore throat' },
  { name: '經痛', englishName: 'cramps' },
  { name: '外傷', englishName: 'trauma' },
  { name: '挫傷', englishName: 'contusion' },
  { name: '其它', englishName: 'others' }
]

module.exports = async function (knex, ctx) {
  // 獲取Fatima 的學生
  const schoolusers = _.filter(ctx.schoolusers.docs, { school_id: ctx.schools.obj['school-fatima'].id, is_student: true })

  const schoolDashboards = ctx.schoolsDashboards
  // 以管理员作为创建者
  const schoolusersByAdmin = _.filter(ctx.schoolusers.docs, { school_id: ctx.schools.obj['school-fatima'].id, is_admin: true })

  const data = []
  // 隨機拿三百個學生用戶
  for (let i = 0; i < 300; i++) {
    const schooluser = schoolusers[parseInt(Math.random() * schoolusers.length)]
    const creator = schoolusersByAdmin[parseInt(Math.random() * schoolusersByAdmin.length)]
    // 如果其中一個不為空，就不要這個數據
    if (!!schooluser.archived_at || !!schooluser.archived_reason) continue

    let symptom = ['others']

    let j = 0
    while (!j) {
      symptom = symptomsData[parseInt(Math.random() * symptomsData.length)].englishName
      // 如果是男生沒有 cramps
      if (schooluser.gender === 'M' && symptom === 'cramps') continue
      j++
    }

    const currentTiem = new Date()

    data.push({
      id: uuid(),
      created_at: new Date(),
      creator_id: creator.id,
      schooluser_id: schooluser.id,
      remark: '',
      school_id: schoolDashboards.obj['fatima 2020/2021 Dashboard'].school_id,
      school_dashboard_id: schoolDashboards.obj['fatima 2020/2021 Dashboard'].id,
      symptom,
      admission_at: new Date(),
      discharge_at: new Date(currentTiem.setMinutes(currentTiem.getMinutes() + (parseInt(Math.random() * 10) || 1))),
      treatment: ''
    })
  }

  await knex('medical_records').insert([
    ...data
  ])

  // 讀取資料
  const docs = await knex.select().table('medical_records')

  ctx.medicalRecords = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.id
    })
  }
}
