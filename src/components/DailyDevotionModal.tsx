import React, { useState, useEffect } from 'react';
import { DailyDevotion, DAILY_DEVOTIONS } from '../data/dailyDevotionData';
import { Language } from '../types';
import {
  X,
  BookOpen,
  Calendar,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  Sun,
  Quote,
  Search,
  ChevronLeft,
  ChevronRight,
  RotateCcw
} from 'lucide-react';

interface DailyDevotionModalProps {
  isOpen: boolean;
  onClose: () => void;
  devotion: DailyDevotion;
  formattedDateZh: string;
  formattedDateEn: string;
  lang: Language;
}

export const DailyDevotionModal: React.FC<DailyDevotionModalProps> = ({
  isOpen,
  onClose,
  devotion,
  formattedDateZh,
  formattedDateEn,
  lang
}) => {
  const [activeDevotion, setActiveDevotion] = useState<DailyDevotion>(devotion);
  const [copied, setCopied] = useState(false);
  const [fontScale, setFontScale] = useState<'normal' | 'large' | 'huge'>('large');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [dateInputVal, setDateInputVal] = useState(activeDevotion.dateStr || '2026-09-17');

  // Sync activeDevotion with incoming devotion prop when opened or updated
  useEffect(() => {
    setActiveDevotion(devotion);
    if (devotion.dateStr) {
      setDateInputVal(devotion.dateStr);
    }
  }, [devotion, isOpen]);

  if (!isOpen) return null;

  // Compute active devotion details
  const isToday = activeDevotion.id === devotion.id || activeDevotion.dateStr === devotion.dateStr;
  const currentIndex = DAILY_DEVOTIONS.findIndex(d => d.id === activeDevotion.id);

  // Format date display for currently active devotion
  let activeDateText = lang === 'zh' ? formattedDateZh : formattedDateEn;
  if (!isToday && activeDevotion.dateStr) {
    const parts = activeDevotion.dateStr.split('-');
    if (parts.length === 3) {
      const y = parseInt(parts[0], 10);
      const m = parseInt(parts[1], 10);
      const d = parseInt(parts[2], 10);
      activeDateText = lang === 'zh' ? `${y}年${m}月${d}日` : `${m}/${d}/${y}`;
    }
  }

  const title = lang === 'zh' ? (activeDevotion.titleZh || '今日靈修') : (activeDevotion.titleEn || 'Daily Devotion');
  const verse = lang === 'zh' ? activeDevotion.verseZh : activeDevotion.verseEn;
  const reference = lang === 'zh' ? activeDevotion.referenceZh : activeDevotion.referenceEn;
  const reading = lang === 'zh' ? (activeDevotion.passageReadingZh || activeDevotion.referenceZh) : (activeDevotion.passageReadingEn || activeDevotion.referenceEn);
  const author = lang === 'zh' ? (activeDevotion.authorZh || '靈命日糧同工') : (activeDevotion.authorEn || 'Our Daily Bread Ministries');
  const reflection = lang === 'zh' ? activeDevotion.reflectionZh : activeDevotion.reflectionEn;
  const prayer = lang === 'zh' ? activeDevotion.prayerZh : activeDevotion.prayerEn;
  const thought = lang === 'zh' ? activeDevotion.thoughtZh : activeDevotion.thoughtEn;
  const content = lang === 'zh' ? activeDevotion.contentZh : activeDevotion.contentEn;
  const odbmUrl = activeDevotion.sourceUrl || 'https://www.odbm.org/tc/devotionals';

  // Available quick dates for quick switching
  const quickDateItems = [
    { dateStr: '2026-09-17', labelZh: '今天 9/17', labelEn: 'Today 9/17', tag: '仰望上帝' },
    { dateStr: '2026-09-16', labelZh: '昨天 9/16', labelEn: 'Yesterday 9/16', tag: '永恆生命' },
    { dateStr: '2026-09-15', labelZh: '9/15', labelEn: '9/15', tag: '忍耐寬容' },
    { dateStr: '2026-09-14', labelZh: '9/14', labelEn: '9/14', tag: '警醒防備' },
    { dateStr: '2026-09-13', labelZh: '9/13', labelEn: '9/13', tag: '致命迷思' },
    { dateStr: '2026-09-12', labelZh: '9/12', labelEn: '9/12', tag: '堅忍喜樂' },
    { dateStr: '2026-09-10', labelZh: '9/10', labelEn: '9/10', tag: '慷慨典範' },
  ];

  // Filtered devotionals based on search query
  const filteredDevotions = searchQuery.trim()
    ? DAILY_DEVOTIONS.filter(item => {
        const raw = searchQuery.trim().toLowerCase();
        // Normalize date searches like "9/17", "09/17", "9-17", "9月17日", "2026-09-17"
        const cleanDate = raw.replace(/月/, '-').replace(/日/, '').replace(/\//g, '-');

        const tZh = (item.titleZh || '').toLowerCase();
        const tEn = (item.titleEn || '').toLowerCase();
        const rZh = (item.referenceZh || '').toLowerCase();
        const rEn = (item.referenceEn || '').toLowerCase();
        const pZh = (item.passageReadingZh || '').toLowerCase();
        const pEn = (item.passageReadingEn || '').toLowerCase();
        const vZh = (item.verseZh || '').toLowerCase();
        const cZh = (item.contentZh || '').toLowerCase();
        const dStr = (item.dateStr || '').toLowerCase();

        const matchDate = dStr.includes(raw) || dStr.includes(cleanDate) ||
          (raw === '今天' && (item.id === devotion.id || item.dateStr === devotion.dateStr)) ||
          (raw === '昨天' && item.dateStr === '2026-09-16');

        return matchDate || tZh.includes(raw) || tEn.includes(raw) || rZh.includes(raw) || rEn.includes(raw) ||
          pZh.includes(raw) || pEn.includes(raw) || vZh.includes(raw) || cZh.includes(raw);
      })
    : [];

  const handleSelectDate = (dateVal: string) => {
    setDateInputVal(dateVal);
    const match = DAILY_DEVOTIONS.find(d => d.dateStr === dateVal);
    if (match) {
      setActiveDevotion(match);
      setSearchQuery('');
      setShowSearchDropdown(false);
    } else {
      // If date is not in local archive, open search prompt
      setSearchQuery(dateVal);
      setShowSearchDropdown(true);
    }
  };

  const handleCopy = () => {
    const textToCopy = lang === 'zh'
      ? `【加南今日經文靈修 • ${activeDateText}】\n主題：《${title}》\n讀經：${reading}\n\n📖 今日經文：\n“${verse}”（${reference}）\n\n💡 反思：\n${reflection}\n\n🙏 禱告：\n${prayer}\n\n🌱 勉勵默想：\n${thought}\n\n🌐 靈修出處：靈命日糧 (www.odbm.org/tc/devotionals)\n加南新生基督教會 祝福您！`
      : `[Canaan Daily Devotion • ${activeDateText}]\nTitle: "${title}"\nPassage: ${reading}\n\n📖 Today's Scripture:\n"${verse}" (${reference})\n\n💡 Reflection:\n${reflection}\n\n🙏 Prayer:\n${prayer}\n\n🌱 Devotional Thought:\n${thought}\n\n🌐 Source: Our Daily Bread (www.odbm.org)\nCanaan Shin Sheng Christian Church wishes you a blessed day!`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveDevotion(DAILY_DEVOTIONS[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < DAILY_DEVOTIONS.length - 1) {
      setActiveDevotion(DAILY_DEVOTIONS[currentIndex + 1]);
    }
  };

  const handleResetToToday = () => {
    setActiveDevotion(devotion);
    setSearchQuery('');
    setShowSearchDropdown(false);
  };

  return (
    <div
      className="fixed inset-0 z-60 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-amber-200/80 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-950 text-white p-5 sm:p-6 shrink-0 relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-400/15 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-start justify-between gap-4 relative z-10">
            <div className="space-y-1.5 flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/25 border border-amber-400/40 text-amber-200 tracking-wide">
                  <Sun className="w-3.5 h-3.5 text-amber-300" />
                  <span>{lang === 'zh' ? '靈命日糧 • 今日靈修' : 'Our Daily Bread • Devotional'}</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/25 border border-emerald-400/30 text-emerald-200">
                  <Calendar className="w-3 h-3 text-emerald-300" />
                  <span>{activeDateText}</span>
                  {isToday && (
                    <span className="text-[10px] bg-emerald-400/30 px-1.5 py-0.2 rounded font-bold ml-1">
                      {lang === 'zh' ? '今天' : 'Today'}
                    </span>
                  )}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-50 tracking-tight pt-1 truncate">
                {title}
              </h2>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-amber-200/90 font-medium">
                {author && (
                  <span>
                    {lang === 'zh' ? `作者：${author}` : `Author: ${author}`}
                  </span>
                )}
                {reading && (
                  <span>
                    {lang === 'zh' ? `讀經：${reading}` : `Reading: ${reading}`}
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons: 搜尋當天靈命日糧 / Font scaler / Close */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={odbmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold text-xs sm:text-sm transition-all shadow-sm cursor-pointer"
                title={lang === 'zh' ? '前往靈命日糧官方網站 (www.odbm.org/tc/devotionals) 搜尋閱讀當天文章' : 'Search & read today\'s devotional on odbm.org'}
              >
                <Search className="w-3.5 h-3.5 text-amber-950" />
                <span>{lang === 'zh' ? '搜尋當天靈命日糧' : 'Search odbm.org'}</span>
                <ExternalLink className="w-3 h-3 text-amber-950/80" />
              </a>

              <button
                type="button"
                onClick={() => {
                  setFontScale(prev => prev === 'normal' ? 'large' : prev === 'large' ? 'huge' : 'normal');
                }}
                className="px-2.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs sm:text-sm font-bold text-amber-200 border border-white/15 transition-colors cursor-pointer"
                title={lang === 'zh' ? '切換字體大小' : 'Change font size'}
              >
                A{fontScale === 'huge' ? '++' : fontScale === 'large' ? '+' : ''}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
                title={lang === 'zh' ? '關閉' : 'Close'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile direct link for 搜尋當天靈命日糧 */}
          <div className="sm:hidden pt-3 mt-2 border-t border-amber-800/60 flex items-center justify-between">
            <a
              href={odbmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-200 bg-amber-700/40 hover:bg-amber-700/60 px-2.5 py-1 rounded-lg border border-amber-400/30"
            >
              <Search className="w-3 h-3 text-amber-300" />
              <span>{lang === 'zh' ? '在靈命日糧官網搜尋當天內容' : 'Search today on odbm.org'}</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          </div>
        </div>

        {/* Devotion Search & Navigation Tool Bar */}
        <div className="bg-amber-50/90 border-b border-amber-200/90 px-4 py-3 shrink-0 space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            {/* Prev / Today / Next Controls */}
            <div className="flex items-center space-x-1.5 shrink-0">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex <= 0}
                className={`p-1.5 rounded-lg border text-xs font-bold flex items-center gap-1 transition cursor-pointer ${
                  currentIndex <= 0
                    ? 'border-stone-200 text-stone-300 cursor-not-allowed'
                    : 'border-amber-300 bg-white text-amber-900 hover:bg-amber-100/70 shadow-xs'
                }`}
                title={lang === 'zh' ? '看前一篇靈修' : 'Previous devotion'}
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{lang === 'zh' ? '前一篇' : 'Prev'}</span>
              </button>

              {!isToday && (
                <button
                  type="button"
                  onClick={handleResetToToday}
                  className="px-2.5 py-1.5 rounded-lg border border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-100 text-xs font-bold flex items-center gap-1 shadow-xs transition cursor-pointer"
                  title={lang === 'zh' ? '返回今天最新靈修' : 'Return to today'}
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>{lang === 'zh' ? '回到今天最新' : 'Today'}</span>
                </button>
              )}

              <button
                type="button"
                onClick={handleNext}
                disabled={currentIndex < 0 || currentIndex >= DAILY_DEVOTIONS.length - 1}
                className={`p-1.5 rounded-lg border text-xs font-bold flex items-center gap-1 transition cursor-pointer ${
                  currentIndex < 0 || currentIndex >= DAILY_DEVOTIONS.length - 1
                    ? 'border-stone-200 text-stone-300 cursor-not-allowed'
                    : 'border-amber-300 bg-white text-amber-900 hover:bg-amber-100/70 shadow-xs'
                }`}
                title={lang === 'zh' ? '看後一篇靈修' : 'Next devotion'}
              >
                <span className="hidden sm:inline">{lang === 'zh' ? '後一篇' : 'Next'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              {/* Date Picker Input */}
              <div className="relative flex items-center">
                <label className="flex items-center gap-1 px-2.5 py-1.5 bg-white border border-amber-300 rounded-lg text-xs font-medium text-amber-900 hover:bg-amber-50/80 cursor-pointer shadow-xs" title={lang === 'zh' ? '選擇任意日期搜尋靈命日糧' : 'Pick a date'}>
                  <Calendar className="w-3.5 h-3.5 text-amber-700" />
                  <span className="hidden md:inline">{lang === 'zh' ? '選擇日期：' : 'Date:'}</span>
                  <input
                    type="date"
                    value={dateInputVal}
                    onChange={(e) => {
                      if (e.target.value) {
                        handleSelectDate(e.target.value);
                      }
                    }}
                    className="text-xs bg-transparent border-none text-stone-800 focus:outline-none cursor-pointer font-bold"
                  />
                </label>
              </div>
            </div>

            {/* Search Box */}
            <div className="relative flex-1 max-w-xs sm:max-w-sm">
              <div className="relative flex items-center">
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchDropdown(true);
                  }}
                  onFocus={() => setShowSearchDropdown(true)}
                  placeholder={lang === 'zh' ? '搜尋每一天的靈命日糧 (如 9/17、經文、主題)...' : 'Search devotionals by date or topic...'}
                  className="w-full pl-8 pr-7 py-1.5 text-xs bg-white rounded-lg border border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-500 text-stone-800 placeholder-stone-400 shadow-inner"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setShowSearchDropdown(false);
                    }}
                    className="absolute right-2 text-stone-400 hover:text-stone-600 p-0.5 cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Search Results Dropdown */}
              {showSearchDropdown && searchQuery.trim() && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-amber-300 z-50 max-h-64 overflow-y-auto p-2 space-y-1.5">
                  <div className="text-[11px] font-bold text-stone-500 px-1.5 pb-1 border-b border-stone-100 flex items-center justify-between">
                    <span>{lang === 'zh' ? `搜尋「${searchQuery}」結果` : `Results for "${searchQuery}"`}</span>
                    <a
                      href={`https://www.odbm.org/tc/devotionals`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-700 hover:text-amber-900 inline-flex items-center gap-0.5 underline font-normal"
                    >
                      <span>{lang === 'zh' ? '前往靈命日糧官網' : 'Go to odbm.org'}</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>

                  {filteredDevotions.length > 0 ? (
                    filteredDevotions.slice(0, 6).map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setActiveDevotion(item);
                          if (item.dateStr) setDateInputVal(item.dateStr);
                          setShowSearchDropdown(false);
                          setSearchQuery('');
                        }}
                        className="w-full text-left p-2 rounded-lg hover:bg-amber-50 text-xs transition flex items-center justify-between gap-2 border border-transparent hover:border-amber-200 cursor-pointer"
                      >
                        <div className="min-w-0">
                          <div className="font-bold text-amber-950 truncate">
                            {lang === 'zh' ? item.titleZh : item.titleEn}
                          </div>
                          <div className="text-[11px] text-stone-500 truncate">
                            {lang === 'zh' ? (item.passageReadingZh || item.referenceZh) : (item.passageReadingEn || item.referenceEn)}
                          </div>
                        </div>
                        {item.dateStr && (
                          <span className="shrink-0 text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-medium">
                            {item.dateStr}
                          </span>
                        )}
                      </button>
                    ))
                  ) : (
                    <div className="p-3 text-center space-y-2 text-xs text-stone-600 bg-stone-50 rounded-lg">
                      <p>{lang === 'zh' ? `本站存檔未找到「${searchQuery}」，可直接在靈命日糧官網搜尋：` : `Not found in local archive for "${searchQuery}", search on official website:`}</p>
                      <a
                        href="https://www.odbm.org/tc/devotionals"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-bold text-xs shadow-xs"
                      >
                        <Search className="w-3 h-3" />
                        <span>在靈命日糧官網搜尋當天內容</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}

                  {/* Option to search on official website */}
                  <div className="pt-1 border-t border-stone-100">
                    <a
                      href="https://www.odbm.org/tc/devotionals"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-1.5 px-2 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-semibold flex items-center justify-between transition"
                    >
                      <span className="inline-flex items-center gap-1">
                        <Search className="w-3 h-3 text-amber-700" />
                        <span>{lang === 'zh' ? '在靈命日糧官方網站搜尋' : 'Search on official website (odbm.org)'}</span>
                      </span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Dates Pill Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 pt-0.5 scrollbar-none text-[11px]">
            <span className="text-stone-500 font-bold shrink-0 flex items-center gap-1">
              <span>{lang === 'zh' ? '快速瀏覽日期：' : 'Quick Dates:'}</span>
            </span>
            {quickDateItems.map((item) => {
              const isActive = activeDevotion.dateStr === item.dateStr;
              return (
                <button
                  key={item.dateStr}
                  type="button"
                  onClick={() => handleSelectDate(item.dateStr)}
                  className={`px-2.5 py-1 rounded-md font-bold whitespace-nowrap transition cursor-pointer shrink-0 flex items-center gap-1 ${
                    isActive
                      ? 'bg-amber-700 text-white shadow-xs'
                      : 'bg-white hover:bg-amber-100 text-stone-700 hover:text-amber-950 border border-amber-200/80'
                  }`}
                  title={`${item.dateStr} - ${item.tag}`}
                >
                  <span>{lang === 'zh' ? item.labelZh : item.labelEn}</span>
                  <span className={`text-[10px] font-normal ${isActive ? 'text-amber-200' : 'text-stone-500'}`}>
                    ({item.tag})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6 bg-stone-50/50">
          {/* Section 1: 今日經文 (Today's Scripture) */}
          <div className="bg-gradient-to-br from-amber-500/10 via-amber-100/40 to-stone-50 rounded-2xl p-5 sm:p-6 border-2 border-amber-300/80 shadow-xs space-y-3">
            <div className="flex items-center justify-between gap-2 border-b border-amber-200/90 pb-2.5">
              <div className="flex items-center space-x-2 text-amber-950 font-bold text-base sm:text-lg">
                <span className="p-1 rounded-lg bg-amber-200 text-amber-900">
                  <BookOpen className="w-4 h-4" />
                </span>
                <span>{lang === 'zh' ? '今日經文' : "Today's Scripture"}</span>
              </div>
              <span className="text-xs sm:text-sm font-bold text-amber-800 bg-amber-200/70 px-2.5 py-1 rounded-lg border border-amber-300">
                {reference}
              </span>
            </div>

            <blockquote className={`font-serif italic text-stone-900 leading-relaxed font-semibold pl-3 border-l-4 border-amber-500 ${
              fontScale === 'huge' ? 'text-2xl sm:text-3xl' : fontScale === 'large' ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
            }`}>
              “{verse}”
            </blockquote>

            <div className="text-right text-xs sm:text-sm font-bold text-amber-900">
              —— {reference}
            </div>
          </div>

          {/* Section 2: 靈修信息文章 (Devotional Reflection Article) */}
          {content && (
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 shadow-xs space-y-3">
              <div className="flex items-center space-x-2 text-stone-800 font-bold text-base sm:text-lg border-b border-stone-200 pb-2">
                <Quote className="w-4 h-4 text-amber-600" />
                <span>{lang === 'zh' ? '靈修信息' : 'Devotional Message'}</span>
              </div>

              <div className={`text-stone-700 leading-relaxed space-y-3.5 font-normal ${
                fontScale === 'huge' ? 'text-xl sm:text-2xl' : fontScale === 'large' ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
              }`}>
                {content.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx} className="indent-6 sm:indent-8">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Section 3: 反思和禱告 (Reflect and Pray) */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-amber-950 font-bold text-lg sm:text-xl border-b border-amber-200 pb-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <span>{lang === 'zh' ? '反思和禱告' : 'Reflect & Pray'}</span>
            </div>

            {/* 反思 (Reflection) */}
            <div className="bg-amber-50/75 rounded-2xl p-5 sm:p-6 border border-amber-200 shadow-xs space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-xs sm:text-sm font-bold px-3 py-1 rounded-lg bg-amber-200 text-amber-950 border border-amber-300">
                  💡 {lang === 'zh' ? '反思' : 'Reflection'}
                </span>
                <span className="text-xs text-amber-800 font-medium">
                  {lang === 'zh' ? '安靜默想・光照心靈' : 'Quiet Meditation'}
                </span>
              </div>
              <p className={`text-stone-800 font-medium leading-relaxed pt-1 ${
                fontScale === 'huge' ? 'text-xl sm:text-2xl' : fontScale === 'large' ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
              }`}>
                {reflection}
              </p>
            </div>

            {/* 禱告 (Prayer) */}
            <div className="bg-emerald-50/75 rounded-2xl p-5 sm:p-6 border border-emerald-200 shadow-xs space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-xs sm:text-sm font-bold px-3 py-1 rounded-lg bg-emerald-200 text-emerald-950 border border-emerald-300">
                  🙏 {lang === 'zh' ? '禱告' : 'Prayer'}
                </span>
                <span className="text-xs text-emerald-800 font-medium">
                  {lang === 'zh' ? '同心祈禱・回應神恩' : 'United Prayer'}
                </span>
              </div>
              <p className={`text-stone-800 italic font-medium leading-relaxed pt-1 ${
                fontScale === 'huge' ? 'text-xl sm:text-2xl' : fontScale === 'large' ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
              }`}>
                {prayer}
              </p>
            </div>
          </div>

          {/* Section 4: 今日勉勵 • 金句默想 (Takeaway Thought) */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-xs flex items-start space-x-3.5">
            <span className="text-2xl shrink-0 mt-0.5">🌱</span>
            <div className="space-y-1">
              <h4 className="text-sm sm:text-base font-bold text-stone-900">
                {lang === 'zh' ? '今日勉勵' : "Today's Encouragement"}
              </h4>
              <p className={`text-stone-600 leading-relaxed ${
                fontScale === 'huge' ? 'text-lg sm:text-xl' : 'text-sm sm:text-base'
              }`}>
                {thought}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer Actions */}
        <div className="bg-stone-100 p-4 sm:p-5 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-stone-600">
            <span>{lang === 'zh' ? '靈修出處：' : 'Source:'}</span>
            <a
              href={odbmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-800 hover:text-amber-950 font-bold underline underline-offset-2 inline-flex items-center gap-1"
            >
              <span>靈命日糧 (www.odbm.org)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-stone-700 hover:text-stone-900 bg-white hover:bg-stone-50 border border-stone-300 transition-colors shadow-xs cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                  <span className="text-emerald-700">{lang === 'zh' ? '已複製到剪貼簿' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-stone-600" />
                  <span>{lang === 'zh' ? '複製分享' : 'Copy'}</span>
                </>
              )}
            </button>

            <a
              href={odbmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 transition-all shadow-md cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>{lang === 'zh' ? '在靈命日糧搜尋當天內容' : 'Search on odbm.org'}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-85" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
