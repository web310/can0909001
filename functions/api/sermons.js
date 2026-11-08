// Cloudflare Pages Function: /api/sermons
const DEFAULT_SERMONS = [
  {
    "id": "sermon-1793817079155",
    "title": "From Wheel to Wheel",
    "titleZh": "從輪到輪",
    "speaker": "Rev. Jiasheng Huang",
    "speakerZh": "黃嘉生 牧師",
    "date": "2026-10-04",
    "scripture": "Jeremiah 18:3-6",
    "scriptureZh": "耶利米書 18:3-6",
    "series": "Sunday Message",
    "seriesZh": "主日證道",
    "summary": "Sunday sermon delivered at Canaan Shin Sheng Christian Church by Rev. Jiasheng Huang on \"From Wheel to Wheel\", reflecting on Jeremiah 18:3-6.",
    "summaryZh": "在加南新生基督教會主日崇拜中，黃嘉生 牧師證道傳講《從輪到輪》，分享經文「耶利米書 18:3-6」，勸勉弟兄姊妹同心扎根信仰、數算主恩。",
    "points": [],
    "pointsZh": [],
    "videoUrl": "",
    "videoPasscode": "25226"
  },
  {
    "id": "sermon-1793817074063",
    "title": "From Wheel to Wheel",
    "titleZh": "從輪到輪",
    "speaker": "Rev. Jiasheng Huang",
    "speakerZh": "黃嘉生 牧師",
    "date": "2026-10-04",
    "scripture": "Jeremiah 18:3-6",
    "scriptureZh": "耶利米書 18:3-6",
    "series": "Sunday Message",
    "seriesZh": "主日證道",
    "summary": "Sunday sermon delivered at Canaan Shin Sheng Christian Church by Rev. Jiasheng Huang on \"From Wheel to Wheel\", reflecting on Jeremiah 18:3-6.",
    "summaryZh": "在加南新生基督教會主日崇拜中，黃嘉生 牧師證道傳講《從輪到輪》，分享經文「耶利米書 18:3-6」，勸勉弟兄姊妹同心扎根信仰、數算主恩。",
    "points": [],
    "pointsZh": [],
    "videoUrl": "",
    "videoPasscode": "25226"
  },
  {
    "id": "sermon-1791709300951",
    "title": "How to Open Our Spiritual Eyes",
    "titleZh": "如何打開屬靈的眼睛",
    "speaker": "Elder Wansi",
    "speakerZh": "萬四長老",
    "date": "2026-10-04",
    "scripture": "Ephesians 1:17-18, John 17:3, Philippians 3:10, Romans 8:18",
    "scriptureZh": "以弗所書 1:17-18, 約翰福音 17:3, 腓立比書 3:10, 羅馬書 8:18",
    "series": "Sunday Message",
    "seriesZh": "主日證道",
    "summary": "Sunday sermon delivered at Canaan Shin Sheng Christian Church by Elder Wansi on \"How to Open Our Spiritual Eyes\", reflecting on Ephesians 1:17-18, John 17:3, Philippians 3:10, Romans 8:18.",
    "summaryZh": "在加南新生基督教會主日崇拜中，萬四長老證道傳講《如何打開屬靈的眼睛》，分享經文「以弗所書 1:17-18, 約翰福音 17:3, 腓立比書 3:10, 羅馬書 8:18」，勸勉弟兄姊妹同心扎根信仰、數算主恩。",
    "points": [
      "一、打開信心的眼睛（以弗所書 1:17-18）",
      "二、打開愛的眼睛（約翰福音 17:3、腓立比書 3:10）",
      "三、打開盼望的眼睛（羅馬書 8:18）"
    ],
    "pointsZh": [
      "一、打開信心的眼睛（以弗所書 1:17-18）",
      "二、打開愛的眼睛（約翰福音 17:3、腓立比書 3:10）",
      "三、打開盼望的眼睛（羅馬書 8:18）"
    ],
    "videoUrl": "",
    "videoPasscode": "25226"
  },
  {
    "id": "sermon-1791706122891",
    "title": "主是蔔萄樹，我是枝子",
    "titleZh": "主是蔔萄樹，我是枝子",
    "speaker": "Brother Zhengyi Qiu",
    "speakerZh": "邱正一 弟兄",
    "date": "2026-10-11",
    "scripture": "John 十五:4-5,",
    "scriptureZh": "約翰福音十五章4-5節,",
    "series": "Sunday Message",
    "seriesZh": "主日證道",
    "summary": "Sunday sermon delivered at Canaan Shin Sheng Christian Church by Brother Zhengyi Qiu on \"主是蔔萄樹，我是枝子\", reflecting on John 十五:4-5,.",
    "summaryZh": "在加南新生基督教會主日崇拜中，邱正一 弟兄證道傳講《主是蔔萄樹，我是枝子》，分享經文「約翰福音十五章4-5節,」，勸勉弟兄姊妹同心扎根信仰、數算主恩。",
    "points": [
      "1. Opening the Eyes of Faith (Ephesians 1:17-18)",
      "2. Opening the Eyes of Love (John 17:3, Philippians 3:10)",
      "3. Opening the Eyes of Hope (Romans 8:18)"
    ],
    "pointsZh": [],
    "videoUrl": "",
    "videoPasscode": "25226"
  },
  {
    "id": "sermon-1791014936583",
    "title": "How to Open Our Spiritual Eyes",
    "titleZh": "如何打開屬靈的眼睛",
    "speaker": "萬四長老",
    "speakerZh": "萬四長老",
    "date": "2026-10-04",
    "scripture": "Ephesians 1:17–18, John 17:3, Philippians 3:10, Romans 8:18",
    "scriptureZh": "以弗所書 1:17-18, 約翰福音 17:3, 腓立比書 3:10, 羅馬書 8:18",
    "series": "Sunday Message",
    "seriesZh": "主日證道",
    "summary": "Sunday sermon delivered at Canaan Shin Sheng Christian Church by Elder Wan Si on 'How to Open Our Spiritual Eyes', based on Ephesians 1:17-18, John 17:3, Philippians 3:10, and Romans 8:18. Encouraging believers through God's word to see God's works with eyes of faith, love those around us with eyes of love, and look up to the Lord with eyes of hope.",
    "summaryZh": "在加南新生基督教會主日崇拜中，萬四長老證道傳講《如何打開屬靈的眼睛》，分享以弗所書第一章等多處經文，勉勵全體弟兄姊妹：藉著神的話語打開屬靈的眼睛，不只看見眼前的環境，更能憑著信心看見神的作為、用愛看待身邊的人，並帶著盼望仰望主。",
    "points": [
      "1. Opening the Eyes of Faith (Ephesians 1:17-18)",
      "2. Opening the Eyes of Love (John 17:3, Philippians 3:10)",
      "3. Opening the Eyes of Hope (Romans 8:18)"
    ],
    "pointsZh": [
      "一、打開信心的眼睛",
      "二、打開愛的眼睛",
      "三、打開盼望的眼睛"
    ],
    "videoUrl": "",
    "videoPasscode": "",
    "audioUrl": "",
    "showVideo": false,
    "showAudio": false
  },
  {
    "id": "sermon-1790547163293",
    "title": "Understanding the Gospel of Jesus Christ",
    "titleZh": "認識耶穌基督的福音",
    "speaker": "Brother Shaoxin Li",
    "speakerZh": "李紹信 弟兄",
    "date": "2026-09-27",
    "scripture": "Mark 1:1-45",
    "scriptureZh": "馬可福音第一章",
    "series": "Sunday Message",
    "seriesZh": "主日證道",
    "summary": "At Canaan Shin Sheng Christian Church Sunday Service, Brother Shaoxin Li preached on 'Understanding the Gospel of Jesus Christ' from Mark 1, examining the truth and foundation of the gospel, the core and proclamation of the gospel, and the inheritance and mission of the gospel. Urging believers to be rooted in Christ and united in proclaiming the Kingdom of God.",
    "summaryZh": "加南新生基督教會主日崇拜，李紹信弟兄透過馬可福音第一章傳講《認識耶穌基督的福音》，深刻剖析福音的真假與根基、福音的核心與傳揚，以及福音的傳承與使命。勉勵全體弟兄姊妹在基督真道上扎根，同心合一傳揚天國的福音，活出充滿得救喜樂與忠心見證的生命。",
    "points": [
      "1. The Truth and Foundation of the Gospel (Mark 1:1-8)",
      "2. The Core and Proclamation of the Gospel (Mark 1:9-15)",
      "3. The Inheritance and Mission of the Gospel (Mark 1:16-45)"
    ],
    "pointsZh": [
      "一、福音的真假 ‧ 福音的根基（可 1:1-8）",
      "二、福音的核心 ‧ 福音的傳揚（可 1:9-15）",
      "三、福音的傳承 ‧ 福音的使命（可 1:16-45）"
    ],
    "videoUrl": "",
    "videoPasscode": "25226",
    "audioUrl": "",
    "showVideo": false,
    "showAudio": false
  },
  {
    "id": "sermon-1789261339556",
    "title": "A fighting chance",
    "titleZh": "一線生機",
    "speaker": "Rev. Sulun Meng",
    "speakerZh": "孟蘇倫 牧師",
    "date": "2026-09-13",
    "scripture": "Joshua 2:15-21",
    "scriptureZh": "約書亞記第二章（約書亞記 2:15-21）",
    "series": "Sunday Message",
    "seriesZh": "主日證道",
    "summary": "Sunday sermon delivered at Canaan Shin Sheng Christian Church by Rev. Sulun Meng on \"A fighting chance.\", reflecting on Joshua 2:15-21.",
    "summaryZh": "在加南新生基督教會主日崇拜中，孟蘇倫 牧師證道傳講《一線生機》，分享經文「約書亞記第二章（約書亞記 2:15-21）」，勸勉弟兄姊妹同心扎根信仰、數算主恩。",
    "points": [
      "1. Stepping onto a new journey, we must follow closely in God's footsteps.",
      "2. All must be united; God will perfect and fulfill our entire church.",
      "3. A journey born of faith will surely witness God's mighty works firsthand."
    ],
    "pointsZh": [
      "1.在絕境中經歷生機",
      "2. 在審判時獲得生機",
      "3. 界線之內才有生機"
    ],
    "videoUrl": "",
    "videoPasscode": "25226",
    "audioUrl": "",
    "showVideo": false,
    "showAudio": false
  },
  {
    "id": "sermon-20260906",
    "title": "The Antioch Church",
    "titleZh": "安提阿教會",
    "speaker": "Brother Ito",
    "speakerZh": "ITO 弟兄",
    "date": "2026-09-06",
    "scripture": "Acts 11:19-40, 13:1-4",
    "scriptureZh": "使徒行傳第 11 章第 19-40 節，第 13 章第 1-4 節",
    "series": "Sunday Message",
    "seriesZh": "主日證道",
    "summary": "At Canaan Shin Sheng Christian Church Sunday Service, Brother Ito preached on 'The Antioch Church' from Acts 11:19-40 and Acts 13:1-4, urging believers to proclaim the Gospel in trials, follow Christ faithfully, meet kingdom needs, and pray in unity as ambassadors of the Great Commission.",
    "summaryZh": "加南新生基督教會主日崇拜，ITO 弟兄透過使徒行傳第 11 章第 19-40 節與第 13 章第 1-4 節傳講《安提阿教會》，勉勵弟兄姊妹在患難中忠心傳揚福音、緊跟隨基督、顧念神國度的需要，並同心敬拜與迫切禱告，立志成為大使命的使者與活出基督之愛的人。",
    "points": [
      "1. Characteristics of the Antioch Church Used by God",
      "1) People preaching in affliction",
      "2) People following Christ faithfully",
      "3) Caring for the needs of God's Kingdom",
      "4) A church worshiping and praying in one accord",
      "2. Resolving to Become the Antioch Church",
      "1) Becoming ambassadors of the Great Commission",
      "2) Living out Christ's love",
      "3) Praying earnestly together with brothers and sisters"
    ],
    "pointsZh": [
      "1. 安提阿教會被神使用的特點",
      "1) 一群患難中傳道的人",
      "2) 一群跟隨基督的人",
      "3) 顧念神國度的需要",
      "4) 同心合意敬拜及禱告的教會",
      "2. 立志成為安提阿教會",
      "1) 立志成為一個大使命的使者",
      "2) 立志成為活出愛的人",
      "3) 立志與弟兄姐妹一起迫切禱告"
    ],
    "videoPasscode": "25226",
    "showVideo": false,
    "showAudio": false
  },
  {
    "id": "sermon-2",
    "title": "A Gentle Whisper in the Wilderness: From Weariness to Renewal",
    "titleZh": "曠野裡的微聲——從疲憊到更新",
    "speaker": "Evangelist Tanni",
    "speakerZh": "談妮 傳道",
    "date": "2026-08-23",
    "scripture": "1 Kings 19:1-18",
    "scriptureZh": "列王記上第 19 章第 1-18 節",
    "series": "Sunday Message",
    "seriesZh": "主日證道",
    "summary": "Evangelist Tanni shared the journey of Prophet Elijah in exhaustion and despair. Even in our deepest weakness and wilderness, God is present to provide, comfort, and guide us to listen to His gentle whisper and regain strength and heavenly hope.",
    "summaryZh": "加南新生基督教會主日崇拜，談妮傳道透過列王記上第 19 章第 1-18 節傳講《曠野裡的微聲——從疲憊到更新》，分享先知以利亞在低潮與疲憊中的經歷。勉勵弟兄姊妹：即使身處軟弱與困境中，神仍然與我們同在，親自供應、安慰並帶領我們，在安靜中聆聽神的微聲，重新得著力量與盼望。",
    "points": [
      "1. Weariness in the Wilderness — 1 Kings 19:1-4",
      "2. God's Gentle Provision and Touch — 1 Kings 19:5-8",
      "3. Listening to the Gentle Whisper on Mount Horeb — 1 Kings 19:9-14",
      "4. Commissioned Anew with Seven Thousand Faithful — 1 Kings 19:15-18"
    ],
    "pointsZh": [
      "一、曠野低谷中的疲憊與求死 （列王記上 19:1-4）",
      "二、神親自的供應、撫摸與撫慰 （列王記上 19:5-8）",
      "三、何烈山洞前微小的聲音 （列王記上 19:9-14）",
      "四、重領使命與七千忠心未屈膝的同路人 （列王記上 19:15-18）"
    ],
    "videoPasscode": "25226",
    "showVideo": false,
    "showAudio": false
  }
];

export async function onRequestGet(context) {
  try {
    const url = new URL(context.request.url);
    const assetUrl = new URL('/canaan_master_data.json', url);
    const masterRes = context.env && context.env.ASSETS
      ? await context.env.ASSETS.fetch(assetUrl)
      : await fetch(assetUrl);
    if (masterRes && masterRes.ok) {
      const masterData = await masterRes.json();
      if (masterData && Array.isArray(masterData.data?.sermons) && masterData.data.sermons.length > 0) {
        return new Response(
          JSON.stringify({
            success: true,
            sermons: masterData.data.sermons,
            count: masterData.data.sermons.length,
            source: 'canaan_master_data.json'
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              "Access-Control-Allow-Origin": "*",
              "Cache-Control": "no-cache, no-store, must-revalidate"
            }
          }
        );
      }
    }
  } catch (err) {
    console.warn("Could not read canaan_master_data.json:", err);
  }

  return new Response(
    JSON.stringify({
      success: true,
      sermons: DEFAULT_SERMONS,
      count: DEFAULT_SERMONS.length,
      source: 'edge_function_fallback'
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-cache, no-store, must-revalidate"
      }
    }
  );
}

export async function onRequestPost(context) {
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}
