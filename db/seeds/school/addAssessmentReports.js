const _ = require('lodash')

let i = 0

const generateUUID = (prefix = '00000000') => () => {
  const suffix = `${++i}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = generateUUID('90000000')

module.exports = async function (knex, ctx) {
  // 建立資料

  const k1aStudents = _.filter(ctx.schooluserClasses.docs, {
    is_student: true,
    cls_id: ctx.classes.obj['19-k1a'].id
  })
  const k1bStudents = _.filter(ctx.schooluserClasses.docs, {
    is_student: true,
    cls_id: ctx.classes.obj['19-k1b'].id
  })
  const k1cStudents = _.filter(ctx.schooluserClasses.docs, {
    is_student: true,
    cls_id: ctx.classes.obj['19-k1c'].id
  })

  const k2aStudents = _.filter(ctx.schooluserClasses.docs, {
    is_student: true,
    cls_id: ctx.classes.obj['19-k2a'].id
  })
  const k2bStudents = _.filter(ctx.schooluserClasses.docs, {
    is_student: true,
    cls_id: ctx.classes.obj['19-k2b'].id
  })
  const k2cStudents = _.filter(ctx.schooluserClasses.docs, {
    is_student: true,
    cls_id: ctx.classes.obj['19-k2c'].id
  })

  const k3aStudents = _.filter(ctx.schooluserClasses.docs, {
    is_student: true,
    cls_id: ctx.classes.obj['19-k3a'].id
  })
  const k3bStudents = _.filter(ctx.schooluserClasses.docs, {
    is_student: true,
    cls_id: ctx.classes.obj['19-k3b'].id
  })
  const k3cStudents = _.filter(ctx.schooluserClasses.docs, {
    is_student: true,
    cls_id: ctx.classes.obj['19-k3c'].id
  })
  const k3dStudents = _.filter(ctx.schooluserClasses.docs, {
    is_student: true,
    cls_id: ctx.classes.obj['19-k3d'].id
  })

  const assessmentReports = [
    {
      id: uuid(),
      name: '2019-2020年度第一學段《幼兒基本學力要求》評估表(幼高班)',
      title: '聖若瑟教區中學第一校幼稚園(中文部)',
      subtitle: '(幼高班)',
      // school_dashboard_id: ctx.schoolsDashboards.obj['2019/2020 Dashboard'].id,
      // term: 1,
      school_id: ctx.schools.obj['school-cdsj1'].id,
      assessment_template_id: ctx.assessmentTemplates.obj['《幼兒基本學力要求》評估表格式(幼高班)'].id,
      submission_start_date: new Date(2020, 3, 1, 0, 0),
      submission_end_date: new Date(2020, 6, 30, 23, 59),
      date_of_issue: new Date(2020, 8, 1, 23, 59),
      is_english: false,
      cls_ids: [
        ctx.classes.obj['19-k3a'].id,
        ctx.classes.obj['19-k3b'].id,
        ctx.classes.obj['19-k3c'].id,
        ctx.classes.obj['19-k3d'].id
      ],
      schooluser_ids: [
        ...k3aStudents.map(doc => doc.schooluser_id),
        ...k3bStudents.map(doc => doc.schooluser_id),
        ...k3cStudents.map(doc => doc.schooluser_id),
        ...k3dStudents.map(doc => doc.schooluser_id)
      ],
      school_dashboard_id: ctx.schoolsDashboards.obj['cdsj1 2019/2020 Dashboard'].id
      // user_options: {}
    },

    {
      id: uuid(),
      name: '2019-2020年度第一學段《幼兒基本學力要求》評估表(幼低班)',
      title: '聖若瑟教區中學第一校幼稚園(中文部)',
      subtitle: '(幼低班)',
      // school_dashboard_id: ctx.schoolsDashboards.obj['2019/2020 Dashboard'].id,
      // term: 1,
      school_id: ctx.schools.obj['school-cdsj1'].id,
      assessment_template_id: ctx.assessmentTemplates.obj['《幼兒基本學力要求》評估表格式(幼低班)'].id,
      submission_start_date: new Date(2020, 3, 1, 0, 0),
      submission_end_date: new Date(2020, 6, 30, 23, 59),
      date_of_issue: new Date(2020, 8, 1, 23, 59),
      is_english: false,
      cls_ids: [
        ctx.classes.obj['19-k2a'].id,
        ctx.classes.obj['19-k2b'].id,
        ctx.classes.obj['19-k2c'].id
      ],
      schooluser_ids: [
        ...k2aStudents.map(doc => doc.schooluser_id),
        ...k2bStudents.map(doc => doc.schooluser_id),
        ...k2cStudents.map(doc => doc.schooluser_id)
      ],
      school_dashboard_id: ctx.schoolsDashboards.obj['cdsj1 2019/2020 Dashboard'].id
      // user_options: {}
    },

    {
      id: uuid(),
      name: '2019-2020年度第一學段《幼兒基本學力要求》評估表(幼兒班)',
      title: '聖若瑟教區中學第一校幼稚園(中文部)',
      subtitle: '(幼兒班)',
      // school_dashboard_id: ctx.schoolsDashboards.obj['2019/2020 Dashboard'].id,
      // term: 1,
      school_id: ctx.schools.obj['school-cdsj1'].id,
      assessment_template_id: ctx.assessmentTemplates.obj['《幼兒基本學力要求》評估表格式(幼兒班)'].id,
      submission_start_date: new Date(2020, 3, 1, 0, 0),
      submission_end_date: new Date(2020, 6, 30, 23, 59),
      date_of_issue: new Date(2020, 8, 1, 23, 59),
      is_english: false,
      cls_ids: [
        ctx.classes.obj['19-k1a'].id,
        ctx.classes.obj['19-k1b'].id,
        ctx.classes.obj['19-k1c'].id
      ],
      schooluser_ids: [
        ...k1aStudents.map(doc => doc.schooluser_id),
        ...k1bStudents.map(doc => doc.schooluser_id),
        ...k1cStudents.map(doc => doc.schooluser_id)
      ],
      school_dashboard_id: ctx.schoolsDashboards.obj['cdsj1 2019/2020 Dashboard'].id
      // user_options: {}
    }
  ]

  // 資料庫操作
  await knex('assessment_reports').insert([
    ...assessmentReports
  ])

  // 讀取資料
  const docs = await knex.select().table('assessment_reports')

  // 返回
  ctx.assessmentReports = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.name
    })
  }
}
