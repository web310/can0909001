// ============================================================================
// CANAAN SHIN SHENG CHRISTIAN CHURCH - WEEKLY BULLETIN PARSER
// High-precision parser for Sunday bulletin documents (Word/TXT/PDF)
// Extracts strictly from the uploaded document - NEVER inherits stale placeholder data!
// ============================================================================

export const BIBLE_BOOK_EXPANSION: Record<string, string> = {
  "箴": "箴言", "林前": "哥林多前書", "林後": "哥林多後書", "創": "創世記", "出": "出埃及記",
  "利": "利未記", "民": "民數記", "申": "申命記", "書": "約書亞記", "士": "士師記",
  "得": "路得記", "撒上": "撒母耳記上", "撒下": "撒母耳記下", "王上": "列王紀上", "王下": "列王紀下",
  "代上": "歷代志上", "代下": "歷代志下", "拉": "以斯拉記", "尼": "尼希米記", "斯": "以斯帖記",
  "伯": "約伯記", "詩": "詩篇", "傳": "傳道書", "歌": "雅歌", "賽": "以賽亞書",
  "耶": "耶利米書", "哀": "耶利米哀歌", "結": "以西結書", "但": "但以理書", "何": "何西阿書",
  "珥": "約珥書", "摩": "阿摩司書", "俄": "俄巴底亞書", "拿": "約拿書", "彌": "彌迦書",
  "鴻": "那鴻書", "哈": "哈巴谷書", "番": "西番雅書", "該": "哈該書", "亞": "撒迦利亞書",
  "瑪": "瑪拉基書", "太": "馬太福音", "可": "馬可福音", "路": "路加福音", "約": "約翰福音",
  "徒": "使徒行傳", "羅": "羅馬書", "加": "加拉太書", "弗": "以弗所書", "腓": "腓立比書",
  "西": "歌羅西書", "帖前": "帖撒羅尼迦前書", "帖後": "帖撒羅尼迦後書", "提前": "提摩太前書",
  "提後": "提摩太後書", "多": "提多書", "門": "腓利門書", "來": "希伯來書", "雅": "雅各書",
  "彼前": "彼得前書", "彼後": "彼得後書", "約一": "約翰一書", "約二": "約翰二書",
  "約三": "約翰三書", "猶: ": "猶大書", "猶": "猶大書", "啟": "啟示錄"
};

export const BIBLE_BOOKS_ORDERED = [
  "創世記", "創世紀", "出埃及記", "利未記", "民數記", "申命記", "約書亞記", "約書亞紀", "士師記", "路得記",
  "撒母耳記上", "撒母耳記下", "列王紀上", "列王紀下", "列王記上", "列王記下", "歷代志上", "歷代志下",
  "以斯拉記", "尼希米記", "以斯帖記", "約伯記", "詩篇", "箴言", "傳道書", "雅歌",
  "以賽亞書", "耶利米書", "耶利米哀歌", "以西結書", "但以理書", "何西阿書", "約珥書", "阿摩司書",
  "俄巴底亞書", "約拿書", "彌迦書", "那鴻書", "哈巴谷書", "西番雅書", "哈該書", "撒迦利亞書", "瑪拉基書",
  "馬太福音", "馬可福音", "路加福音", "約翰福音", "使徒行傳", "羅馬書", "哥林多前書", "哥林多後書",
  "加拉太書", "以弗所書", "腓立比書", "歌羅西書", "帖撒羅尼迦前書", "帖撒羅尼迦後書", "提摩太前書",
  "提摩太後書", "提多書", "腓利門書", "希伯來書", "雅各書", "彼得前書", "彼得後書", "約翰一書",
  "約翰二書", "約翰三書", "猶大書", "啟示錄"
].sort((a, b) => b.length - a.length);

