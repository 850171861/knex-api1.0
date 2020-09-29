const _ = require('lodash')
const { cdsj6StudentsSchoolusers } = require('./cdsj6Students')
const { cdsj6TeachersSchoolusers } = require('./cdsj6Teachers')

const schooluserClasses = []

const generateCDSJ6SchooluserClasses = (uuid, ctx) => {
  // **獲取 cdsj6 年級**
  const cdsj6Classes = _.filter(ctx.classes.docs, doc => doc.school_id === ctx.schools.obj['school-cdsj6'].id)
  cdsj6Classes.forEach(cls => {
    // **cdsj6 每一班塞學生**
    const studentsCDSJ6 = _.filter(cdsj6StudentsSchoolusers, doc => doc.cls === cls.slug)
    for (let clsIndex = 0; clsIndex < studentsCDSJ6.length; ++clsIndex) {
      schooluserClasses.push({
        id: uuid(),
        schooluser_id: studentsCDSJ6[clsIndex].id,
        num: studentsCDSJ6[clsIndex].num,
        cls_id: cls.id,
        is_student: true,
        is_cls_teacher: false,
        is_teacher: false,
        created_at: new Date(),
        school_dashboard_id: ctx.schoolsDashboards.obj['cdsj6 2019/2020 Dashboard'].id,
        school_id: ctx.schools.obj['school-cdsj6'].id
      })
    }

    // cdsj6 每一班塞老師
    const teachersCDSJ6 = _.filter(cdsj6TeachersSchoolusers, doc => doc.cls === cls.slug)
    for (let tclsIndex = 0; tclsIndex < teachersCDSJ6.length; ++tclsIndex) {
      schooluserClasses.push({
        id: uuid(),
        schooluser_id: teachersCDSJ6[tclsIndex].id,
        cls_id: cls.id,
        is_student: false,
        is_cls_teacher: true,
        is_teacher: true,
        created_at: new Date(),
        school_dashboard_id: ctx.schoolsDashboards.obj['cdsj6 2019/2020 Dashboard'].id,
        school_id: ctx.schools.obj['school-cdsj6'].id
      })
    }
  })

  return schooluserClasses
}

module.exports = {
  schooluserClasses,
  generateCDSJ6SchooluserClasses
}
