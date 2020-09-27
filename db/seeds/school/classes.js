const _ = require('lodash')

module.exports = async (knex, ctx) => {
  const classesData = []
  for (let i = 0; i < 500; i++) {
    console.log('classes waiting...', i)
    classesData.push({
      seq_id: i,
      name: `classes-${i + 1}`,
      english_name: `classes-${i + 1}`,
      slug: `classes-${i + 1}`,
      created_at: new Date(1567296000000 + parseInt(Math.random() * (1595390229956 - 1567296000000)))
    })
  }

  // 新增
  const data = [...classesData]
  while (data.length) {
    console.log('add classes data.length', data.length)
    const classesArray = []
    for (let i = 0; i < 500; i++) {
      if (!data.length) break
      const random = parseInt(Math.random() * data.length)
      classesArray.push(...data.splice(random, 1))
    }
    await knex('classes').insert([...classesArray])
  }

  const docs = [...classesData]
  // 返回
  ctx.classes = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.slug
    })
  }
}
