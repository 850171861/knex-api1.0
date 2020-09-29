const _ = require('lodash')
const { regionStudentsSchoolusers } = require('./regionStudents')
const { regionTeachersSchoolusers } = require('./regionTeachers')

const schooluserClasses = []

const generateRegionSchooluserClasses = (uuid, ctx) => {
  // **region 年级**
  const madalenaClasses = _.filter(ctx.classes.docs, doc => doc.school_id === ctx.schools.obj['school-region'].id)
  madalenaClasses.forEach(cls => {
    // **region 每一班塞學生**
    const studentsMadalena = _.filter(regionStudentsSchoolusers, doc => doc.cls === cls.slug)
    for (let clsIndex = 0; clsIndex < studentsMadalena.length; ++clsIndex) {
      schooluserClasses.push({
        id: uuid(),
        schooluser_id: studentsMadalena[clsIndex].id,
        cls_id: cls.id,
        num: studentsMadalena[clsIndex].num,
        is_student: true,
        is_cls_teacher: false,
        is_teacher: false,
        created_at: new Date(),
        school_dashboard_id: ctx.schoolsDashboards.obj['region 2020/2021 Dashboard'].id,
        school_id: ctx.schools.obj['school-region'].id
      })
    }

    // **region 每一班塞老師**
    const teacherMadalena = _.filter(regionTeachersSchoolusers, doc => doc.cls === cls.slug)
    for (let tclsIndex = 0; tclsIndex < teacherMadalena.length; ++tclsIndex) {
      schooluserClasses.push({
        id: uuid(),
        schooluser_id: teacherMadalena[tclsIndex].id,
        cls_id: cls.id,
        is_student: false,
        is_cls_teacher: true,
        is_teacher: true,
        created_at: new Date(),
        school_dashboard_id: ctx.schoolsDashboards.obj['region 2020/2021 Dashboard'].id,
        school_id: ctx.schools.obj['school-region'].id
      })
    }
  })

  return schooluserClasses
}

module.exports = {
  schooluserClasses,
  generateRegionSchooluserClasses
}
