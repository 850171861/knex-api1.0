const _ = require('lodash')
const { fatimaStudentsSchoolusers } = require('./fatimaStudents')
const { fatimaTeachersSchoolusers } = require('./fatimaTeachers')

const schooluserClasses = []
const generateFatimaSchooluserClasses = (uuid, ctx) => {
  // **fatima 年级**
  // 獲取 Fatima 的班級
  const fatimaClasses = _.filter(ctx.classes.docs, doc => doc.school_id === ctx.schools.obj['school-fatima'].id)
  fatimaClasses.forEach(cls => {
    // **Fatima 每一班塞學生**
    const studentsFatima = _.filter(fatimaStudentsSchoolusers, doc => doc.cls === cls.slug)
    for (let clsIndex = 0; clsIndex < studentsFatima.length; ++clsIndex) {
      schooluserClasses.push({
        id: uuid(),
        schooluser_id: studentsFatima[clsIndex].id,
        cls_id: cls.id,
        num: studentsFatima[clsIndex].num,
        is_student: true,
        is_cls_teacher: false,
        is_teacher: false,
        created_at: new Date(),
        school_dashboard_id: ctx.schoolsDashboards.obj['fatima 2020/2021 Dashboard'].id,
        school_id: ctx.schools.obj['school-fatima'].id
      })
    }

    // **Fatima 每一班塞老師**
    const teacherFatima = _.filter(fatimaTeachersSchoolusers, doc => doc.cls === cls.slug)
    for (let tclsIndex = 0; tclsIndex < teacherFatima.length; ++tclsIndex) {
      schooluserClasses.push({
        id: uuid(),
        schooluser_id: teacherFatima[tclsIndex].id,
        cls_id: cls.id,
        is_student: false,
        is_cls_teacher: true,
        is_teacher: true,
        created_at: new Date(),
        school_dashboard_id: ctx.schoolsDashboards.obj['fatima 2020/2021 Dashboard'].id,
        school_id: ctx.schools.obj['school-fatima'].id
      })
    }
  })

  return schooluserClasses
}

module.exports = {
  schooluserClasses,
  generateFatimaSchooluserClasses
}