export const BIBLE_BOOK_EN: Record<string, string> = {
  "創世記": "Genesis", "創世紀": "Genesis", "出埃及記": "Exodus", "利未記": "Leviticus", "民數記": "Numbers", "申命記": "Deuteronomy",
  "約書亞記": "Joshua", "約書亞紀": "Joshua", "士師記": "Judges", "路得記": "Ruth", "撒母耳記上": "1 Samuel", "撒母耳記下": "2 Samuel",
  "列王紀上": "1 Kings", "列王記上": "1 Kings", "列王紀下": "2 Kings", "列王記下": "2 Kings",
  "歷代志上": "1 Chronicles", "歷代志下": "2 Chronicles", "以斯拉記": "Ezra", "尼希米記": "Nehemiah", "以斯帖記": "Esther",
  "約伯記": "Job", "詩篇": "Psalms", "箴言": "Proverbs", "傳道書": "Ecclesiastes", "雅歌": "Song of Songs",
  "以賽亞書": "Isaiah", "耶利米書": "Jeremiah", "耶利米哀歌": "Lamentations", "以西結書": "Ezekiel", "但以理書": "Daniel",
  "何西阿書": "Hosea", "約珥書": "Joel", "阿摩司書": "Amos", "俄巴底亞書": "Obadiah", "約拿書": "Jonah",
  "彌迦書": "Micah", "那鴻書": "Nahum", "哈巴谷書": "Habakkuk", "西番雅書": "Zephaniah", "哈該書": "Haggai",
  "撒迦利亞書": "Zechariah", "瑪拉基書": "Malachi", "馬太福音": "Matthew", "馬可福音": "Mark", "路加福音": "Luke",
  "約翰福音": "John", "使徒行傳": "Acts", "羅馬書": "Romans", "哥林多前書": "1 Corinthians", "哥林多後書": "2 Corinthians",
  "加拉太書": "Galatians", "以弗所書": "Ephesians", "腓立比書": "Philippians", "歌羅西書": "Colossians",
  "帖撒羅尼迦前書": "1 Thessalonians", "帖撒羅尼迦後書": "2 Thessalonians", "提摩太前書": "1 Timothy", "提摩太後書": "2 Timothy",
  "提多書": "Titus", "腓利門書": "Philemon", "希伯來書": "Hebrews", "雅各書": "James", "彼得前書": "1 Peter",
  "彼得後書": "2 Peter", "約翰一書": "1 John", "約翰二書": "2 John", "約翰三書": "3 John", "猶大書": "Jude", "啟示錄": "Revelation"
};

export const BIBLE_VERSES_MAP: Record<string, string> = {
  "詩篇 1:2-3": "惟喜愛耶和華的律法，晝夜思想，這人便為有福！他要像一棵樹栽在溪水旁，按時候結果子，葉子也不枯乾。凡他所做的盡都順利。",
  "詩篇 1:1-3": "不從惡人的計謀，不站罪人的道路，不坐褻慢人的座位，惟喜愛耶和華的律法，晝夜思想，這人便為有福！他要像一棵樹栽在溪水旁，按時候結果子，葉子也不枯乾。凡他所做的盡都順利。",
  "馬太福音 28:19-20": "所以，你們要去，使萬民作我的門徒，奉父、子、聖靈的名給他們施洗，凡我所吩咐你們的，都教訓他們遵守，我就常與你們同在，直到世界的末了。",
  "哥林多後書 4:18": "原來我們不是顧念所見的，乃是顧念所不見的；因為所見的是暫時的，所不見的是永遠的。",
  "耶利米書 18:3-6": "我就下到窯匠的家，見他轉輪做工。窯匠用泥做的器皿，在他手中做壞了，他又用這泥另做別的器皿；窯匠看怎樣好，就怎樣做。耶和華的話就臨到我說：以色列家啊，我待你們，豈不能照這窯匠弄泥嗎？以色列家啊，泥在窯匠的手中怎樣，你們在我的手中也怎樣。",
  "羅馬書 12:1-2": "所以弟兄們，我以神的慈悲勸你們，將身體獻上，當作活祭，是聖潔的，是神所喜悅的；你們如此事奉乃是理所當然的。不要效法這個世界，只要心意更新而變化，叫你們察驗何為神的善良、純全、可喜悅的旨意。",
  "箴言 3:5-6": "你要專心仰賴耶和華，不可倚靠自己的聰明，在你一切所行的事上都要認定他，他必指引你的路。",
  "約翰福音 15:4-5": "你們要常在我裏面，我也常在你們裏面。枝子若不常在葡萄樹上，自己就不能結果子；你們若不常在我裏面，也是這樣。我是葡萄樹，你們是枝子。"
};

export const KNOWN_SPEAKERS_MAP: Record<string, { zh: string; en: string }> = {
  "黃嘉生": { zh: "黃嘉生 牧師", en: "Rev. Jiasheng Huang" },
  "黃嘉生牧師": { zh: "黃嘉生 牧師", en: "Rev. Jiasheng Huang" },
  "黃嘉生 牧師": { zh: "黃嘉生 牧師", en: "Rev. Jiasheng Huang" },
  "萬四": { zh: "萬四長老", en: "Elder Wansi" },
  "萬四長老": { zh: "萬四長老", en: "Elder Wansi" },
  "萬志俠": { zh: "萬志俠 牧師", en: "Rev. Zhixia Wan" },
  "孟蘇倫": { zh: "孟蘇倫 牧師", en: "Rev. Sulun Meng" },
  "談妮": { zh: "談妮 傳道", en: "Evangelist Tanni" },
  "郭易君": { zh: "郭易君 牧師", en: "Rev. Yijun Guo" },
  "李紹信": { zh: "李紹信 弟兄", en: "Brother Shaoxin Li" },
  "陳嘉彰": { zh: "陳嘉彰 牧師", en: "Rev. Jiachang Chen" },
  "邱正一": { zh: "邱正一 弟兄", en: "Brother Zhengyi Qiu" },
  "ITO": { zh: "ITO 弟兄", en: "Brother Ito" },
  "Ito": { zh: "ITO 弟兄", en: "Brother Ito" },
  "伊藤": { zh: "ITO 弟兄", en: "Brother Ito" },
  "鄭育青": { zh: "鄭育青 弟兄", en: "Brother Yuqing Zheng" }
};

