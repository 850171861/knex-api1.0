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
      schooluser_id: schoolusers[i].seq_id,
      class_id: classes[i].seq_id,
      is_student: true,
      is_class_teacher: false,
      is_teacher: false
    })
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
