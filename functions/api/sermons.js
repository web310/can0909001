// Cloudflare Pages Function: /api/sermons
const DEFAULT_SERMONS = [
  {
    "id": "sermon-20261108",
    "title": "The True Freedom Given by Jesus",
    "titleZh": "耶穌所賜的真自由",
    "speaker": "Brother Zhengyi Qiu",
    "speakerZh": "邱正一 弟兄",
    "date": "2026-11-08",
    "scripture": "John 8:34-36",
    "scriptureZh": "約翰福音第 8 章第 34-36 節",
    "series": "Sunday Message",
    "seriesZh": "主日證道",
    "summary": "Sunday sermon delivered at Canaan Shin Sheng Christian Church by Brother Zhengyi Qiu on \"The True Freedom Given by Jesus\", reflecting on John 8:34-36.",
    "summaryZh": "加南新生基督教會主日崇拜，邱正一 弟兄證道傳講《耶穌所賜的真自由》，經文取自「約翰福音第 8 章第 34-36 節」，勉勵弟兄姊妹經歷神持久的愛，識破罪的誘騙，在基督裡享受真實的救恩與自由。",
    "points": [
      "1. God has always loved me",
      "2. Sin has always deceived me",
      "3. Jesus has already accomplished salvation for me!"
    ],
    "pointsZh": [
      "一、原來神一直愛我",
      "二、原來罪一直騙我",
      "三、原來耶穌已為我成就救恩！"
    ],
    "videoUrl": "",
    "videoPasscode": "25226",
    "showVideo": false,
    "showAudio": false
  },
  {
    "id": "sermon-20261101",
    "title": "Living a Life Walking with the Lord",
    "titleZh": "過一個與主同行的生活",
    "speaker": "Elder Wansi",
    "speakerZh": "萬四 長老",
    "date": "2026-11-01",
    "scripture": "1 John 2:17, Romans 12:2, Isaiah 55:8-9, John 14:17, Proverbs 12:15",
    "scriptureZh": "約翰一書 2:17, 羅馬書 12:2, 以賽亞書 55:8-9, 約翰福音 14:17, 箴言 12:15",
    "series": "Sunday Message",
    "seriesZh": "主日證道",
    "summary": "Sunday sermon delivered at Canaan Shin Sheng Christian Church by Elder Wansi on \"Living a Life Walking with the Lord\", reflecting on 1 John 2:17, Romans 12:2, Isaiah 55:8-9, John 14:17, Proverbs 12:15.",
    "summaryZh": "加南新生基督教會主日崇拜，萬四 長老證道傳講《過一個與主同行的生活》，分享明白神旨意的先決條件與途徑，勉勵弟兄姊妹降服己心、順服聖靈的引導，在日常操練中與主同行。",
    "points": [
      "1. Introduction",
      "2. Three Prerequisites to Knowing God's Will (Resolve to obey, practice known commands, wait in faith)",
      "3. Three Pathways of God's Guidance (Prompting of the Spirit, circumstantial confirmation, counsel of spiritual elders)",
      "4. Daily discipline of walking with the Lord"
    ],
    "pointsZh": [
      "（一）序言",
      "（二）明白神旨意的三個先決條件（決心遵行、先遵行已知命令、不怕等候）",
      "（三）神引導我們的三個途徑（聖靈內在感動、環境外在印證、順服屬靈長輩提醒）",
      "（四）與主同行的操練"
    ],
    "videoUrl": "",
    "videoPasscode": "25226",
    "showVideo": false,
    "showAudio": false
  },
  {
    "id": "sermon-20261025",
    "title": "From Wheel to Wheel",
    "titleZh": "從輪到輪",
    "speaker": "Rev. Jiasheng Huang",
    "speakerZh": "黃嘉生 牧師",
    "date": "2026-10-25",
    "scripture": "Jeremiah 18:3-6",
    "scriptureZh": "耶利米書 18 章 3-6 節",
    "series": "Sunday Message",
    "seriesZh": "主日證道",
    "summary": "Sunday sermon delivered at Canaan Shin Sheng Christian Church by Rev. Jiasheng Huang on \"From Wheel to Wheel\", reflecting on Jeremiah 18:3-6.",
    "summaryZh": "加南新生基督教會主日崇拜，黃嘉生 牧師證道傳講《從輪到輪》，分享經文「耶利米書 18 章 3-6 節」，勉勵弟兄姊妹如同窯匠手中的泥土，甘心交在神手中接受陶造與更新，活出合主心意的榮美器皿。",
    "points": [
      "1. The clay marred in the hands of the potter (Human frailty and flaws)",
      "2. Remade on the wheel into another vessel (The re-creation of God's grace)",
      "3. Yielding completely to the potter's sovereign hand (A vessel fit for the Master's use)"
    ],
    "pointsZh": [
      "一、泥在窯匠手中做壞（生命的軟弱與瑕疵）",
      "二、轉輪上重塑新器皿（上帝恩典的再造）",
      "三、全然順服主手陶造（活出合乎主用的器皿）"
    ],
    "videoUrl": "",
    "videoPasscode": "25226",
    "showVideo": false,
    "showAudio": false
  },
  {
    "id": "sermon-20261018",
    "title": "From Many to One",
    "titleZh": "從許多到一個",
    "speaker": "Rev. Yijun Guo",
    "speakerZh": "郭易君 牧師",
    "date": "2026-10-18",
    "scripture": "Philippians 3:1-11",
    "scriptureZh": "腓立比書三章 1-11 節",
    "series": "Sunday Message",
    "seriesZh": "主日證道",
    "summary": "Sunday sermon delivered at Canaan Shin Sheng Christian Church by Rev. Yijun Guo on \"From Many to One\", reflecting on Philippians 3:1-11.",
    "summaryZh": "加南新生基督教會主日崇拜，郭易君 牧師證道傳講《從許多到一個》，分享經文「腓立比書三章 1-11 節」，勉勵弟兄姊妹放下世上諸多世俗牽掛，以認識耶穌基督為至寶，專一倚靠主並活出以基督為中心的生命。",
    "points": [
      "1. Guard against confidence in the flesh (Philippians 3:1-6)",
      "2. Counting all things as loss compared to knowing Christ (Philippians 3:7-9)",
      "3. Knowing the power of His resurrection and the fellowship of His suffering (Philippians 3:10-11)"
    ],
    "pointsZh": [
      "一、防備肉體的自誇與虛榮（腓立比書 3:1-6）",
      "二、以認識主基督耶穌為至寶（腓立比書 3:7-9）",
      "三、曉得基督復活的大能與同受苦（腓立比書 3:10-11）"
    ],
    "videoUrl": "",
    "videoPasscode": "25226",
    "showVideo": false,
    "showAudio": false
  },
  {
    "id": "sermon-20261011",
    "title": "The Lord Is the Vine, I Am the Branch",
    "titleZh": "主是葡萄樹，我是枝子",
    "speaker": "Brother Zhengyi Qiu",
    "speakerZh": "邱正一 弟兄",
    "date": "2026-10-11",
    "scripture": "John 15:4-5",
    "scriptureZh": "約翰福音十五章 4-5 節",
    "series": "Sunday Message",
    "seriesZh": "主日證道",
    "summary": "Sunday sermon delivered at Canaan Shin Sheng Christian Church by Brother Zhengyi Qiu on \"The Lord Is the Vine, I Am the Branch\", reflecting on John 15:4-5.",
    "summaryZh": "加南新生基督教會主日崇拜，邱正一 弟兄證道傳講《主是葡萄樹，我是枝子》，經文取自「約翰福音十五章 4-5 節」，勉勵弟兄姊妹常在主裡面，連於真葡萄樹，結出豐盛常存的屬靈果子。",
    "points": [
      "1. Abiding in Christ: The vital life connection (John 15:4)",
      "2. Apart from Him we can do nothing (John 15:5a)",
      "3. Bearing much fruit to glorify God the Father (John 15:5b)"
    ],
    "pointsZh": [
      "一、常在主裡面的生命連結（約翰福音 15:4）",
      "二、離了基督我們不能做什麼（約翰福音 15:5a）",
      "三、多結果子榮耀父神（約翰福音 15:5b）"
    ],
    "videoUrl": "",
    "videoPasscode": "25226",
    "showVideo": false,
    "showAudio": false
  },
  {
    "id": "sermon-20261004",
    "title": "How to Open Our Spiritual Eyes",
    "titleZh": "如何打開屬靈的眼睛",
    "speaker": "Elder Wansi",
    "speakerZh": "萬四 長老",
    "date": "2026-10-04",
    "scripture": "Ephesians 1:17-18, John 17:3, Philippians 3:10, Romans 8:18",
    "scriptureZh": "以弗所書 1:17-18, 約翰福音 17:3, 腓立比書 3:10, 羅馬書 8:18",
    "series": "Sunday Message",
    "seriesZh": "主日證道",
    "summary": "Sunday sermon delivered at Canaan Shin Sheng Christian Church by Elder Wansi on \"How to Open Our Spiritual Eyes\", reflecting on Ephesians 1:17-18, John 17:3, Philippians 3:10, Romans 8:18.",
    "summaryZh": "加南新生基督教會主日崇拜，萬四 長老證道傳講《如何打開屬靈的眼睛》，分享經文「以弗所書 1:17-18, 約翰福音 17:3, 腓立比書 3:10, 羅馬書 8:18」，勸勉弟兄姊妹憑信心看見神的作為，用愛看待身邊人，滿懷盼望仰望主。",
    "points": [
      "1. Opening the eyes of faith (Ephesians 1:17-18)",
      "2. Opening the eyes of love (John 17:3, Philippians 3:10)",
      "3. Opening the eyes of hope (Romans 8:18)"
    ],
    "pointsZh": [
      "一、打開信心的眼睛（以弗所書 1:17-18）",
      "二、打開愛的眼睛（約翰福音 17:3、腓立比書 3:10）",
      "三、打開盼望的眼睛（羅馬書 8:18）"
    ],
    "videoUrl": "",
    "videoPasscode": "25226",
    "showVideo": false,
    "showAudio": false
  },
  {
    "id": "sermon-20260927",
    "title": "Knowing the Gospel of Jesus Christ",
    "titleZh": "認識耶穌基督的福音",
    "speaker": "Brother Shaoxin Li",
    "speakerZh": "李紹信 弟兄",
    "date": "2026-09-27",
    "scripture": "Mark 1:1-15",
    "scriptureZh": "馬可福音第一章",
    "series": "Sunday Message",
    "seriesZh": "主日證道",
    "summary": "Sunday sermon delivered at Canaan Shin Sheng Christian Church by Brother Shaoxin Li on \"Knowing the Gospel of Jesus Christ\", reflecting on Mark 1.",
    "summaryZh": "加南新生基督教會主日崇拜，李紹信 弟兄證道傳講《認識耶穌基督的福音》，分享馬可福音第一章，帶領弟兄姊妹認識福音的根基、核心、傳揚與使命，忠心跟隨基督並傳承信仰。",
    "points": [
      "1. True vs. false gospel",
      "2. The foundation and core of the gospel",
      "3. Proclamation and heritage of the gospel",
      "4. The great mission of the gospel"
    ],
    "pointsZh": [
      "一、福音的真假與根基",
      "二、福音的核心與真理",
      "三、福音的傳揚與傳承",
      "四、福音的使命與行動"
    ],
    "videoUrl": "",
    "videoPasscode": "25226",
    "showVideo": false,
    "showAudio": false
  },
  {
    "id": "sermon-20260920",
    "title": "From Tabernacles to the New Heavens and New Earth - God's Tabernacle with Man",
    "titleZh": "從住棚到新天新地-神的帳幕在人間",
    "speaker": "Brother Fengzhi Cai",
    "speakerZh": "蔡豐智 弟兄",
    "date": "2026-09-20",
    "scripture": "Revelation 21:3",
    "scriptureZh": "啟示錄第 21 章第 3 節",
    "series": "Sunday Message",
    "seriesZh": "主日證道",
    "summary": "Sunday sermon delivered at Canaan Shin Sheng Christian Church by Brother Fengzhi Cai on \"From Tabernacles to the New Heavens and New Earth - God's Tabernacle with Man\", reflecting on Revelation 21:3.",
    "summaryZh": "加南新生基督教會主日崇拜，蔡豐智 弟兄透過啟示錄第 21 章第 3 節傳講《從住棚到新天新地-神的帳幕在人間》，記念住棚節背景，思想基督是活水與真光，盼望神永遠與人同在的應許。",
    "points": [
      "1. Remembering the past: Feast of Tabernacles background, traditions, and meaning",
      "2. Living in the present: Water and light in Tabernacles (Christ as Living Water and Light)",
      "3. Hopeful waiting for God's eternal presence: The new heaven and earth, God's dwelling with man"
    ],
    "pointsZh": [
      "1. 紀念過去：住棚節的背景，禮節與意義",
      "2. 活在當下：住棚節的水與光（基督是活水與世界的光）",
      "3. 盼望等候神永遠的同在：新天新地，神的帳幕在人間"
    ],
    "videoUrl": "",
    "videoPasscode": "25226",
    "showVideo": false,
    "showAudio": false
  },
  {
    "id": "sermon-20260913",
    "title": "A Ray of Hope",
    "titleZh": "一線生機",
    "speaker": "Rev. Sulun Meng",
    "speakerZh": "孟蘇倫 牧師",
    "date": "2026-09-13",
    "scripture": "Joshua 2:15-21",
    "scriptureZh": "約書亞記第二章第 15-21 節",
    "series": "Sunday Message",
    "seriesZh": "主日證道",
    "summary": "Sunday sermon delivered at Canaan Shin Sheng Christian Church by Rev. Sulun Meng on \"A Ray of Hope\", reflecting on Joshua 2:15-21.",
    "summaryZh": "加南新生基督教會主日崇拜，孟蘇倫 牧師證道傳講《一線生機》，經文取自「約書亞記第二章第 15-21 節」，以喇合窗上的朱紅線繩引領弟兄姊妹仰望十字架，深信在任何絕境中耶穌基督都是我們唯一的一線生機。",
    "points": [
      "1. Experiencing hope in hopeless situations",
      "2. Receiving deliverance in the face of judgment",
      "3. Life and hope within the promised boundaries",
      "Conclusion: The scarlet cord on the cross — Jesus Christ is the ray of hope for all humanity"
    ],
    "pointsZh": [
      "一、在絕境中經歷生機",
      "二、在審判時獲得生機",
      "三、界線之內才有生機",
      "結語：十字架上的朱紅線——耶穌基督是全人類的「一線生機」"
    ],
    "videoUrl": "",
    "videoPasscode": "25226",
    "showVideo": false,
    "showAudio": false
  }
];

export async function onRequestGet(context) {
  try {
    const url = new URL(context.request.url);
    const assetUrl = new URL("/canaan_master_data.json", url);
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
            source: "canaan_master_data.json"
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
      source: "edge_function_fallback"
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