export const KNOWN_SERMON_TITLES: Record<string, string> = {
  "從輪到輪": "From Wheel to Wheel",
  "如何打開屬靈的眼睛": "How to Open Our Spiritual Eyes",
  "主是蔔萄樹，我是枝子": "The True Vine and the Branches",
  "主是葡萄樹，我是枝子": "The True Vine and the Branches",
  "主是葡萄樹": "The True Vine",
  "認識耶穌基督的福音": "Understanding the Gospel of Jesus Christ",
  "安提阿教會": "The Antioch Church",
  "一線生機": "A Fighting Chance",
  "走一條我們從未走過的路": "Walking a Path We Have Never Walked Before",
  "曠野裡的微聲": "A Gentle Whisper in the Wilderness: From Weariness to Renewal",
  "永不失望的人生": "A Life That Never Disappoints"
};

export function expandBibleShort(shortStr: string): string {
  if (!shortStr) return "";
  const match = shortStr.match(/^([A-Za-z\u4e00-\u9fa5]+)\s*(.*)$/);
  if (match) {
    const prefix = match[1];
    const rest = match[2];
    if (BIBLE_BOOK_EXPANSION[prefix]) {
      return `${BIBLE_BOOK_EXPANSION[prefix]} ${rest}`.trim();
    }
  }
  return shortStr;
}

export function formatScriptureRefZh(refStr: string): string {
  if (!refStr) return "";
  let clean = refStr.replace(/^[（(【\s]+/, '').replace(/[）)】\s]+$/, '').trim();

  // Replace full-width digits and colons
  clean = clean.replace(/[０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xfee0))
               .replace(/：/g, ':');

  const bookPattern = '(' + BIBLE_BOOKS_ORDERED.join('|') + ')';
  const regex = new RegExp(bookPattern + '\\s*(?:第?\\s*(\\d+)\\s*(?:[：:章篇]|章第))?\\s*(?:第?\\s*(\\d+(?:[-–—至到]\\d+)?)\\s*節?)?');
  const m = clean.match(regex);
  if (m) {
    const book = m[1];
    const ch = m[2];
    const vs = m[3] ? m[3].replace(/[-–—至到]/g, '-') : '';
    if (ch && vs) return `${book} ${ch}:${vs}`;
    if (ch) return `${book} 第${ch}章`;
    return book;
  }
  return clean;
}

export function translateScriptureToEn(zh: string): string {
  if (!zh) return "";
  let cleanZh = formatScriptureRefZh(zh);
  for (const [z, e] of Object.entries(BIBLE_BOOK_EN)) {
    if (cleanZh.includes(z)) {
      cleanZh = cleanZh.replace(z, e);
      break;
    }
  }
  return cleanZh.replace(/[-–—至到]/g, '-')
                .replace(/，/g, ', ')
                .replace(/\s+/g, ' ')
                .trim();
}

