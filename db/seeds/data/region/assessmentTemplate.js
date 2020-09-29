const { v4: uuidv4 } = require('uuid')

const generateRegionAssessmentTemplates = (uuid, ctx) => {
  const schoolId = ctx.schools.obj['school-region'].id
  return [
    {
      id: uuid(),
      is_source: true,
      name: '《幼兒基本學力要求》評估表格式(幼兒班-region)',
      revision: 1,
      code: uuidv4(),
      school_id: schoolId,
      sections: [
        {
          id: uuidv4(),
          name: '健康與體育',
          subsections: [
            {
              id: uuidv4(),
              name: '認識身體',
              rules: [
                { id: uuidv4(), name: 'A-1-1能說出眼、耳、口、鼻和四肢的名稱和主要功用；' },
                { id: uuidv4(), name: 'A-1-2能注意到自己長大的變化；' },
                { id: uuidv4(), name: 'A-1-3知道自己的性別，懂得分辨男、女洗手間；' }
              ]
            },
            {
              id: uuidv4(),
              name: '自我保護',
              rules: [
                { id: uuidv4(), name: 'A-2-1有保持個人衛生的習慣及愛護周邊環境衛生的意識；' },
                { id: uuidv4(), name: 'A-2-2能注意飲食衛生和營養均衡；' },
                { id: uuidv4(), name: 'A-2-3有按時起居的意識和習慣；' },
                { id: uuidv4(), name: 'A-2-5有良好的排泄習慣並注意清潔；' },
                { id: uuidv4(), name: 'A-2-6有良好的坐、卧、立、行習慣；' }
              ]
            },
            {
              id: uuidv4(),
              name: '心理健康',
              rules: [
                { id: uuidv4(), name: 'A-3-1會表達情緒；' },
                { id: uuidv4(), name: 'A-3-2能經常保持愉快的情緒；' },
                { id: uuidv4(), name: 'A-3-3表現出樂觀的態度；' },
                { id: uuidv4(), name: 'A-3-4對不同環境有初步的適應能力；' }
              ]
            },
            {
              id: uuidv4(),
              name: '體格訓練與運動',
              rules: [
                { id: uuidv4(), name: 'A-4-1喜愛運動及能體驗運動的樂趣；' },
                { id: uuidv4(), name: 'A-4-2能遵守運動規則，並能與人合作；' },
                { id: uuidv4(), name: 'A-4-3能運用基本動作做簡單的運動，動作協調；' },
                { id: uuidv4(), name: 'A-4-4會初步學習使用簡易的運動器材；' }
              ]
            }
          ]
        },
        {
          id: uuidv4(),
          name: '語言',
          subsections: [
            {
              id: uuidv4(),
              name: '聽',
              rules: [
                { id: uuidv4(), name: 'B-1-1能分辨不同的聲音；' },
                { id: uuidv4(), name: 'B-1-2能聽懂日常生活中的用語及指令，並能按照指令行動；' },
                { id: uuidv4(), name: 'B-1-3能安靜、專注地傾聽他人說話；' },
                { id: uuidv4(), name: 'B-1-5能初步聽說簡單的第二語言；' }
              ]
            },
            {
              id: uuidv4(),
              name: '說',
              rules: [
                { id: uuidv4(), name: 'B-2-1發音清楚正確，能說出較完整和連貫的語句；' },
                { id: uuidv4(), name: 'B-2-2說話有禮貌和自信；' },
                { id: uuidv4(), name: 'B-2-4樂意與人交談，初步發展口頭語言；' }
              ]
            },
            {
              id: uuidv4(),
              name: '讀',
              rules: [
                { id: uuidv4(), name: 'B-3-1喜歡閱讀，有閱讀興趣和良好的閱讀習慣；' },
                { id: uuidv4(), name: 'B-3-2能專注地閱讀圖書，對閱讀圖書有興趣；' },
                { id: uuidv4(), name: 'B-3-4對文字產生興趣，能認讀簡單的文字；' }
              ]
            }
          ]
        },
        {
          id: uuidv4(),
          name: '個人、社會與人文',
          subsections: [
            {
              id: uuidv4(),
              name: '自我',
              rules: [
                { id: uuidv4(), name: 'C-1-2學習自己的事情自己做，培養初步的責任感；' },
                { id: uuidv4(), name: 'C-1-4喜歡學習，樂於參與學習活動；' },
                { id: uuidv4(), name: 'C-1-5初步具有自尊和誠實的品格；' },
                { id: uuidv4(), name: 'C-1-6初步培養解決簡單問題的能力；' }
              ]
            },
            {
              id: uuidv4(),
              name: '自我與他人',
              rules: [
                { id: uuidv4(), name: 'C-2-1喜歡交往，與人相處有禮和睦；' },
                { id: uuidv4(), name: 'C-2-2懂得愛護和幫助身邊的人；' },
                { id: uuidv4(), name: 'C-2-3樂於與人溝通、合作及分享；' }
              ]
            },
            {
              id: uuidv4(),
              name: '自我與社會組織--家庭、學校、社區',
              rules: [
                { id: uuidv4(), name: 'C-3-1樂意參與群體活動；' },
                { id: uuidv4(), name: 'C-3-2理解和遵守日常生活中基本的行為規則；' },
                { id: uuidv4(), name: 'C-3-3能孝順父母和尊敬長輩；' },
                { id: uuidv4(), name: 'C-3-5初步知道重要的節日及其含義；' }
              ]
            },
            {
              id: uuidv4(),
              name: '自我與環境',
              rules: [
                { id: uuidv4(), name: 'C-4-1有愛護環境和珍惜資源的意識，培養責任感；' }
              ]
            }
          ]
        },
        {
          id: uuidv4(),
          name: '數學與科學',
          subsections: [
            {
              id: uuidv4(),
              name: '邏輯與推理',
              rules: [
                { id: uuidv4(), name: 'D-1-3能對物體的大小、多少、長短、形狀等概念進行分辨；' }
              ]
            },
            {
              id: uuidv4(),
              name: '圖形與空間',
              rules: [
                { id: uuidv4(), name: 'D-2-1認識圓形基本平面圖形；' }
              ]
            },
            {
              id: uuidv4(),
              name: '數與量',
              rules: [
                { id: uuidv4(), name: 'D-3-2初步認識1-10的數與量；' }
              ]
            },
            {
              id: uuidv4(),
              name: '科學態度',
              rules: [
                { id: uuidv4(), name: 'D-4-1喜歡親近大自然，並對自然環境表現出興趣和好奇；' },
                { id: uuidv4(), name: 'D-4-2愛護動、植物，關心周圍環境；' }
              ]
            },
            {
              id: uuidv4(),
              name: '科學技能',
              rules: [
                { id: uuidv4(), name: 'D-5-1能運用感官探索自然現象；' }
              ]
            },
            {
              id: uuidv4(),
              name: '科學現象',
              rules: [
                { id: uuidv4(), name: 'D-6-3能分辨天氣變化和四季的特徵；' }
              ]
            }
          ]
        },
        {
          id: uuidv4(),
          name: '藝術',
          subsections: [
            {
              id: uuidv4(),
              name: '體驗',
              rules: [
                { id: uuidv4(), name: 'E-1-1能感受和體會到生活中事物的美好；' },
                { id: uuidv4(), name: 'E-1-2喜歡欣賞優美的藝術作品，並能感受到其中的美；' },
                { id: uuidv4(), name: 'E-1-4能感受不同材料的趣味，初步使用不同材料進行創作；' },
                { id: uuidv4(), name: 'E-1-5能通過參加各種音樂及表演活動，體驗自由表達的樂趣；' }
              ]
            },
            {
              id: uuidv4(),
              name: '鑒賞',
              rules: [
                { id: uuidv4(), name: 'E-2-1對一種或多種的藝術類型表現出興趣；' },
                { id: uuidv4(), name: 'E-2-6能注意到生活環境中的聲音和色彩；' }
              ]
            },
            {
              id: uuidv4(),
              name: '表達與創作',
              rules: [
                { id: uuidv4(), name: 'E-3-1能隨音樂旋律唱歌、模仿、拍打簡單節奏及展現肢體動作；' },
                { id: uuidv4(), name: 'E-3-2能運用各種美勞材料進行簡單的創作；' }
              ]
            }
          ]
        }
      ]
    },

    {
      id: uuid(),
      is_source: true,
      name: '《幼兒基本學力要求》評估表格式(幼低班-region)',
      revision: 1,
      code: uuidv4(),
      school_id: schoolId,
      sections: [
        {
          id: uuidv4(),
          name: '健康與體育',
          subsections: [
            {
              id: uuidv4(),
              name: '認識身體',
              rules: [
                { id: uuidv4(), name: 'A-1-1能說出眼、耳、口、鼻和四肢的名稱、特徵和主要功用；' },
                { id: uuidv4(), name: 'A-1-3知道男女有區別；' }
              ]
            },
            {
              id: uuidv4(),
              name: '自我保護',
              rules: [
                { id: uuidv4(), name: 'A-2-1有保持個人衛生的習慣及愛護周邊環境衛生的意識；' },
                { id: uuidv4(), name: 'A-2-2能注意飲食衛生和營養均衡；' },
                { id: uuidv4(), name: 'A-2-4能按照天氣和場合的變化穿著合適的衣服；' },
                { id: uuidv4(), name: 'A-2-5有良好的排泄習慣並注意清潔；' },
                { id: uuidv4(), name: 'A-2-6有良好的坐、卧、立、行習慣；' },
                { id: uuidv4(), name: 'A-2-8有注意安全的意識，掌握保護自身安全的基本方法；' },
                { id: uuidv4(), name: 'A-2-9知道緊急情況的求助方法；' }
              ]
            },
            {
              id: uuidv4(),
              name: '心理健康',
              rules: [
                { id: uuidv4(), name: 'A-3-1會區分和表達情緒；' },
                { id: uuidv4(), name: 'A-3-2能經常保持愉快的情緒，並能通過活動舒緩負面情緒；' },
                { id: uuidv4(), name: 'A-3-4對不同環境有初步的適應能力；' },
                { id: uuidv4(), name: 'A-3-5能面對困難，在活動中表現出自信；' }
              ]
            },
            {
              id: uuidv4(),
              name: '體格訓練與運動',
              rules: [
                { id: uuidv4(), name: 'A-4-1喜愛運動及能體驗運動的樂趣；' },
                { id: uuidv4(), name: 'A-4-2能遵守運動規則，在運動中表現出體育精神；' },
                { id: uuidv4(), name: 'A-4-3能運用基本動作做簡單的運動，動作協調；' },
                { id: uuidv4(), name: 'A-4-4會使用簡易的運動器材；' }
              ]
            }
          ]
        },
        {
          id: uuidv4(),
          name: '語言',
          subsections: [
            {
              id: uuidv4(),
              name: '聽',
              rules: [
                { id: uuidv4(), name: 'B-1-1能分辨不同的聲音，感受語氣、語調的不同變化；' },
                { id: uuidv4(), name: 'B-1-2能聽懂日常生活中的用語及指令，並能按照指令行動；' },
                { id: uuidv4(), name: 'B-1-3能安靜、專注地傾聽他人說話；' },
                { id: uuidv4(), name: 'B-1-5能聽說簡單的第二語言；' }
              ]
            },
            {
              id: uuidv4(),
              name: '說',
              rules: [
                { id: uuidv4(), name: 'B-2-2說話有禮貌和自信；' },
                { id: uuidv4(), name: 'B-2-4樂意與人交談及參加討論，能發表自己的意見；' },
                { id: uuidv4(), name: 'B-2-5能有表情地演繹故事、兒歌、話劇，並嘗試進行表演；' }
              ]
            },
            {
              id: uuidv4(),
              name: '讀',
              rules: [
                { id: uuidv4(), name: 'B-3-1喜歡閱讀，有閱讀興趣和良好的閱讀習慣；' },
                { id: uuidv4(), name: 'B-3-2能獨立、專注地閱讀圖書，初步掌握閱讀圖書的方法；' },
                { id: uuidv4(), name: 'B-3-3能識別圖書及生活中常見的符號及標誌，知道其含意；' },
                { id: uuidv4(), name: 'B-3-4對文字產生興趣，能認讀簡單的文字；' },
                { id: uuidv4(), name: 'B-3-5能說出閱讀的幼兒文學作品的主要內容，並用自己喜歡的方式表達自己的理解；' }
              ]
            },
            {
              id: uuidv4(),
              name: '寫',
              rules: [
                { id: uuidv4(), name: 'B-4-1對書寫有興趣；' },
                { id: uuidv4(), name: 'B-4-2初步掌握正確的執筆方法及書寫姿勢；' }
              ]
            }
          ]
        },
        {
          id: uuidv4(),
          name: '個人、社會與人文',
          subsections: [
            {
              id: uuidv4(),
              name: '自我',
              rules: [
                { id: uuidv4(), name: 'C-1-1認識自己和欣賞自己獨特之處，悅納自我；' },
                { id: uuidv4(), name: 'C-1-2願意自己的事情自己做，有初步的責任感；' },
                { id: uuidv4(), name: 'C-1-4喜歡學習，樂於參與學習活動；' },
                { id: uuidv4(), name: 'C-1-6有思考和解決簡單問題的能力；' }
              ]
            },
            {
              id: uuidv4(),
              name: '自我與他人',
              rules: [
                { id: uuidv4(), name: 'C-2-1喜歡交往，與人相處有禮和睦；' },
                { id: uuidv4(), name: 'C-2-2懂得相互欣賞、尊重、愛護和幫助身邊的人；' },
                { id: uuidv4(), name: 'C-2-3樂於與人溝通、合作及分享；' }
              ]
            },
            {
              id: uuidv4(),
              name: '自我與社會組織--家庭、學校、社區',
              rules: [
                { id: uuidv4(), name: 'C-3-1樂意參與群體活動；' },
                { id: uuidv4(), name: 'C-3-2理解和遵守日常生活中基本的行為規則；' },
                { id: uuidv4(), name: 'C-3-3能孝順父母和尊敬長輩；' },
                { id: uuidv4(), name: 'C-3-5初步知道重要的節日及其含義；' }
              ]
            },
            {
              id: uuidv4(),
              name: '自我與環境',
              rules: [
                { id: uuidv4(), name: 'C-4-1有愛護環境和珍惜資源的意識，並在這方面表現出初步的責任感。' }
              ]
            }
          ]
        },
        {
          id: uuidv4(),
          name: '數學與科學',
          subsections: [
            {
              id: uuidv4(),
              name: '邏輯與推理',
              rules: [
                { id: uuidv4(), name: 'D-1-1喜歡觀察生活中與數學有關的事物與現象，樂意用簡單的數學方法解決生活中的問題；' },
                { id: uuidv4(), name: 'D-1-3能按物體的大小、輕重、多少、形狀等屬性，進行比較、分類和排序；' },
                { id: uuidv4(), name: 'D-1-5能說出日常生活中發生事件的順序和前因後果；' }
              ]
            },
            {
              id: uuidv4(),
              name: '圖形與空間',
              rules: [
                { id: uuidv4(), name: 'D-2-1認識圓形、正方形、三角形等基本平面圖形；' },
                { id: uuidv4(), name: 'D-2-3能指出某一物體的位置，及其與其他物體的空間關係；' }
              ]
            },
            {
              id: uuidv4(),
              name: '數與量',
              rules: [
                { id: uuidv4(), name: 'D-3-1能認識常見的數字符號，並正確書寫；' },
                { id: uuidv4(), name: 'D-3-2初步感知和理解數量之間的關係；' },
                { id: uuidv4(), name: 'D-3-4認識常見的測量工具並會進行簡單測量；' }
              ]
            },
            {
              id: uuidv4(),
              name: '科學態度',
              rules: [
                { id: uuidv4(), name: 'D-4-1喜歡親近大自然，並對自然環境表現出興趣和好奇；' },
                { id: uuidv4(), name: 'D-4-2愛護動、植物，關心周圍環境；' },
                { id: uuidv4(), name: 'D-4-3喜歡接觸新事物，並樂於提出問題及試圖尋找答案；' },
                { id: uuidv4(), name: 'D-4-4積極參與科學活動，樂於與人合作，並分享探索的收穫；' },
                { id: uuidv4(), name: 'D-4-5能體會到科學與生活的關係，對科學產生興趣，並敢於發表個人看法；' }
              ]
            },
            {
              id: uuidv4(),
              name: '科學技能',
              rules: [
                { id: uuidv4(), name: 'D-5-1能運用感官探索自然與科學現象；' },
                { id: uuidv4(), name: 'D-5-3能口述觀察的過程及結果，並用自己熟悉的方式記錄；' }
              ]
            },
            {
              id: uuidv4(),
              name: '科學現象',
              rules: [
                { id: uuidv4(), name: 'D-6-3能分辨天氣變化和四季的特徵；' },
                { id: uuidv4(), name: 'D-6-4能初步瞭解人與常見動、植物和環境的關係；' }
              ]
            }
          ]
        },
        {
          id: uuidv4(),
          name: '藝術',
          subsections: [
            {
              id: uuidv4(),
              name: '體驗',
              rules: [
                { id: uuidv4(), name: 'E-1-1能感受和體會到生活中事物的美好；' },
                { id: uuidv4(), name: 'E-1-4能感受不同材料的趣味，體會使用不同材料進行藝術表達和創作的樂趣；' },
                { id: uuidv4(), name: 'E-1-5能通過參加各種音樂及表演活動，體驗到自由表達和創作的樂趣；' }
              ]
            },
            {
              id: uuidv4(),
              name: '鑒賞',
              rules: [
                { id: uuidv4(), name: 'E-2-2樂於展示自己的作品，願意欣賞和簡單評價他人的創作；' },
                { id: uuidv4(), name: 'E-2-3能分辨聲音的高低、長短、快慢、強弱等特性；' }
              ]
            },
            {
              id: uuidv4(),
              name: '表達與創作',
              rules: [
                { id: uuidv4(), name: 'E-3-1能隨音樂旋律哼唱、拍打節奏及根據歌詞展現肢體動作和表情；' },
                { id: uuidv4(), name: 'E-3-2能運用各種美勞材料進行簡單的創作；' },
                { id: uuidv4(), name: 'E-3-4能在教師的引導下，利用不同的工具和道具進行藝術創作，學習探索藝術創作的方法；' },
                { id: uuidv4(), name: 'E-3-5能表達並樂於與人分享藝術創作的感受。' }
              ]
            }
          ]
        }
      ]
    },

    {
      id: uuid(),
      is_source: true,
      name: '《幼兒基本學力要求》評估表格式(幼高班-region)',
      revision: 1,
      code: uuidv4(),
      school_id: schoolId,
      sections: [
        {
          id: uuidv4(),
          name: '健康與體育',
          subsections: [
            {
              id: uuidv4(),
              name: '認識身體',
              rules: [
                { id: uuidv4(), name: 'A-1-2能注意到自己長大的變化；' },
                { id: uuidv4(), name: 'A-1-3知道男女有區別；' }
              ]
            },
            {
              id: uuidv4(),
              name: '自我保護',
              rules: [
                { id: uuidv4(), name: 'A-2-1有保持個人衛生的習慣及愛護周邊環境衛生的意識；' },
                { id: uuidv4(), name: 'A-2-2能注意飲食衛生和營養均衡；' },
                { id: uuidv4(), name: 'A-2-3有按時起居的意識和習慣；' },
                { id: uuidv4(), name: 'A-2-4能按照天氣和場合的變化穿著合適的衣服；' },
                { id: uuidv4(), name: 'A-2-5有良好的排泄習慣並注意清潔；' },
                { id: uuidv4(), name: 'A-2-7認識常見的安全標誌，能辨別生活中常見的危險物品及危險情況，遵守基本的安全規則和交通規則；' },
                { id: uuidv4(), name: 'A-2-8有注意安全的意識，掌握保護自身安全的基本方法；' },
                { id: uuidv4(), name: 'A-2-10懂得預防常見傳染病的方法，願意接受身體檢查，預防接種和疾病治療；' }
              ]
            },
            {
              id: uuidv4(),
              name: '心理健康',
              rules: [
                { id: uuidv4(), name: 'A-3-1會區分和表達情緒；' },
                { id: uuidv4(), name: 'A-3-2能經常保持愉快的情緒，並能通過活動舒緩負面情緒；' },
                { id: uuidv4(), name: 'A-3-3表現出樂觀的態度，初步具有寬容的品質；' },
                { id: uuidv4(), name: 'A-3-4對不同環境有初步的適應能力；' },
                { id: uuidv4(), name: 'A-3-5能面對困難，在活動中表現出自信；' }
              ]
            },
            {
              id: uuidv4(),
              name: '體格訓練與運動',
              rules: [
                { id: uuidv4(), name: 'A-4-1喜愛運動及能體驗運動的樂趣；' },
                { id: uuidv4(), name: 'A-4-2能遵守運動規則，在運動中表現出體育精神；' },
                { id: uuidv4(), name: 'A-4-3能運用基本動作做簡單的運動，動作協調；' },
                { id: uuidv4(), name: 'A-4-4會使用簡易的運動器材；' }
              ]
            }
          ]
        },
        {
          id: uuidv4(),
          name: '語言',
          subsections: [
            {
              id: uuidv4(),
              name: '聽',
              rules: [
                { id: uuidv4(), name: 'B-1-1能分辨不同的聲音，感受語氣、語調的不同變化；' },
                { id: uuidv4(), name: 'B-1-2能聽懂日常生活中的用語及指令，並能按照指令行動；' },
                { id: uuidv4(), name: 'B-1-3能安靜、專注地傾聽他人說話；' },
                { id: uuidv4(), name: 'B-1-4喜歡聆聽幼兒文學作品，並能理解內容；' },
                { id: uuidv4(), name: 'B-1-5能聽說簡單的第二語言；' }
              ]
            },
            {
              id: uuidv4(),
              name: '說',
              rules: [
                { id: uuidv4(), name: 'B-2-1發音清楚正確，能運用恰當的音量、語速、語調說出完整和連貫的語句；' },
                { id: uuidv4(), name: 'B-2-2說話有禮貌和自信；' },
                { id: uuidv4(), name: 'B-2-3能清楚表達自己的生活經驗、需要及情感，完整描述簡單的事物及其發展的順序；' },
                { id: uuidv4(), name: 'B-2-4樂意與人交談及參加討論，能發表自己的意見；' },
                { id: uuidv4(), name: 'B-2-5能有表情地演繹故事、兒歌、話劇，並嘗試進行表演；' }
              ]
            },
            {
              id: uuidv4(),
              name: '讀',
              rules: [
                { id: uuidv4(), name: 'B-3-1喜歡閱讀，有閱讀興趣和良好的閱讀習慣；' },
                { id: uuidv4(), name: 'B-3-2能獨立、專注地閱讀圖書，初步掌握閱讀圖書的方法；' },
                { id: uuidv4(), name: 'B-3-3能識別圖書及生活中常見的符號及標誌，知道其含意；' },
                { id: uuidv4(), name: 'B-3-4對文字產生興趣，能認讀簡單的文字；' },
                { id: uuidv4(), name: 'B-3-5能說出閱讀的幼兒文學作品的主要內容，並用自己喜歡的方式表達自己的理解；' },
                { id: uuidv4(), name: 'B-3-6能根據圖書畫面信息及故事情節續編或改編故事；' }
              ]
            },
            {
              id: uuidv4(),
              name: '寫',
              rules: [
                { id: uuidv4(), name: 'B-4-1對書寫有興趣；' },
                { id: uuidv4(), name: 'B-4-3能利用圖畫、符號或配合個別文字記錄生活的經驗和感受，並進行故事創作；' }
              ]
            }
          ]
        },
        {
          id: uuidv4(),
          name: '個人、社會與人文',
          subsections: [
            {
              id: uuidv4(),
              name: '自我',
              rules: [
                { id: uuidv4(), name: 'C-1-1認識自己和欣賞自己獨特之處，悅納自我；' },
                { id: uuidv4(), name: 'C-1-2願意自己的事情自己做，有初步的責任感；' },
                { id: uuidv4(), name: 'C-1-3懂得尊重及愛惜生命；' },
                { id: uuidv4(), name: 'C-1-4喜歡學習，樂於參與學習活動；' },
                { id: uuidv4(), name: 'C-1-5建立自尊和誠實的品格；' },
                { id: uuidv4(), name: 'C-1-6有思考和解決簡單問題的能力；' }
              ]
            },
            {
              id: uuidv4(),
              name: '自我與他人',
              rules: [
                { id: uuidv4(), name: 'C-2-1喜歡交往，與人相處有禮和睦；' },
                { id: uuidv4(), name: 'C-2-2懂得相互欣賞、尊重、愛護和幫助身邊的人；' },
                { id: uuidv4(), name: 'C-2-3樂於與人溝通、合作及分享；' }
              ]
            },
            {
              id: uuidv4(),
              name: '自我與社會組織--家庭、學校、社區',
              rules: [
                { id: uuidv4(), name: 'C-3-1樂意參與群體活動；' },
                { id: uuidv4(), name: 'C-3-2理解和遵守日常生活中基本的行為規則；' },
                { id: uuidv4(), name: 'C-3-3能孝順父母和尊敬長輩；' },
                { id: uuidv4(), name: 'C-3-4瞭解自己周圍的社區；' },
                { id: uuidv4(), name: 'C-3-5初步知道重要的節日及其含義；' },
                { id: uuidv4(), name: 'C-3-6知道澳門主要的名勝古蹟；' },
                { id: uuidv4(), name: 'C-3-7體會澳門文化的多樣性；' }
              ]
            },
            {
              id: uuidv4(),
              name: '自我與環境',
              rules: [
                { id: uuidv4(), name: 'C-4-1有愛護環境和珍惜資源的意識，並在這方面表現出初步的責任感。' }
              ]
            }
          ]
        },
        {
          id: uuidv4(),
          name: '數學與科學',
          subsections: [
            {
              id: uuidv4(),
              name: '邏輯與推理',
              rules: [
                { id: uuidv4(), name: 'D-1-1喜歡觀察生活中與數學有關的事物與現象，樂意用簡單的數學方法解決生活中的問題；' },
                { id: uuidv4(), name: 'D-1-2能分辨整體與部分的關係；' },
                { id: uuidv4(), name: 'D-1-3能按物體的大小、輕重、多少、形狀等屬性，進行比較、分類和排序；' },
                { id: uuidv4(), name: 'D-1-4能說出四季、月份、星期、日期及時間順序；' },
                { id: uuidv4(), name: 'D-1-5能說出日常生活中發生事件的順序和前因後果；' }
              ]
            },
            {
              id: uuidv4(),
              name: '圖形與空間',
              rules: [
                { id: uuidv4(), name: 'D-2-2認識正方體、長方體、球體、圓柱體等基本立體圖形；' },
                { id: uuidv4(), name: 'D-2-3能指出某一物體的位置，及其與其他物體的空間關係；' },
                { id: uuidv4(), name: 'D-2-4能在他人的幫助下進行簡單的統計並嘗試製作圖表；' }
              ]
            },
            {
              id: uuidv4(),
              name: '數與量',
              rules: [
                { id: uuidv4(), name: 'D-3-1能認識常見的數字符號，並正確書寫；' },
                { id: uuidv4(), name: 'D-3-2初步感知和理解數量之間的關係；' },
                { id: uuidv4(), name: 'D-3-3能借助實物或圖片對10以內的數量進行分解組合，並進行簡單的加減運算；' }
              ]
            },
            {
              id: uuidv4(),
              name: '科學態度',
              rules: [
                { id: uuidv4(), name: 'D-4-1喜歡親近大自然，並對自然環境表現出興趣和好奇；' },
                { id: uuidv4(), name: 'D-4-2愛護動、植物，關心周圍環境；' },
                { id: uuidv4(), name: 'D-4-3喜歡接觸新事物，並樂於提出問題及試圖尋找答案；' },
                { id: uuidv4(), name: 'D-4-4積極參與科學活動，樂於與人合作，並分享探索的收穫；' },
                { id: uuidv4(), name: 'D-4-5能體會到科學與生活的關係，對科學產生興趣，並敢於發表個人看法；' }
              ]
            },
            {
              id: uuidv4(),
              name: '科學技能',
              rules: [
                { id: uuidv4(), name: 'D-5-1能運用感官探索自然與科學現象；' },
                { id: uuidv4(), name: 'D-5-2能嘗試比較自然環境中各種現象和材料的異同；' },
                { id: uuidv4(), name: 'D-5-3能口述觀察的過程及結果，並用自己熟悉的方式記錄；' },
                { id: uuidv4(), name: 'D-5-4能適當並安全地使用簡單的科學用具和常見的材料，進行簡單的科學實驗和製作；' }
              ]
            },
            {
              id: uuidv4(),
              name: '科學現象',
              rules: [
                { id: uuidv4(), name: 'D-6-1能察覺生活中常見的光、熱、聲音、物體運動等科學現象；' },
                { id: uuidv4(), name: 'D-6-2初步認識自然界常見的生物和非生物的特性；' },
                { id: uuidv4(), name: 'D-6-3能分辨天氣變化和四季的特徵；' },
                { id: uuidv4(), name: 'D-6-4能初步瞭解人與常見動、植物和環境的關係；' },
                { id: uuidv4(), name: 'D-6-5會說出與生活相關的重要自然資源的重要性。' }
              ]
            }
          ]
        },
        {
          id: uuidv4(),
          name: '藝術',
          subsections: [
            {
              id: uuidv4(),
              name: '體驗',
              rules: [
                { id: uuidv4(), name: 'E-1-1能感受和體會到生活中事物的美好；' },
                { id: uuidv4(), name: 'E-1-2喜歡欣賞優美的藝術作品，並能感受到其中的美；' },
                { id: uuidv4(), name: 'E-1-3能瞭解簡單的藝術表現方式和方法；' },
                { id: uuidv4(), name: 'E-1-4能感受不同材料的趣味，體會使用不同材料進行藝術表達和創作的樂趣；' },
                { id: uuidv4(), name: 'E-1-5能通過參加各種音樂及表演活動，體驗到自由表達和創作的樂趣；' }
              ]
            },
            {
              id: uuidv4(),
              name: '鑒賞',
              rules: [
                { id: uuidv4(), name: 'E-2-1對一種或多種的藝術類型表現出興趣；' },
                { id: uuidv4(), name: 'E-2-2樂於展示自己的作品，願意欣賞和簡單評價他人的創作；' },
                { id: uuidv4(), name: 'E-2-3能分辨聲音的高低、長短、快慢、強弱等特性；' },
                { id: uuidv4(), name: 'E-2-4能分辨環境和藝術作品中的色彩、形狀和線條的不同；' },
                { id: uuidv4(), name: 'E-2-5能感受和瞭解生活中常見的表演節目類型和特色；' },
                { id: uuidv4(), name: 'E-2-6能注意到生活環境中聲音、色彩和人物肢體動作的變化；' }
              ]
            },
            {
              id: uuidv4(),
              name: '表達與創作',
              rules: [
                { id: uuidv4(), name: 'E-3-1能隨音樂旋律哼唱、拍打節奏及根據歌詞展現肢體動作和表情；' },
                { id: uuidv4(), name: 'E-3-2能運用各種美勞材料進行簡單的創作；' },
                { id: uuidv4(), name: 'E-3-3樂於參與摹擬表演和創編活動；' },
                { id: uuidv4(), name: 'E-3-4能在教師的引導下，利用不同的工具和道具進行藝術創作，學習探索藝術創作的方法；' },
                { id: uuidv4(), name: 'E-3-5能表達並樂於與人分享藝術創作的感受。' }
              ]
            }
          ]
        }
      ]
    }
  ]
}

module.exports = {
  generateRegionAssessmentTemplates
}
