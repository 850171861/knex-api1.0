const classesData = [
  { name: '初一愛', english_name: 'f1c', slug: '20-f15c' },
  { name: '初一毅', english_name: 'f1f', slug: '20-f14f' },
  { name: '初一恆', english_name: 'f1p', slug: '20-f13p' },
  { name: '初一敬', english_name: 'f1r', slug: '20-f11r' },
  { name: '初一靜', english_name: 'f1s', slug: '20-f12s' },
  { name: '初二愛', english_name: 'f2c', slug: '20-f25c' },
  { name: '初二毅', english_name: 'f2f', slug: '20-f24f' },
  { name: '初二恆', english_name: 'f2p', slug: '20-f23p' },
  { name: '初二敬', english_name: 'f2r', slug: '20-f21r' },
  { name: '初二靜', english_name: 'f2s', slug: '20-f22s' },
  { name: '初三愛', english_name: 'f3c', slug: '20-f35c' },
  { name: '初三毅', english_name: 'f3f', slug: '20-f34f' },
  { name: '初三恆', english_name: 'f3p', slug: '20-f33p' },
  { name: '初三敬', english_name: 'f3r', slug: '20-f31r' },
  { name: '初三靜', english_name: 'f3s', slug: '20-f32s' },
  { name: '高一理毅', english_name: 'f4f', slug: '20-f44f' },
  { name: '高一文恒', english_name: 'f4p', slug: '20-f43p' },
  { name: '高一理敬', english_name: 'f4r', slug: '20-f41r' },
  { name: '高一文靜', english_name: 'f4s', slug: '20-f42s' },
  { name: '高二理毅', english_name: 'f5f', slug: '20-f54f' },
  { name: '高二文恒', english_name: 'f5p', slug: '20-f53p' },
  { name: '高二理敬', english_name: 'f5r', slug: '20-f51r' },
  { name: '高二文靜', english_name: 'f5s', slug: '20-f52s' },
  { name: '高三理毅', english_name: 'f6f', slug: '20-f64f' },
  { name: '高三文恆', english_name: 'f6p', slug: '20-f63p' },
  { name: '高三理敬', english_name: 'f6r', slug: '20-f61r' },
  { name: '高三文靜', english_name: 'f6s', slug: '20-f62s' },
  { name: '幼小小象', english_name: 'k1a', slug: '20-k1a' },
  { name: '幼小小兔', english_name: 'k1b', slug: '20-k1b' },
  { name: '幼小小羊', english_name: 'k1c', slug: '20-k1c' },
  { name: '幼小小熊', english_name: 'k1d', slug: '20-k1d' },
  { name: '幼小小鹿', english_name: 'k1e', slug: '20-k1e' },
  { name: '幼中向日葵', english_name: 'k2a', slug: '20-k2a' },
  { name: '幼中康乃馨', english_name: 'k2b', slug: '20-k2b' },
  { name: '幼中玫瑰', english_name: 'k2c', slug: '20-k2c' },
  { name: '幼中百合', english_name: 'k2d', slug: '20-k2d' },
  { name: '幼中茉莉', english_name: 'k2e', slug: '20-k2e' },
  { name: '幼高蜜蜂', english_name: 'k3a', slug: '20-k3a' },
  { name: '幼高蜻蜓', english_name: 'k3b', slug: '20-k3b' },
  { name: '幼高蝴蝶', english_name: 'k3c', slug: '20-k3c' },
  { name: '幼高甲蟲', english_name: 'k3d', slug: '20-k3d' },
  { name: '幼高螢火蟲', english_name: 'k3e', slug: '20-k3e' },
  { name: '小一愛', english_name: 'p1c', slug: '20-p15c' },
  { name: '小一毅', english_name: 'p1f', slug: '20-p14f' },
  { name: '小一恆', english_name: 'p1p', slug: '20-p13p' },
  { name: '小一敬', english_name: 'p1r', slug: '20-p11r' },
  { name: '小一靜', english_name: 'p1s', slug: '20-p12s' },
  { name: '小二愛', english_name: 'p2c', slug: '20-p25c' },
  { name: '小二毅', english_name: 'p2f', slug: '20-p24f' },
  { name: '小二恆', english_name: 'p2p', slug: '20-p23p' },
  { name: '小二敬', english_name: 'p2r', slug: '20-p21r' },
  { name: '小二靜', english_name: 'p2s', slug: '20-p22s' },
  { name: '小三愛', english_name: 'p3c', slug: '20-p35c' },
  { name: '小三毅', english_name: 'p3f', slug: '20-p34f' },
  { name: '小三恆', english_name: 'p3p', slug: '20-p33p' },
  { name: '小三敬', english_name: 'p3r', slug: '20-p31r' },
  { name: '小三靜', english_name: 'p3s', slug: '20-p32s' },
  { name: '小四毅', english_name: 'p4f', slug: '20-p44f' },
  { name: '小四恆', english_name: 'p4p', slug: '20-p43p' },
  { name: '小四敬', english_name: 'p4r', slug: '20-p41r' },
  { name: '小四靜', english_name: 'p4s', slug: '20-p42s' },
  { name: '小四愛', english_name: 'p4c', slug: '20-p45c' },
  { name: '小五愛', english_name: 'p5c', slug: '20-p55c' },
  { name: '小五毅', english_name: 'p5f', slug: '20-p54f' },
  { name: '小五恒', english_name: 'p5p', slug: '20-p53p' },
  { name: '小五敬', english_name: 'p5r', slug: '20-p51r' },
  { name: '小五靜', english_name: 'p5s', slug: '20-p52s' },
  { name: '小六愛', english_name: 'p6c', slug: '20-p65c' },
  { name: '小六毅', english_name: 'p6f', slug: '20-p64f' },
  { name: '小六恒', english_name: 'p6p', slug: '20-p63p' },
  { name: '小六敬', english_name: 'p6r', slug: '20-p61r' },
  { name: '小六靜', english_name: 'p6s', slug: '20-p62s' }
]

const fatimaClasses = []

const generateFatimaClasses = (uuid, ctx) => {
  for (let clsIndex = 0; clsIndex < classesData.length; clsIndex++) {
    fatimaClasses.push({
      ...classesData[clsIndex],
      id: uuid(),
      school_dashboard_id: ctx.schoolsDashboards.obj['fatima 2020/2021 Dashboard'].id,
      school_id: ctx.schools.obj['school-fatima'].id,
      created_at: new Date()
    })
  }

  return fatimaClasses
}

module.exports = {
  classesData,
  fatimaClasses,
  generateFatimaClasses
}
