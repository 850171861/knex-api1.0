const _ = require('lodash')
const { cdsj1StudentsSchoolusers } = require('./cdsj1Students')
const { cdsj1TeachersSchoolusers } = require('./cdsj1Teachers')

const schooluserClasses = []

const generateCDSJ1SchooluserClasses = (uuid, ctx) => {
  // **獲取 cdsj1 年级**
  const cdsj1Classes = _.filter(ctx.classes.docs, doc => doc.school_id === ctx.schools.obj['school-cdsj1'].id)
  cdsj1Classes.forEach(cls => {
    schooluserClasses.push(
      {
        id: uuid(),
        schooluser_id: ctx.schoolusers.obj.joseph.id,
        cls_id: cls.id,
        // num: 0,
        is_student: false,
        is_cls_teacher: true,
        is_teacher: true,
        created_at: new Date(),
        school_dashboard_id: ctx.schoolsDashboards.obj['cdsj1 2019/2020 Dashboard'].id,
        school_id: ctx.schools.obj['school-cdsj1'].id
      },
      {
        id: uuid(),
        schooluser_id: ctx.schoolusers.obj.comus.id,
        cls_id: cls.id,
        // num: 0,
        is_student: false,
        is_cls_teacher: true,
        is_teacher: true,
        created_at: new Date(),
        school_dashboard_id: ctx.schoolsDashboards.obj['cdsj1 2019/2020 Dashboard'].id,
        school_id: ctx.schools.obj['school-cdsj1'].id
      },
      {
        id: uuid(),
        schooluser_id: ctx.schoolusers.obj.rainwildest.id,
        cls_id: cls.id,
        // num: 0,
        is_student: false,
        is_cls_teacher: true,
        is_teacher: true,
        created_at: new Date(),
        school_dashboard_id: ctx.schoolsDashboards.obj['cdsj1 2019/2020 Dashboard'].id,
        school_id: ctx.schools.obj['school-cdsj1'].id
      },
      {
        id: uuid(),
        schooluser_id: ctx.schoolusers.obj.kevin.id,
        cls_id: cls.id,
        // num: 0,
        is_student: false,
        is_cls_teacher: true,
        is_teacher: true,
        created_at: new Date(),
        school_dashboard_id: ctx.schoolsDashboards.obj['cdsj1 2019/2020 Dashboard'].id,
        school_id: ctx.schools.obj['school-cdsj1'].id
      }
    )

    // **cdsj1 每一班塞學生**
    const studentsCDSJ = _.filter(cdsj1StudentsSchoolusers, doc => doc.cls === cls.slug)
    for (let clsIndex = 0; clsIndex < studentsCDSJ.length; ++clsIndex) {
      schooluserClasses.push({
        id: uuid(),
        schooluser_id: studentsCDSJ[clsIndex].id,
        cls_id: cls.id,
        num: studentsCDSJ[clsIndex].num,
        is_student: true,
        is_cls_teacher: false,
        is_teacher: false,
        created_at: new Date(),
        school_dashboard_id: ctx.schoolsDashboards.obj['cdsj1 2019/2020 Dashboard'].id,
        school_id: ctx.schools.obj['school-cdsj1'].id
      })
    }

    // cdsj1 每一班塞老師
    const teacherCDSJ = _.filter(cdsj1TeachersSchoolusers, doc => doc.cls === cls.slug)
    for (let tclsIndex = 0; tclsIndex < teacherCDSJ.length; ++tclsIndex) {
      schooluserClasses.push({
        id: uuid(),
        schooluser_id: teacherCDSJ[tclsIndex].id,
        cls_id: cls.id,
        is_student: false,
        is_cls_teacher: true,
        is_teacher: true,
        created_at: new Date(),
        school_dashboard_id: ctx.schoolsDashboards.obj['cdsj1 2019/2020 Dashboard'].id,
        school_id: ctx.schools.obj['school-cdsj1'].id
      })
    }
  })

  return schooluserClasses
}

module.exports = {
  schooluserClasses,
  generateCDSJ1SchooluserClasses
}
