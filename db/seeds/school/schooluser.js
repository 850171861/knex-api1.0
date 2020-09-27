const _ = require('lodash')
const { v4: uuidv4 } = require('uuid')

module.exports = async function (knex, ctx) {
  const calc = 500
  const schoolusersData = []
  for (let i = 0; i < 100; i++) {
    console.log('schoolusers waiting...', i)
	schoolusersData.push({
        seq_id: i,
        name: `student-${i}`,
        email: `student-${i}@qq.com`,
        is_admin: true,
		is_director: true,
        is_teacher: false,
        is_student: false,
        created_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000)))
      })
  }

  const data = [...schoolusersData]
  while (data.length) {
    console.log('add schoolusers data.length', data.length)
    // 1. rand => index
    // 2. data[index]
    const schoolusersArray = []

    for (let i = 0; i < calc; i++) {
      if (!data.length) break
      const random = parseInt(Math.random() * data.length)
      schoolusersArray.push(...data.splice(random, 1))
    }
    await knex('schoolusers').insert([...schoolusersArray])
  }

  const docs = [...schoolusersData]

  // 返回
  ctx.schoolusers = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.seq_id
    })
  }
}
