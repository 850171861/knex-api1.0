const classesData = [
  { name: '幼兒一年級 A', english_name: 'k1a', slug: 'k1a' },
  { name: '幼兒一年級 B', english_name: 'k1b', slug: 'k1b' },
  { name: '幼兒一年級 C', english_name: 'k1c', slug: 'k1c' },
  { name: '幼兒二年級 A', english_name: 'k2a', slug: 'k2a' },
  { name: '幼兒二年級 B', english_name: 'k2b', slug: 'k2b' },
  { name: '幼兒二年級 C', english_name: 'k2c', slug: 'k2c' },
  { name: '幼兒三年級 A', english_name: 'k3a', slug: 'k3a' },
  { name: '幼兒三年級 B', english_name: 'k3b', slug: 'k3b' },
  { name: '幼兒三年級 C', english_name: 'k3c', slug: 'k3c' },
  { name: '小學一年级 A', english_name: 'p1a', slug: 'p1a' },
  { name: '小學一年级 B', english_name: 'p1b', slug: 'p1b' },
  { name: '小學二年级 A', english_name: 'p2a', slug: 'p2a' },
  { name: '小學二年级 B', english_name: 'p2b', slug: 'p2b' },
  { name: '小學三年级 A', english_name: 'p3a', slug: 'p3a' },
  { name: '小學三年级 B', english_name: 'p3b', slug: 'p3b' },
  { name: '小學四年级 A', english_name: 'p4a', slug: 'p4a' },
  { name: '小學四年级 B', english_name: 'p4b', slug: 'p4b' },
  { name: '小學五年级 A', english_name: 'p5a', slug: 'p5a' },
  { name: '小學五年级 B', english_name: 'p5b', slug: 'p5b' },
  { name: '小學六年级 A', english_name: 'p6a', slug: 'p6a' },
  { name: '小學六年级 B', english_name: 'p6b', slug: 'p6b' }
]

const madalenaClasses = []

const generateMadalenaClasses = (uuid, ctx) => {
  for (let clsIndex = 0; clsIndex < classesData.length; clsIndex++) {
    madalenaClasses.push({
      ...classesData[clsIndex],
      id: uuid(),
      school_dashboard_id: ctx.schoolsDashboards.obj['madalena 2020/2021 Dashboard'].id,
      school_id: ctx.schools.obj['school-madalena'].id,
      created_at: new Date()
    })
  }

  return madalenaClasses
}

module.exports = {
  classesData,
  madalenaClasses,
  generateMadalenaClasses
}