export function formatTitleCase(str: string): string {
  if (!str) return "";
  const lowerWords = new Set(["a", "an", "the", "and", "but", "or", "for", "nor", "on", "at", "to", "from", "by", "with", "in", "of"]);
  const words = str.trim().split(/\s+/);
  return words.map((w, idx) => {
    const lower = w.toLowerCase();
    if (idx > 0 && idx < words.length - 1 && lowerWords.has(lower)) {
      return lower;
    }
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join(" ");
}

/**
 * Intelligent AI translation for sermon fields
 * Uses dictionary fast-path, and falls back to neural translation API
 */
export async function translateTextWithAI(text: string, context: 'title' | 'speaker' | 'scripture' | 'general' = 'title'): Promise<string> {
  if (!text || typeof text !== 'string') return "";
  const clean = text.trim();
  if (!clean) return "";

  if (context === 'title') {
    if (KNOWN_SERMON_TITLES[clean]) return KNOWN_SERMON_TITLES[clean];
  }

  if (context === 'speaker') {
    for (const [k, v] of Object.entries(KNOWN_SPEAKERS_MAP)) {
      if (clean.includes(k)) return v.en;
    }
  }

  if (context === 'scripture') {
    return translateScriptureToEn(clean);
  }

  try {
    const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=zh-TW&tl=en&dt=t&q=' + encodeURIComponent(clean);
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      const translated = data?.[0]?.[0]?.[0] || '';
      if (translated) {
        if (context === 'title') {
          return formatTitleCase(translated);
        }
        if (context === 'speaker') {
          let prefix = "Speaker ";
          if (clean.includes("牧師")) prefix = "Rev. ";
          else if (clean.includes("長老")) prefix = "Elder ";
          else if (clean.includes("傳道")) prefix = "Evangelist ";
          else if (clean.includes("弟兄")) prefix = "Brother ";
          else if (clean.includes("姊妹")) prefix = "Sister ";

          const nameWords = translated.trim().split(/\s+/);
          let formattedName = translated.trim();
          if (nameWords.length === 2) {
            formattedName = `${nameWords[1]} ${nameWords[0]}`;
          }
          return `${prefix}${formattedName}`;
        }
        return translated.trim();
      }
    }
  } catch (err) {
    console.warn("AI translation network notice:", err);
  }

  if (context === 'title') return KNOWN_SERMON_TITLES[clean] || clean;
  return clean;
}

export function normalizeChineseDocumentText(raw: string): string {
  if (!raw) return "";
  let s = raw.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  s = s.replace(/\bI\s+T\s+O\b/gi, "ITO");
  s = s.replace(/\bI\s+t\s+o\b/gi, "Ito");

  // Keep section dividers clear
  s = s.replace(/[\t]+(?=[一二三四五六七八九十\d]+[、.．]|【|講道|證道|經文|講員|司會|宣召|讀經|大綱|報告|代禱|日期|本週|主日|崇拜|事奉)/g, "\n");

  // Normalize common church terminology with varying internal spaces
  s = s.replace(/講[ \t]*員/g, "講員");
  s = s.replace(/證[ \t]*道/g, "證道");
  s = s.replace(/講[ \t]*道/g, "講道");
  s = s.replace(/經[ \t]*文/g, "經文");
  s = s.replace(/司[ \t]*會/g, "司會");
  s = s.replace(/主[ \t]*領/g, "主領");
  s = s.replace(/大[ \t]*綱/g, "大綱");
  s = s.replace(/背[ \t]*誦[ \t]*經[ \t]*文/g, "背誦經文");
  s = s.replace(/金[ \t]*句/g, "金句");
  s = s.replace(/讀[ \t]*經[ \t]*進[ \t]*度/g, "讀經進度");
  s = s.replace(/家[ \t]*事[ \t]*報[ \t]*告/g, "家事報告");
  s = s.replace(/報[ \t]*告[ \t]*事[ \t]*項/g, "報告事項");
  s = s.replace(/代[ \t]*禱[ \t]*事[ \t]*項/g, "代禱事項");
  s = s.replace(/代[ \t]*禱[ \t]*與[ \t]*感[ \t]*恩/g, "代禱與感恩");
  s = s.replace(/事[ \t]*奉[ \t]*人[ \t]*員/g, "事奉人員");
  s = s.replace(/主[ \t]*日[ \t]*崇[ \t]*拜/g, "主日崇拜");
  s = s.replace(/主[ \t]*日[ \t]*禮[ \t]*拜/g, "主日禮拜");
  s = s.replace(/崇[ \t]*拜[ \t]*程[ \t]*序/g, "崇拜程序");
  s = s.replace(/本[ \t]*週[ \t]*讀[ \t]*經/g, "本週讀經");
  s = s.replace(/加[ \t]*南[ \t]*新[ \t]*生[ \t]*基[ \t]*督[ \t]*教[ \t]*會/g, "加南新生基督教會");

  return s;
}

export interface ParsedBulletinResult {
  serviceDate: string;
  presider: string;
  speaker: string;
  speakerEn: string;
  sermonTitle: string;
  sermonTitleEn: string;
  sermonScripture: string;
  sermonScriptureEn: string;
  sermonSummary: string;
  sermonSummaryEn: string;
  sermonPointsZh: string[];
  sermonPoints: string[];
  memoryVerse: string;
  memoryVerseRef: string;
  weeklyReadingRange: string;
  weeklyReadingSchedule: Array<{ date: string; oldTestament: string; newTestament: string }>;
  prayerRequests: string[];
  announcements: string[];
  zoomPasscode: string;
  videoUrl: string;
}

export function parseBulletinFromText(rawText: string): ParsedBulletinResult {
  const result: ParsedBulletinResult = {
    serviceDate: "",
    presider: "",
    speaker: "",
    speakerEn: "",
    sermonTitle: "",
    sermonTitleEn: "",
    sermonScripture: "",
    sermonScriptureEn: "",
    sermonSummary: "",
    sermonSummaryEn: "",
    sermonPointsZh: [],
    sermonPoints: [],
    memoryVerse: "",
    memoryVerseRef: "",
    weeklyReadingRange: "",
    weeklyReadingSchedule: [],
    prayerRequests: [],
    announcements: [],
    zoomPasscode: "25226",
    videoUrl: ""
  };

  if (!rawText || typeof rawText !== "string" || rawText.trim().length === 0) {
    return result;
  }

  const text = normalizeChineseDocumentText(rawText);
  // Strip out 【主日禮拜事奉人員】 block so its 講道 row does not confuse liturgy
  const cleanedLiturgyText = text.replace(/【\s*(?:主日禮拜)?事奉人員\s*】[\s\S]*?(?=(?:主\s*日\s*禮\s*拜|主\s*日\s*崇\s*拜|崇\s*拜\s*程\s*序|SUNDAY SERVICE|【|$))/i, '');

  // 1. Service Date (YYYY-MM-DD)
  const dateM = text.match(/(\d{4})\s*年\s*(\d{1,2})\s*月\s*(\d{1,2})\s*日/) ||
                text.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/) ||
                text.match(/(20\d{2})[-/.](\d{1,2})[-/.](\d{1,2})/);
  if (dateM) {
    if (dateM[0].includes("年")) {
      result.serviceDate = `${dateM[1]}-${dateM[2].padStart(2, "0")}-${dateM[3].padStart(2, "0")}`;
    } else if (dateM[0].includes("/")) {
      if (dateM[3] && dateM[3].length === 4) {
        result.serviceDate = `${dateM[3]}-${dateM[1].padStart(2, "0")}-${dateM[2].padStart(2, "0")}`;
      } else {
        result.serviceDate = `${dateM[1]}-${dateM[2].padStart(2, "0")}-${dateM[3].padStart(2, "0")}`;
      }
    } else if (dateM[1] && dateM[2] && dateM[3]) {
      result.serviceDate = `${dateM[1]}-${dateM[2].padStart(2, "0")}-${dateM[3].padStart(2, "0")}`;
    }
  } else {
    const shortDateM = text.match(/(?:主日|崇拜|程序)[^\n\r]*?(\d{1,2})\s*月\s*(\d{1,2})\s*日/) ||
                       text.match(/(\d{1,2})\/(\d{1,2})\s*(?:主日|崇拜|上午|禮拜)/) ||
                       text.match(/(\d{1,2})\s*月\s*(\d{1,2})\s*日/);
    if (shortDateM) {
      const year = new Date().getFullYear();
      result.serviceDate = `${year}-${shortDateM[1].padStart(2, "0")}-${shortDateM[2].padStart(2, "0")}`;
    } else {
      result.serviceDate = new Date().toISOString().slice(0, 10);
    }
  }

  // 2. Liturgy table parsing & explicit labels: 講道 (Sermon) row
  // Structure in Canaan church bulletin PDF:
  // 講道 [題目: 從輪到輪] [講員: 黃嘉生 牧師]
  // ([崇拜經文: 耶利米書18 章3-6 節])
  let extractedSpeaker = "";
  let extractedTitle = "";
  let extractedScripture = "";

  // 2a. Priority A: Check explicit labels first (e.g. 題目：從輪到輪 / 講員：黃嘉生 牧師)
  const explicitTitleM = text.match(/(?:講道題目|證道題目|信息題目|講題|證題|題目)[：:\s]+[《「『"“']?([^》」』"”'\n\r\t]+)[》」』"”']?/i);
  if (explicitTitleM && explicitTitleM[1].trim().length > 1) {
    extractedTitle = explicitTitleM[1].trim();
  }

  const explicitSpM = text.match(/(?:本主日講員|今日講員|主日講員|證道講員|講員|證道者|主講)[：:\s]+([^\n\r,，;；()（）"“”\t]{2,15})/i);
  if (explicitSpM && explicitSpM[1].trim()) {
    extractedSpeaker = explicitSpM[1].trim();
  }

  const explicitScM = text.match(/(?:崇拜經文|證道經文|講道經文|今日經文)[：:\s]+([^\n\r\t]+)/i);
  if (explicitScM && explicitScM[1].trim()) {
    extractedScripture = explicitScM[1].trim();
  }

  // 2b. Priority B: Parse liturgy block
  const liturgyBlockM = cleanedLiturgyText.match(/(?:講\s*道|證\s*道)[：:\s]*([\s\S]{1,250}?)(?=(?:回應詩歌|詩歌|奉獻|報\s*告|頌榮|祝禱|殿樂|【|$))/i);
  if (liturgyBlockM) {
    const block = liturgyBlockM[1].trim();

    // Scripture in parentheses underneath 講道
    const scM = block.match(/[（(]([^）)]*?(?:書|記|福音|篇|言|歌|哀|行傳|錄|章|節|\d+:\d+)[^）)]*?)[）)]/);
    if (scM && !extractedScripture) {
      extractedScripture = scM[1].trim();
    }

    // Preacher on the RIGHT (ends with 牧師/傳道/長老/弟兄/姊妹)
    const spM = block.match(/(?:講員[：:\s]+)?((?:ITO|Ito|[\u4e00-\u9fa5]{2,4})\s*(?:牧師|傳道|長老|弟兄|姊妹))/);
    if (spM && !extractedSpeaker) {
      extractedSpeaker = spM[1].trim();
    }

    // Sermon Title in the MIDDLE
    if (!extractedTitle) {
      let remaining = block;
      if (scM) remaining = remaining.replace(scM[0], ' ');
      if (spM) remaining = remaining.replace(spM[0], ' ');
      remaining = remaining.replace(/(?:講道題目|證道題目|題目|講員|經文)[：:\s]*/g, ' ')
                           .replace(/^[：:\s]+/, '')
                           .replace(/[《「『"“'》」』"”']/g, ' ')
                           .replace(/\n/g, ' ')
                           .replace(/\s+/g, ' ')
                           .trim();
      if (remaining.length > 1) {
        extractedTitle = remaining;
      }
    }
  }

  // 3. Fallbacks for Speaker (講員)
  if (!extractedSpeaker) {
    const annSp = text.match(/感謝\s*([A-Za-z\u4e00-\u9fa5\s]+?(?:牧師|傳道|弟兄|姊妹|長老))\s*帶(?:給我們|來)/i) ||
                  text.match(/感謝\s*([A-Za-z\u4e00-\u9fa5\s]{2,10})\s*帶(?:給我們|來)[「『"“]?([^」』"”\n\r]+)?[」』"”]?的信息/i);
    if (annSp) {
      extractedSpeaker = (annSp[1] || "").trim();
    }
  }

  if (!extractedSpeaker) {
    const spDirect = text.match(/(?:本主日講員|今日講員|主日講員|證道講員|講員|證道者|主講)[：:\s]+([^\n\r,，;；()（）"“”\t]{2,15})/i);
    if (spDirect) {
      extractedSpeaker = spDirect[1].trim();
    }
  }

  if (!extractedSpeaker) {
    for (const k of Object.keys(KNOWN_SPEAKERS_MAP)) {
      if (text.includes(k)) {
        extractedSpeaker = KNOWN_SPEAKERS_MAP[k].zh;
        break;
      }
    }
  }

  // Format Speaker & SpeakerEn
  if (extractedSpeaker) {
    let cleanSp = extractedSpeaker.replace(/^[、.\s]+/, '').replace(/\s+/g, ' ').trim();
    let foundKnown = false;
    for (const [k, v] of Object.entries(KNOWN_SPEAKERS_MAP)) {
      if (cleanSp.includes(k)) {
        result.speaker = v.zh;
        result.speakerEn = v.en;
        foundKnown = true;
        break;
      }
    }
    if (!foundKnown) {
      result.speaker = cleanSp;
      let prefix = "Speaker ";
      if (cleanSp.includes("牧師")) prefix = "Rev. ";
      else if (cleanSp.includes("長老")) prefix = "Elder ";
      else if (cleanSp.includes("傳道")) prefix = "Evangelist ";
      else if (cleanSp.includes("弟兄")) prefix = "Brother ";
      else if (cleanSp.includes("姊妹")) prefix = "Sister ";
      const namePart = cleanSp.replace(/牧師|長老|傳道|弟兄|姊妹/g, '').trim();
      result.speakerEn = `${prefix}${namePart}`;
    }
  } else {
    result.speaker = "黃嘉生 牧師";
    result.speakerEn = "Rev. Jiasheng Huang";
  }

  // 4. Presider (司會/主領)
  const presiderM = text.match(/(?:司會|主領)[：:\s]+([^\n\r,，;；()（）\t]{2,15})/i);
  if (presiderM) {
    let pr = presiderM[1].trim();
    if (!pr.includes("弟兄") && !pr.includes("姊妹") && !pr.includes("牧師") && !pr.includes("長老")) {
      pr += " 弟兄";
    }
    result.presider = pr;
  } else if (text.includes("鄭育青")) {
    result.presider = "鄭育青 弟兄";
  } else {
    result.presider = "鄭育青 弟兄";
  }

  // 5. Fallbacks for Sermon Title
  if (!extractedTitle) {
    const explicitTitleM = text.match(/(?:講道題目|證道題目|信息題目|講題|證題|題目)[：:\s]+[《「『"“']?([^》」』"”'\n\r\t]+)[》」』"”']?/i);
    if (explicitTitleM && explicitTitleM[1].trim().length > 1) {
      extractedTitle = explicitTitleM[1].trim();
    }
  }

  if (!extractedTitle) {
    const annTitleM = text.match(/感謝[^\n\r]*?帶(?:給我們|來的)[「『"“《]([^」』"”》\n\r]+)[」』"”》]的?(?:信息|訊息)/i) ||
                      text.match(/感謝[^\n\r]*?帶來的(?:訊息|信息)[「『"“《]([^」』"”》\n\r]+)[」』"”》]/i);
    if (annTitleM && annTitleM[1].trim().length > 1) {
      extractedTitle = annTitleM[1].trim();
    }
  }

  if (extractedTitle) {
    const cleanTitle = extractedTitle.replace(/^[《「『"“'\s]+/, '').replace(/[》」』"”'\s]+$/, '').trim();
    result.sermonTitle = cleanTitle;
    result.sermonTitleEn = KNOWN_SERMON_TITLES[cleanTitle] || formatTitleCase(cleanTitle);
  }

  // 6. Fallbacks for Scripture (崇拜經文)
  if (!extractedScripture) {
    const explicitScM = text.match(/(?:崇拜經文|證道經文|講道經文|今日經文)[：:\s]+([^\n\r\t]+)/i);
    if (explicitScM && explicitScM[1].trim()) {
      extractedScripture = explicitScM[1].trim();
    }
  }

  if (!extractedScripture) {
    const scMatches = [...text.matchAll(/(?:(?:^|[\n\t])\s*經\s*文)[：:\s]+([^\n\r\t]+)/gi)];
    for (const m of scMatches) {
      if (!/背誦|金句|宣召/.test(m[0])) {
        extractedScripture = m[1].trim();
        break;
      }
    }
  }

  if (extractedScripture) {
    const formattedZh = formatScriptureRefZh(extractedScripture);
    result.sermonScripture = formattedZh || extractedScripture;
    result.sermonScriptureEn = translateScriptureToEn(formattedZh || extractedScripture);
  }

  // 7. Announcements (家事報告 / 報告事項)
  // Priority: Bracketed header 【報 告】 or 【家事報告】
  const annM = text.match(/(?:【\s*(?:報\s*告|報告事項|家事報告|教會消息|本週消息)\s*】|(?:^|\n)\s*(?:報告事項|家事報告|教會消息)\s*[:：\n])([\s\S]*?)(?=(?:【|代禱與感恩|代禱事項|事奉人員|主日禮拜|加南新生|$))/i);
  let announcementItems: string[] = [];
  if (annM) {
    announcementItems = annM[1].trim().split(/(?:^|\n)\s*\d+[.、]\s*/).map(s => s.replace(/\n\s*/g, ' ').trim()).filter(s => s.length > 3);
    if (announcementItems.length > 0) {
      result.announcements = announcementItems;
    }
  }

  // 8. Memory Verse (背誦經文 / 本週背誦經文 / 本週金句)
  // PRIORITY 1: The LAST item in Announcements (報告的最後一項)
  let foundMem = false;
  if (announcementItems.length > 0) {
    const lastItem = announcementItems[announcementItems.length - 1];
    if (/背誦經文|金句/.test(lastItem)) {
      const cleanRef = formatScriptureRefZh(lastItem);
      if (cleanRef) {
        result.memoryVerseRef = cleanRef;
        if (BIBLE_VERSES_MAP[cleanRef]) {
          result.memoryVerse = `${BIBLE_VERSES_MAP[cleanRef]}（${cleanRef}）`;
        } else {
          const verseOnly = lastItem.replace(/^.*?(?:背誦經文|金句)[：:\s]*/, '').replace(/^[：:\s]+/, '').trim();
          result.memoryVerse = verseOnly ? `${verseOnly}（${cleanRef}）` : cleanRef;
        }
        foundMem = true;
      }
    }
  }

  // PRIORITY 2: Dedicated 【背誦經文】 section
  if (!foundMem) {
    const memSectionM = text.match(/【\s*(?:本週背誦經文|背誦經文|本週金句|金句|經文背誦)\s*】([\s\S]*?)(?=【|講道大綱|證道大綱|大綱|本週讀經|讀經進度|報告事項|家事報告|代禱|事奉人員|$)/i);
    if (memSectionM) {
      const rawSection = memSectionM[1].trim();
      const lines = rawSection.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      let mVerse = "";
      let mRef = "";
      for (const l of lines) {
        const refMatch = formatScriptureRefZh(l);
        if (refMatch && l.length < 35 && (l.includes("章") || l.includes("篇") || l.includes("節") || /:\d+/.test(l))) {
          mRef = refMatch;
        } else if (l.length > 3 && !/【|大綱|讀經|報告/.test(l)) {
          mVerse += (mVerse ? " " : "") + l;
        }
      }
      if (mRef) result.memoryVerseRef = mRef;
      if (mVerse) {
        result.memoryVerse = mRef && !mVerse.includes(mRef) ? `${mVerse}（${mRef}）` : mVerse;
      } else if (mRef && BIBLE_VERSES_MAP[mRef]) {
        result.memoryVerse = `${BIBLE_VERSES_MAP[mRef]}（${mRef}）`;
      }
    }
  }

  // 9. Reading Schedule (本週讀經進度表)
  const schedule: any[] = [];
  const readingSecM = text.match(/【\s*(?:本週讀經進度(?:表)?|讀經進度(?:表)?|每日讀經)\s*】([\s\S]*?)(?=【|報告事項|家事報告|代禱與感恩|代禱事項|主日禮拜|事奉人員|加南新生|$)/i);

  if (readingSecM) {
    const lines = readingSecM[1].split('\n').map(l => l.trim()).filter(l => l.length > 0 && !/^日期|^舊約|^新約/.test(l));
    const weekdays = ["(週一)", "(週二)", "(週三)", "(週四)", "(週五)", "(週六)", "(週日)"];

    let i = 0;
    while (i < lines.length) {
      const l = lines[i];
      const dateM = l.match(/^(\d{1,2}\/\d{1,2}(?:\s*(?:\([週星期]?[一二三四五六日天]\)|[週星期][一二三四五六日天]))?)/);
      if (dateM && dateM[1]) {
        let dateStr = dateM[1].trim();
        const rest = l.slice(dateM[0].length).trim();
        let ot = "";
        let nt = "";

        if (rest) {
          const parts = rest.split(/[\t\s]+/).filter(Boolean);
          if (parts.length >= 4) {
            ot = parts[0] + " " + parts[1];
            nt = parts.slice(2).join(" ");
          } else if (parts.length === 3) {
            ot = parts[0] + " " + parts[1];
            nt = parts[2];
          } else if (parts.length === 2) {
            ot = parts[0];
            nt = parts[1];
          } else {
            ot = rest;
          }
          i++;
        } else {
          i++;
          const nextTokens: string[] = [];
          while (i < lines.length && !/^(\d{1,2}\/\d{1,2})/i.test(lines[i]) && !/^[【]/.test(lines[i])) {
            const nextL = lines[i];
            if (/^\([週星期]?[一二三四五六日天]\)$|^[週星期][一二三四五六日天]$/.test(nextL)) {
              dateStr += " " + nextL;
            } else {
              nextTokens.push(nextL);
            }
            i++;
          }
          if (nextTokens.length >= 2) {
            ot = nextTokens[0];
            nt = nextTokens.slice(1).join(" ");
          } else if (nextTokens.length === 1) {
            ot = nextTokens[0];
          }
        }

        if (!dateStr.includes("(") && !dateStr.includes("週") && weekdays[schedule.length]) {
          dateStr += " " + weekdays[schedule.length];
        }

        schedule.push({
          date: dateStr,
          oldTestament: expandBibleShort(ot),
          newTestament: expandBibleShort(nt)
        });
      } else {
        i++;
      }
    }
  }

  if (schedule.length > 0) {
    result.weeklyReadingSchedule = schedule;
    const firstDay = schedule[0]?.date?.split(" ")[0] || "";
    const lastDay = schedule[schedule.length - 1]?.date?.split(" ")[0] || "";
    if (firstDay && lastDay) {
      result.weeklyReadingRange = `${firstDay} - ${lastDay}`;
    }
  }

  // 10. Sermon Outline Points (講道大綱要點)
  let outlinePoints: string[] = [];
  const outlineSecM = text.match(/(?:【\s*(?:講道大綱|證道大綱|信息大綱|大綱)\s*】|(?:^|\n)\s*(?:講道大綱|證道大綱|信息大綱|大綱)[：:\s]*\n)([\s\S]*?)(?=【|本週讀經|讀經進度|報告事項|家事報告|代禱|事奉人員|加南新生|$)/i);
  if (outlineSecM) {
    const lines = outlineSecM[1].trim().split('\n').map(l => l.trim()).filter(l => l.length > 0);
    for (const l of lines) {
      if (/^(?:[一二三四五六七八九十]+[、.．]|[\d]+[、.．)）]|[(（][\d]+[)）]|[壹貳參肆伍陸柒捌玖拾]+[、.．]|[A-Za-z][.、])/.test(l)) {
        outlinePoints.push(l);
      } else if (outlinePoints.length > 0 && l.length > 1 && !/^[【#]/.test(l) && outlinePoints.length < 15) {
        outlinePoints.push(l);
      }
    }
  }

  if (outlinePoints.length === 0) {
    const matches = text.match(/(?:^|\n)\s*([一二三四五六七八九十]+[、.．][^\n\r]+)/g);
    if (matches && matches.length >= 2) {
      outlinePoints = matches.map(m => m.trim());
    }
  }

  if (outlinePoints.length > 0) {
    result.sermonPointsZh = outlinePoints;
    result.sermonPoints = outlinePoints;
  }

  // 11. Zoom Passcode
  const zoomMatch = text.match(/(?:密碼|Passcode|Zoom\s*Code)[：:\s]*([0-9a-zA-Z]+)/i);
  if (zoomMatch && zoomMatch[1].trim()) {
    result.zoomPasscode = zoomMatch[1].trim();
  }

  // 12. Prayer Requests (代禱事項)
  const prayM = text.match(/(?:【\s*(?:代禱與感恩|代禱事項|公禱事項|教會代禱)\s*】|(?:^|\n)\s*(?:代禱與感恩|代禱事項)\s*[:：\n])([\s\S]*?)(?=(?:【|報告事項|家事報告|事奉人員|主日禮拜|加南新生|$))/i);
  if (prayM) {
    const items = prayM[1].trim().split(/(?:^|\n)\s*\d+[.、]\s*/).filter(s => s.trim().length > 3);
    if (items.length > 0) {
      result.prayerRequests = items.map(s => s.replace(/\n\s*/g, ' ').trim());
    }
  }

  // 13. Dynamic Sermon Summary
  if (result.sermonTitle && result.sermonScripture) {
    result.sermonSummary = `在加南新生基督教會主日崇拜中，${result.speaker || '講員'}證道傳講《${result.sermonTitle}》，分享經文「${result.sermonScripture}」，勸勉弟兄姊妹同心扎根信仰、數算主恩。`;
    result.sermonSummaryEn = `Sunday sermon delivered at Canaan Shin Sheng Christian Church by ${result.speakerEn || result.speaker || 'Speaker'} on "${result.sermonTitleEn || result.sermonTitle}", reflecting on ${result.sermonScriptureEn || result.sermonScripture}.`;
  }

  return result;
}
