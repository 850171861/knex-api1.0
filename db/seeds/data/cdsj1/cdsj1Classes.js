const classesData = [
  { name: '幼兒甲', english_name: 'k1a', slug: '19-k1a' },
  { name: '幼兒乙', english_name: 'k1b', slug: '19-k1b' },
  { name: '幼兒丙', english_name: 'k1c', slug: '19-k1c' },
  { name: '幼低甲', english_name: 'k2a', slug: '19-k2a' },
  { name: '幼低乙', english_name: 'k2b', slug: '19-k2b' },
  { name: '幼低丙', english_name: 'k2c', slug: '19-k2c' },
  { name: '幼高甲', english_name: 'k3a', slug: '19-k3a' },
  { name: '幼高乙', english_name: 'k3b', slug: '19-k3b' },
  { name: '幼高丙', english_name: 'k3c', slug: '19-k3c' },
  { name: '幼高丁', english_name: 'k3d', slug: '19-k3d' }
]

const cdsj1Classes = []

const generateCDSJ1Classes = (uuid, ctx) => {
  for (let clsIndex = 0; clsIndex < classesData.length; clsIndex++) {
    cdsj1Classes.push({
      ...classesData[clsIndex],
      id: uuid(),
      school_dashboard_id: ctx.schoolsDashboards.obj['cdsj1 2019/2020 Dashboard'].id,
      school_id: ctx.schools.obj['school-cdsj1'].id,
      created_at: new Date()
    })
  }

  return cdsj1Classes
}

module.exports = {
  classesData,
  cdsj1Classes,
  generateCDSJ1Classes
}
