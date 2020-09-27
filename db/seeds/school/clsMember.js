const _ = require('lodash')

module.exports = async function (knex, ctx) {
  const schoolusers = ctx.schoolusers.docs
  const classes = ctx.classes.docs

  const clsMembersData = []
for (let i = 0; i < classes.length; i++) {
      // 學生已經都添加完了就跳出去
      // if (!schoolusers.length) break
      clsMembersData.push({
        seq_id: i,
        created_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
        // schooluser_id: schoolusers[i].seq_id,
        schooluser_id: null,
        // class_id: classes[i].seq_id,
        class_id: null,
        is_student: true,
        is_class_teacher: false,
        is_teacher: false
      })
      // 每個班放50個學生
      // for (let j = 0; j < 50; j++) {
      //   if (!schoolusers.length) break

      //   // 隨機拿一個學生
      //   const studentRandom = parseInt(Math.random() * schoolusers.length)
      //   const schooluser = schoolusers.splice(studentRandom, 1)

      //   clsMembersData.push({
      //     seq_id: j,
      //     created_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      //     schooluser_id: schooluser.seq_id,
      //     class_id: classes[i].seq_id,
      //     is_student: true,
      //     is_class_teacher: false,
      //     is_teacher: false
      //   })
      // }

      // 每個班放5個班主任
      // for (let n = 0; n < 5; n++) {
      //   // 隨機拿一個班主任
      //   const clsTeacherRandom = parseInt(Math.random() * teachers.length)
      //   const clsTeacher = teachers[clsTeacherRandom]
      //   clsMembersData.push({
      //     id: uuidv4(),
      //     created_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000))),
      //     schooluser_id: clsTeacher.id,
      //     cls_id: classes[i].id,
      //     is_student: false,
      //     is_cls_teacher: true,
      //     is_teacher: true
      //   })
      // }
    }


  // 新增
  const data = [...clsMembersData]
  while (data.length) {
    console.log('add cls members upload data.length', data.length)
    const clsMembersArray = []

    for (let i = 0; i < 500; i++) {
      if (!data.length) break
      const random = parseInt(Math.random() * data.length)
      clsMembersArray.push(...data.splice(random, 1))
    }
    await knex('schooluser_classes').insert([...clsMembersArray])
  }

  const docs = [...clsMembersData]
  // 返回
  ctx.clsMembers = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.created_at
    })
  }
}
