const classesData = [
  { name: '幼小A班', english_name: 'k1a', slug: '20-k1a' },
  { name: '幼小B班', english_name: 'k1b', slug: '20-k1b' },
  { name: '幼小C班', english_name: 'k1c', slug: '20-k1c' },
  { name: '幼中A班', english_name: 'k2a', slug: '20-k2a' },
  { name: '幼中B班', english_name: 'k2b', slug: '20-k2b' },
  { name: '幼中C班', english_name: 'k2c', slug: '20-k2c' },
  { name: '幼高A班', english_name: 'k3a', slug: '20-k3a' },
  { name: '幼高B班', english_name: 'k3b', slug: '20-k3b' },
  { name: '幼高C班', english_name: 'k3c', slug: '20-k3c' },
  { name: '小學一年級A班', english_name: 'p1a', slug: '20-p1a' },
  { name: '小學一年級B班', english_name: 'p1b', slug: '20-p1b' },
  { name: '小學一年級C班', english_name: 'p1c', slug: '20-p1c' },
  { name: '小學二年級A班', english_name: 'p2a', slug: '20-p2a' },
  { name: '小學二年級B班', english_name: 'p2b', slug: '20-p2b' },
  { name: '小學二年級C班', english_name: 'p2c', slug: '20-p2c' },
  { name: '小學三年級A班', english_name: 'p3a', slug: '20-p3a' },
  { name: '小學三年級B班', english_name: 'p3b', slug: '20-p3b' },
  { name: '小學三年級C班', english_name: 'p3c', slug: '20-p3c' },
  { name: '小學四年級A班', english_name: 'p4a', slug: '20-p4a' },
  { name: '小學四年級B班', english_name: 'p4b', slug: '20-p4b' },
  { name: '小學四年級C班', english_name: 'p4c', slug: '20-p4c' },
  { name: '小學五年級A班', english_name: 'p5a', slug: '20-p5a' },
  { name: '小學五年級B班', english_name: 'p5b', slug: '20-p5b' },
  { name: '小學五年級C班', english_name: 'p5c', slug: '20-p5c' },
  { name: '小學六年級A班', english_name: 'p6a', slug: '20-p6a' },
  { name: '小學六年級B班', english_name: 'p6b', slug: '20-p6b' },
  { name: '小學六年級C班', english_name: 'p6c', slug: '20-p6c' },
  { name: '初中一年級A班', english_name: 's1a', slug: '20-s1a' },
  { name: '初中一年級B班', english_name: 's1b', slug: '20-s1b' },
  { name: '初中一年級C班', english_name: 's1c', slug: '20-s1c' },
  { name: '初中二年級A班', english_name: 's2a', slug: '20-s2a' },
  { name: '初中二年級B班', english_name: 's2b', slug: '20-s2b' },
  { name: '初中二年級C班', english_name: 's2c', slug: '20-s2c' },
  { name: '初中三年級A班', english_name: 's3a', slug: '20-s3a' },
  { name: '初中三年級B班', english_name: 's3b', slug: '20-s3b' },
  { name: '初中三年級C班', english_name: 's3c', slug: '20-s3c' },
  { name: '高中一年級A班', english_name: 's4a', slug: '20-s4a' },
  { name: '高中一年級B班', english_name: 's4b', slug: '20-s4b' },
  { name: '高中一年級C班', english_name: 's4c', slug: '20-s4c' },
  { name: '高中二年級A班', english_name: 's5a', slug: '20-s5a' },
  { name: '高中二年級B班', english_name: 's5b', slug: '20-s5b' },
  { name: '高中二年級C班', english_name: 's5c', slug: '20-s5c' },
  { name: '高中三年級A班', english_name: 's6a', slug: '20-s6a' },
  { name: '高中三年級B班', english_name: 's6b', slug: '20-s6b' },
  { name: '高中三年級C班', english_name: 's6c', slug: '20-s6c' }
]

const fatimaClasses = []
const generateRegionClasses = (uuid, ctx) => {
  for (let clsIndex = 0; clsIndex < classesData.length; clsIndex++) {
    fatimaClasses.push({
      ...classesData[clsIndex],
      id: uuid(),
      school_dashboard_id: ctx.schoolsDashboards.obj['region 2020/2021 Dashboard'].id,
      school_id: ctx.schools.obj['school-region'].id,
      created_at: new Date()
    })
  }

  return fatimaClasses
}

module.exports = {
  classesData,
  fatimaClasses,
  generateRegionClasses
}
