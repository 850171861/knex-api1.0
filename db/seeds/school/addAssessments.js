const _ = require('lodash')

let i = 0

const generateUUID = (prefix = '00000000') => () => {
  const suffix = `${++i}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = generateUUID('11000000')

module.exports = async function (knex, ctx) {
  // 建立資料

  const k3aStudents = _.filter(ctx.schooluserClasses.docs, {
    is_student: true,
    cls_id: ctx.classes.obj['19-k3a'].id
  })

  const assessments = []

  k3aStudents.forEach(k3aStudent => {
    const studentData = _.find(ctx.schoolusers.docs, {
      id: k3aStudent.schooluser_id
    })
    assessments.push({
      id: uuid(),
      schooluser_id: k3aStudent.schooluser_id,
      // schooluser_name: studentData.name,
      // cls_name: '幼高甲',
      // schooluser_cls_num: k3aStudent.num,
      assessment_report_id: ctx.assessmentReports.obj['2019-2020年度第一學段《幼兒基本學力要求》評估表(幼高班)'].id,
      data: {},
      cls_id: k3aStudent.cls_id,
      school_id: ctx.schools.obj['school-cdsj1'].id,
      school_dashboard_id: ctx.schoolsDashboards.obj['cdsj1 2019/2020 Dashboard'].id
    })
  })

  // 資料庫操作
  await knex('assessments').insert([
    ...assessments
  ])

  // 讀取資料
  const docs = await knex.select().table('assessments')

  // 返回
  ctx.assessments = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.id
    })
  }
}
