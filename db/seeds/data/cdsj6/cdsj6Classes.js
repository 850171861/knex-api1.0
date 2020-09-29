const classesData = [
  { name: '高一文商甲', english_name: 's1aa', slug: '19-s1aa' },
  { name: '高一文商乙', english_name: 's1ab', slug: '19-s1ab' },
  { name: '高二文商甲', english_name: 's2aa', slug: '19-s2aa' },
  { name: '高二文商乙', english_name: 's2ab', slug: '19-s2ab' },
  { name: '高三文商甲', english_name: 's3aa', slug: '19-s3aa' },
  { name: '高三文商乙', english_name: 's3ab', slug: '19-s3ab' },
  { name: '高一理甲', english_name: 's1sa', slug: '19-s1sa' },
  { name: '高二理甲', english_name: 's2sa', slug: '19-s2sa' },
  { name: '高三理甲', english_name: 's3sa', slug: '19-s3sa' },
  { name: '初一甲', english_name: 'j1a', slug: '19-j1a' },
  { name: '初一乙', english_name: 'j1b', slug: '19-j1b' },
  { name: '初一丙', english_name: 'j1c', slug: '19-j1c' },
  { name: '初一丁', english_name: 'j1d', slug: '19-j1d' },
  { name: '初二甲', english_name: 'j2a', slug: '19-j2a' },
  { name: '初二乙', english_name: 'j2b', slug: '19-j2b' },
  { name: '初二丙', english_name: 'j2c', slug: '19-j2c' },
  { name: '初二丁', english_name: 'j2d', slug: '19-j2d' },
  { name: '初三甲', english_name: 'j3a', slug: '19-j3a' },
  { name: '初三乙', english_name: 'j3b', slug: '19-j3b' },
  { name: '初三丙', english_name: 'j3c', slug: '19-j3c' },
  { name: 'Form 1A', english_name: 'f1a', slug: '19-f1a' },
  { name: 'Form 2A', english_name: 'f2a', slug: '19-f2a' },
  { name: 'Form 3A', english_name: 'f3a', slug: '19-f3a' }
]

const cdsj6Classes = []

const generateCDSJ6Classes = (uuid, ctx) => {
  for (let clsIndex = 0; clsIndex < classesData.length; clsIndex++) {
    cdsj6Classes.push({
      ...classesData[clsIndex],
      id: uuid(),
      school_dashboard_id: ctx.schoolsDashboards.obj['cdsj6 2019/2020 Dashboard'].id,
      school_id: ctx.schools.obj['school-cdsj6'].id,
      created_at: new Date()
    })
  }

  return cdsj6Classes
}

module.exports = {
  classesData,
  cdsj6Classes,
  generateCDSJ6Classes
}
