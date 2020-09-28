<Filestack
  apikey='Ah6KQ39reQQSB2asw0T9iz'
  onSuccess={() => {
    console.log('onSuccess')
  }}
  actionOptions={{
    maxFiles: 100,
    accept: ['image/*', 'application/pdf'],
    fromSources: ['local_file_system'],
    // lang: 'zh'
    storeTo: {
      path: `/${schoolId}/notifications/`
    },
    // onUploadDone: (files) => {
    //   console.log('onUploadDone')
    // },
    onFileUploadFinished: file => {
      const fileType = !!file.mimetype && file.mimetype.includes('image') ? 'image' : 'pdf'
      reftest.current.push({ name: file.filename, type: fileType, url: 'https://macau-school.s3.ap-northeast-1.amazonaws.com/' + file.key })
      setFieldValue('files', [...reftest.current])
    }
  }}
  componentDisplayMode={{
    type: 'button',
    customText: '選擇附件',
    customClass: 'sumbit-posts-photo-btn'
  }}
/>
