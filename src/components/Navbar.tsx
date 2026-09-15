import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { CHURCH_INFO } from '../data/churchData';
import { ChurchLogo } from './ChurchLogo';
import { 
  Globe, 
  Heart, 
  Phone, 
  MapPin, 
  Calendar, 
  Clock, 
  Menu, 
  X, 
  Sparkles, 
  FileText, 
  ShieldCheck, 
  LogOut, 
  Lock, 
  Github, 
  Mail, 
  Youtube, 
  ChevronDown, 
  BookOpen, 
  Users, 
  Images, 
  Sun, 
  Bookmark, 
  MessageSquare, 
  Compass,
  ExternalLink 
} from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  onOpenGiving: () => void;
  onOpenAI: () => void;
  adminEmail?: string | null;
  onOpenAdminLogin?: () => void;
  onLogoutAdmin?: () => void;
  onOpenBulletinAdmin?: () => void;
  onOpenGlobalGitHubSync?: () => void;
  onOpenEmailJSConfig?: () => void;
  onOpenSMTPConfig?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  onOpenGiving,
  onOpenAI,
  adminEmail,
  onOpenAdminLogin,
  onLogoutAdmin,
  onOpenBulletinAdmin,
  onOpenGlobalGitHubSync,
  onOpenEmailJSConfig,
  onOpenSMTPConfig,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        const target = event.target as HTMLElement;
        if (!target.closest('[data-mobile-toggle="true"]')) {
          setMobileMenuOpen(false);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDesktopMenuOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Structured directory categories for the dropdown window
  const menuCategories = [
    {
      categoryZh: "崇拜與教會介紹",
      categoryEn: "Worship & About",
      items: [
        {
          titleZh: "主日講道影音",
          titleEn: "Sunday Sermons",
          descZh: "證道影音、音訊錄音與講道大綱",
          descEn: "Video, audio & outline downloads",
          href: "#sermons",
          icon: BookOpen,
          badgeZh: "影音+音訊",
          badgeEn: "Audio/Video",
        },
        {
          titleZh: "本週主日週報",
          titleEn: "Weekly Bulletin",
          descZh: "每週金句、讀經進度與教會消息",
          descEn: "Memory verse, reading & news",
          href: "#bulletin",
          icon: FileText,
          badgeZh: "最新週報",
          badgeEn: "Bulletin",
        },
        {
          titleZh: "關於加南教會",
          titleEn: "About Canaan",
          descZh: "陳嘉彰牧師、加南歷史與信仰宣言",
          descEn: "Rev. Chen Jiachang & Vision",
          href: "#about",
          icon: Compass,
        },
      ]
    },
    {
      categoryZh: "靈修與造就",
      categoryEn: "Devotion & Faith",
      items: [
        {
          titleZh: "今日經文靈修",
          titleEn: "Daily Devotional",
          descZh: "靈命日糧每日靈修經文與默想",
          descEn: "Our Daily Bread readings & reflection",
          action: () => {
            window.dispatchEvent(new CustomEvent('canaan_open_daily_devotion'));
          },
          icon: Sun,
          badgeZh: "靈命日糧",
          badgeEn: "ODB",
        },
        {
          titleZh: "全年讀經進度",
          titleEn: "Annual Bible Reading",
          descZh: "365 天通讀舊約與新約聖經計畫表",
          descEn: "365-day Old & New Testament plan",
          action: () => {
            window.dispatchEvent(new CustomEvent('canaan_open_annual_bible_reading'));
          },
          icon: Bookmark,
        },
        {
          titleZh: "代禱關懷牆",
          titleEn: "Prayer Wall",
          descZh: "彼此代求、同心合意向主呼求",
          descEn: "Intercession & church prayer requests",
          href: "#prayer",
          icon: MessageSquare,
        },
      ]
    },
    {
      categoryZh: "團契與教會生活",
      categoryEn: "Fellowship & Events",
      items: [
        {
          titleZh: "事工與團契",
          titleEn: "Ministries & Groups",
          descZh: "弟兄團契、姊妹團契、長青小組",
          descEn: "Brotherhood, sisterhood, youth",
          href: "#ministries",
          icon: Users,
        },
        {
          titleZh: "最新活動日程",
          titleEn: "Events & Calendar",
          descZh: "主日聚會、退修營與節慶特會",
          descEn: "Gatherings, retreats & camps",
          href: "#events",
          icon: Calendar,
        },
        {
          titleZh: "加南照片走廊",
          titleEn: "Photo Gallery",
          descZh: "Google 歷年相簿與喜樂恩典足跡",
          descEn: "Google Photos albums & memories",
          href: "#gallery",
          icon: Images,
          badgeZh: "Google 相簿",
          badgeEn: "Photos",
        },
      ]
    },
    {
      categoryZh: "支持與聯絡",
      categoryEn: "Support & Connect",
      items: [
        {
          titleZh: "奉獻支持",
          titleEn: "Giving & Tithe",
          descZh: "線上奉獻、支票郵寄與建堂基金",
          descEn: "Online giving, checks & building fund",
          action: () => {
            onOpenGiving();
          },
          icon: Heart,
          badgeZh: "線上奉獻",
          badgeEn: "Give Online",
        },
        {
          titleZh: "聯絡加南",
          titleEn: "Contact & Location",
          descZh: "教會地址、交通指南與聚會時間",
          descEn: "Address, directions & service time",
          href: "#contact",
          icon: Phone,
        },
        {
          titleZh: "聖經靈修 AI 助手",
          titleEn: "AI Bible Guide",
          descZh: "24小時牧養陪伴與經文解答",
          descEn: "Pastoral AI guide & Scripture search",
          action: () => {
            onOpenAI();
          },
          icon: Sparkles,
          badgeZh: "智慧AI",
          badgeEn: "AI Assistant",
        },
      ]
    },
  ];

  const handleMenuItemClick = (item: any) => {
    setDesktopMenuOpen(false);
    setMobileMenuOpen(false);
    if (item.action) {
      item.action();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner with Quick Contact Info */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden sm:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-amber-300 font-medium">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              {lang === 'zh' ? '主日崇拜：每週日上午 11:00' : 'Sunday Worship: Every Sunday 11:00 AM'}
            </span>
            <a 
              href={CHURCH_INFO.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" />
              {CHURCH_INFO.address}
            </a>
            <a 
              href={`tel:${CHURCH_INFO.phone1}`}
              className="flex items-center hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1 text-slate-400" />
              {CHURCH_INFO.phone1}
            </a>
          </div>

          <div className="flex items-center space-x-3">
            {adminEmail ? (
              <div className="hidden md:flex items-center space-x-2">
                {onOpenGlobalGitHubSync && (
                  <button
                    onClick={onOpenGlobalGitHubSync}
                    className="flex items-center text-slate-950 hover:text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 font-bold px-3 py-1 rounded-full border border-amber-300 shadow-md hover:shadow-amber-500/20 transition-all text-xs transform hover:scale-[1.02]"
                    title="管理員：一鍵將講道、相片、週報與所有資料同步至 GitHub 並自動部署 Cloudflare"
                  >
                    <Github className="w-3.5 h-3.5 mr-1 text-slate-950" />
                    <span>{lang === 'zh' ? '🚀 一鍵和 GitHub 同步' : '🚀 Sync All to GitHub'}</span>
                  </button>
                )}
                {onOpenBulletinAdmin && (
                  <button
                    onClick={onOpenBulletinAdmin}
                    className="flex items-center text-amber-300 hover:text-white bg-slate-800/90 hover:bg-slate-700/90 px-2.5 py-0.5 rounded-full border border-amber-500/40 transition-all text-xs"
                    title="週報 PDF 上傳與 Email 自動更新設定"
                  >
                    <FileText className="w-3 h-3 mr-1 text-amber-400" />
                    <span>{lang === 'zh' ? '週報 PDF' : 'Bulletin'}</span>
                  </button>
                )}
                {(onOpenSMTPConfig || onOpenEmailJSConfig) && (
                  <button
                    onClick={onOpenSMTPConfig || onOpenEmailJSConfig}
                    className="flex items-center text-amber-300 hover:text-white bg-slate-800/90 hover:bg-slate-700/90 px-2.5 py-0.5 rounded-full border border-amber-500/40 transition-all text-xs"
                    title={lang === 'zh' ? "SMTP 郵件伺服器寄信設定" : "SMTP Email Server Settings"}
                  >
                    <Mail className="w-3 h-3 mr-1 text-amber-400" />
                    <span>{lang === 'zh' ? 'SMTP 寄信' : 'SMTP Mail'}</span>
                  </button>
                )}
                <button
                  onClick={onLogoutAdmin}
                  className="flex items-center text-slate-400 hover:text-rose-300 text-[11px] bg-slate-800 px-2 py-0.5 rounded-full border border-slate-700 transition-colors"
                  title={lang === 'zh' ? '登出 web@canaannewlife.org' : 'Logout Admin'}
                >
                  <LogOut className="w-3 h-3 mr-1" />
                  <span>{adminEmail}</span>
                </button>
              </div>
            ) : (
              onOpenAdminLogin && (
                <button
                  onClick={onOpenAdminLogin}
                  className="hidden md:flex items-center text-slate-300 hover:text-amber-300 bg-slate-800/80 hover:bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-700 transition-all text-xs"
                  title="網頁管理員登入 (web@canaannewlife.org)"
                >
                  <Lock className="w-3 h-3 mr-1 text-amber-400" />
                  <span>{lang === 'zh' ? '管理員登入' : 'Admin Login'}</span>
                </button>
              )
            )}

            <a
              href={CHURCH_INFO.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-rose-200 hover:text-white bg-rose-950/70 hover:bg-rose-900/90 px-2.5 py-0.5 rounded-full border border-rose-500/40 transition-all text-xs"
              title="加南新生 YouTube 官方頻道: @CanaanShinShengChristianChurch"
            >
              <Youtube className="w-3.5 h-3.5 mr-1 text-rose-400" />
              <span>YouTube</span>
            </a>

            <button
              onClick={onOpenAI}
              className="flex items-center text-amber-200 hover:text-white bg-amber-950/60 hover:bg-amber-900/80 px-2.5 py-0.5 rounded-full border border-amber-500/30 transition-all text-xs"
            >
              <Sparkles className="w-3 h-3 mr-1 text-amber-400 animate-pulse" />
              {lang === 'zh' ? '聖經與靈修AI助手' : 'AI Bible Guide'}
            </button>
            <div className="flex items-center bg-slate-800 rounded-full p-0.5 border border-slate-700">
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded-full text-[11px] font-semibold transition-colors ${
                  lang === 'en' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('zh')}
                className={`px-2 py-0.5 rounded-full text-[11px] font-semibold transition-colors ${
                  lang === 'zh' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                繁體中文
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-slate-800 border-b border-slate-200/80' 
            : 'bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-transparent py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          {/* Logo & Church Name */}
          <a href="#" className="flex items-center space-x-2.5 xl:space-x-3 group flex-shrink-0">
            <div className="transition-transform group-hover:scale-105 flex-shrink-0">
              <ChurchLogo size="md" lightMode={scrolled} className="rounded-xl overflow-hidden shadow-md" />
            </div>
            <div className="flex-shrink-0 whitespace-nowrap">
              <div className={`font-serif text-base sm:text-lg xl:text-xl font-bold tracking-tight leading-tight whitespace-nowrap ${
                scrolled ? 'text-slate-900' : 'text-white'
              }`}>
                {CHURCH_INFO.nameEn}
              </div>
              <div className={`text-xs font-medium tracking-wide whitespace-nowrap ${
                scrolled ? 'text-amber-800' : 'text-amber-300'
              }`}>
                {lang === 'zh' ? CHURCH_INFO.nameZh : 'Harbor City, CA • Founded 1984'}
              </div>
            </div>
          </a>

          {/* Desktop Navigation: Dropdown Window Menu (下拉視窗的目錄) + Quick Direct Links */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-nowrap flex-shrink-0">
            {/* 1. The Primary Dropdown Window Trigger (下拉視窗的目錄) */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
                className={`flex items-center space-x-2 px-3.5 py-2 xl:px-4 xl:py-2.5 rounded-xl text-sm xl:text-base font-bold transition-all shadow-sm ${
                  desktopMenuOpen
                    ? 'bg-amber-600 text-white ring-2 ring-amber-500/50 shadow-md'
                    : scrolled
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-900 hover:text-amber-700 border border-slate-200'
                    : 'bg-white/15 hover:bg-white/25 text-white border border-white/20'
                }`}
                aria-expanded={desktopMenuOpen}
                aria-label="網站選單目錄下拉視窗"
              >
                <Menu className="w-4 h-4 text-amber-400" />
                <span>{lang === 'zh' ? '選單目錄' : 'Directory'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${desktopMenuOpen ? 'rotate-180 text-white' : 'opacity-80'}`} />
              </button>

              {/* Desktop Dropdown Window (下拉視窗) */}
              {desktopMenuOpen && (
                <div className={`absolute top-full left-0 mt-3 w-[720px] max-w-[92vw] rounded-3xl p-6 shadow-2xl border backdrop-blur-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200 ${
                  scrolled 
                    ? 'bg-white/98 border-slate-200 text-slate-800 shadow-slate-900/20' 
                    : 'bg-slate-900/98 border-slate-750 text-white shadow-black/50'
                }`}>
                  {/* Dropdown Window Header */}
                  <div className={`flex items-center justify-between pb-3.5 mb-4 border-b ${
                    scrolled ? 'border-slate-150' : 'border-slate-800'
                  }`}>
                    <div className="flex items-center space-x-2">
                      <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-500">
                        <Compass className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className={`text-sm font-bold font-serif ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                          {lang === 'zh' ? '加南新生基督教會 • 網站目錄導覽' : 'Canaan Directory & Navigation'}
                        </h3>
                        <p className={`text-[11px] ${scrolled ? 'text-slate-500' : 'text-slate-400'}`}>
                          {lang === 'zh' ? '點選項目即可快速前往該單元' : 'Click any section to navigate'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => {
                          setDesktopMenuOpen(false);
                          onOpenAI();
                        }}
                        className="flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 hover:bg-amber-500/25 text-amber-600 dark:text-amber-300 border border-amber-500/30 transition-colors"
                      >
                        <Sparkles className="w-3 h-3 text-amber-500" />
                        <span>{lang === 'zh' ? 'AI 聖經助手' : 'AI Guide'}</span>
                      </button>

                      <button
                        onClick={() => setDesktopMenuOpen(false)}
                        className={`p-1.5 rounded-lg transition-colors ${
                          scrolled ? 'hover:bg-slate-100 text-slate-400 hover:text-slate-700' : 'hover:bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                        title="關閉下拉視窗 (Esc)"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* 4 Category Columns in Dropdown Window */}
                  <div className="grid grid-cols-2 gap-5">
                    {menuCategories.map((group, gIdx) => (
                      <div key={gIdx} className="space-y-2">
                        <div className="flex items-center space-x-1.5 px-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          <h4 className={`text-xs font-bold uppercase tracking-wider ${
                            scrolled ? 'text-amber-900' : 'text-amber-400'
                          }`}>
                            {lang === 'zh' ? group.categoryZh : group.categoryEn}
                          </h4>
                        </div>

                        <div className="space-y-1">
                          {group.items.map((item, iIdx) => {
                            const IconComponent = item.icon;
                            const isAnchor = Boolean(item.href);

                            const innerContent = (
                              <>
                                <div className={`p-2 rounded-xl flex-shrink-0 transition-colors ${
                                  scrolled 
                                    ? 'bg-slate-100 text-amber-700 group-hover:bg-amber-600 group-hover:text-white' 
                                    : 'bg-slate-800 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950'
                                }`}>
                                  <IconComponent className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-1.5">
                                    <span className={`text-xs sm:text-sm font-semibold truncate ${
                                      scrolled ? 'text-slate-900 group-hover:text-amber-700' : 'text-white group-hover:text-amber-300'
                                    }`}>
                                      {lang === 'zh' ? item.titleZh : item.titleEn}
                                    </span>
                                    {item.badgeZh && (
                                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-md bg-amber-500/20 text-amber-600 dark:text-amber-300 border border-amber-500/30">
                                        {lang === 'zh' ? item.badgeZh : item.badgeEn}
                                      </span>
                                    )}
                                  </div>
                                  <p className={`text-[11px] truncate leading-tight mt-0.5 ${
                                    scrolled ? 'text-slate-500' : 'text-slate-400'
                                  }`}>
                                    {lang === 'zh' ? item.descZh : item.descEn}
                                  </p>
                                </div>
                              </>
                            );

                            if (isAnchor) {
                              return (
                                <a
                                  key={iIdx}
                                  href={item.href}
                                  onClick={() => handleMenuItemClick(item)}
                                  className={`group flex items-start space-x-2.5 p-2 rounded-xl transition-all ${
                                    scrolled 
                                      ? 'hover:bg-amber-50/80 border border-transparent hover:border-amber-200' 
                                      : 'hover:bg-slate-800/80 border border-transparent hover:border-amber-500/30'
                                  }`}
                                >
                                  {innerContent}
                                </a>
                              );
                            }

                            return (
                              <button
                                key={iIdx}
                                type="button"
                                onClick={() => handleMenuItemClick(item)}
                                className={`w-full text-left group flex items-start space-x-2.5 p-2 rounded-xl transition-all ${
                                  scrolled 
                                    ? 'hover:bg-amber-50/80 border border-transparent hover:border-amber-200' 
                                    : 'hover:bg-slate-800/80 border border-transparent hover:border-amber-500/30'
                                }`}
                              >
                                {innerContent}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Dropdown Window Footer Quick Actions */}
                  <div className={`mt-5 pt-3.5 border-t flex items-center justify-between text-xs ${
                    scrolled ? 'border-slate-150 text-slate-500' : 'border-slate-800 text-slate-400'
                  }`}>
                    <span className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      <span>{lang === 'zh' ? '每週日上午 11:00 主日崇拜' : 'Sunday Worship 11:00 AM'}</span>
                    </span>

                    <div className="flex items-center space-x-2">
                      <a
                        href={CHURCH_INFO.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-rose-500 hover:text-rose-400 font-medium"
                      >
                        <Youtube className="w-3.5 h-3.5" />
                        <span>YouTube</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <span className="text-slate-400">•</span>
                      <button
                        onClick={() => {
                          setDesktopMenuOpen(false);
                          onOpenGiving();
                        }}
                        className="text-amber-600 dark:text-amber-400 hover:underline font-semibold"
                      >
                        {lang === 'zh' ? '奉獻支持' : 'Giving'}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Key Quick Access Shortcuts */}
            <a
              href="#sermons"
              className={`px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${
                scrolled 
                  ? 'text-slate-800 hover:text-amber-700 hover:bg-slate-100' 
                  : 'text-slate-100 hover:text-white hover:bg-white/10'
              }`}
            >
              {lang === 'zh' ? '主日講道' : 'Sermons'}
            </a>

            <a
              href="#bulletin"
              className={`px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${
                scrolled 
                  ? 'text-slate-800 hover:text-amber-700 hover:bg-slate-100' 
                  : 'text-slate-100 hover:text-white hover:bg-white/10'
              }`}
            >
              {lang === 'zh' ? '週報精華' : 'Bulletin'}
            </a>

            <a
              href="#gallery"
              className={`px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${
                scrolled 
                  ? 'text-slate-800 hover:text-amber-700 hover:bg-slate-100' 
                  : 'text-slate-100 hover:text-white hover:bg-white/10'
              }`}
            >
              {lang === 'zh' ? '照片走廊' : 'Gallery'}
            </a>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent('canaan_open_daily_devotion'))}
              className={`px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors flex items-center space-x-1 ${
                scrolled 
                  ? 'text-amber-800 hover:text-amber-900 hover:bg-amber-50' 
                  : 'text-amber-300 hover:text-white hover:bg-white/10'
              }`}
              title="閱讀今日靈命日糧靈修"
            >
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'zh' ? '今日靈修' : 'Daily Bread'}</span>
            </button>
          </div>

          {/* Action Buttons: Giving */}
          <div className="hidden sm:flex items-center space-x-2.5 xl:space-x-3.5 flex-shrink-0">
            <button
              onClick={onOpenGiving}
              className="flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-4 py-2 xl:px-5 xl:py-2.5 rounded-xl font-bold text-sm xl:text-base whitespace-nowrap shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex-shrink-0"
            >
              <Heart className="w-4 h-4 fill-white/30 flex-shrink-0" />
              <span className="whitespace-nowrap">{lang === 'zh' ? '奉獻支持' : 'Give'}</span>
            </button>

            {/* Language Switcher for tablet */}
            <div className="sm:hidden flex items-center bg-slate-800/80 rounded-lg p-0.5">
              <button
                onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
                className="flex items-center text-xs font-semibold px-2 py-1 text-white"
              >
                <Globe className="w-3.5 h-3.5 mr-1" />
                {lang === 'en' ? '繁體' : 'EN'}
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden space-x-2">
            <button
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className={`p-2 rounded-lg text-xs font-semibold flex items-center ${
                scrolled ? 'bg-slate-100 text-slate-800' : 'bg-white/10 text-white'
              }`}
            >
              <Globe className="w-3.5 h-3.5 mr-1" />
              {lang === 'en' ? '繁體' : 'EN'}
            </button>
            <button
              data-mobile-toggle="true"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors flex items-center space-x-1.5 ${
                mobileMenuOpen
                  ? 'bg-amber-600 text-white'
                  : scrolled 
                  ? 'text-slate-800 hover:bg-slate-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              <span className="text-xs font-bold hidden xs:inline">{lang === 'zh' ? '目錄' : 'Menu'}</span>
            </button>
          </div>

          {/* Mobile Floating Dropdown Window (手機端下拉視窗) */}
          {mobileMenuOpen && (
            <div 
              ref={mobileMenuRef}
              className="lg:hidden absolute top-full left-3 right-3 mt-2 bg-slate-900/98 text-white border border-slate-750 p-4 sm:p-5 rounded-3xl shadow-2xl z-50 backdrop-blur-2xl max-h-[85vh] overflow-y-auto animate-in fade-in slide-in-from-top-3 duration-200"
            >
              {/* Mobile Dropdown Header */}
              <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-bold text-amber-200">
                    {lang === 'zh' ? '選單目錄 • 全站導覽' : 'Navigation Directory'}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAI();
                  }}
                  className="flex items-center text-xs text-amber-300 bg-amber-950 px-2.5 py-1 rounded-full border border-amber-500/30"
                >
                  <Sparkles className="w-3 h-3 mr-1 text-amber-400 animate-pulse" />
                  {lang === 'zh' ? 'AI 聖經助手' : 'AI Guide'}
                </button>
              </div>

              {/* Categorized Items in Mobile Dropdown */}
              <div className="space-y-4 pt-3">
                {menuCategories.map((group, gIdx) => (
                  <div key={gIdx} className="space-y-1.5">
                    <div className="flex items-center space-x-1.5 px-1 text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>{lang === 'zh' ? group.categoryZh : group.categoryEn}</span>
                    </div>

                    <div className="grid grid-cols-1 gap-1.5">
                      {group.items.map((item, iIdx) => {
                        const IconComponent = item.icon;
                        const isAnchor = Boolean(item.href);

                        const content = (
                          <>
                            <div className="p-2 rounded-xl bg-slate-800 text-amber-400 group-hover:bg-amber-600 group-hover:text-white transition-colors flex-shrink-0">
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-slate-100 group-hover:text-amber-300">
                                  {lang === 'zh' ? item.titleZh : item.titleEn}
                                </span>
                                {item.badgeZh && (
                                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                    {lang === 'zh' ? item.badgeZh : item.badgeEn}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                                {lang === 'zh' ? item.descZh : item.descEn}
                              </p>
                            </div>
                          </>
                        );

                        if (isAnchor) {
                          return (
                            <a
                              key={iIdx}
                              href={item.href}
                              onClick={() => handleMenuItemClick(item)}
                              className="group flex items-center space-x-3 p-2.5 rounded-2xl bg-slate-800/60 hover:bg-slate-800 border border-slate-750/70 transition-all"
                            >
                              {content}
                            </a>
                          );
                        }

                        return (
                          <button
                            key={iIdx}
                            type="button"
                            onClick={() => handleMenuItemClick(item)}
                            className="w-full text-left group flex items-center space-x-3 p-2.5 rounded-2xl bg-slate-800/60 hover:bg-slate-800 border border-slate-750/70 transition-all"
                          >
                            {content}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Admin Tools & Important Links in Mobile Dropdown */}
              <div className="pt-4 mt-4 border-t border-slate-800 flex flex-col space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenGiving();
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3 rounded-2xl font-bold shadow-md"
                >
                  <Heart className="w-4 h-4 fill-white/20" />
                  <span>{lang === 'zh' ? '奉獻支持 (Online Giving)' : 'Give'}</span>
                </button>

                <a
                  href={CHURCH_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-rose-950/80 hover:bg-rose-900/90 text-rose-200 py-2.5 rounded-2xl text-xs font-semibold border border-rose-500/40 shadow-sm transition-colors"
                >
                  <Youtube className="w-4 h-4 text-rose-400" />
                  <span>YouTube 官方頻道 (@CanaanShinShengChristianChurch)</span>
                </a>

                {adminEmail ? (
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    {onOpenGlobalGitHubSync && (
                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onOpenGlobalGitHubSync();
                        }}
                        className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 py-2.5 rounded-2xl text-xs font-bold shadow-lg"
                      >
                        <Github className="w-4 h-4 text-slate-950" />
                        <span>{lang === 'zh' ? '🚀 一鍵和 GitHub 同步全站' : '🚀 Sync All Data to GitHub'}</span>
                      </button>
                    )}
                    {onOpenBulletinAdmin && (
                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onOpenBulletinAdmin();
                        }}
                        className="w-full flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-amber-300 py-2.5 rounded-2xl text-xs font-bold border border-amber-500/40"
                      >
                        <FileText className="w-4 h-4 text-amber-400" />
                        <span>{lang === 'zh' ? '週報 PDF / Email 自動更新' : 'Bulletin PDF Sync'}</span>
                      </button>
                    )}
                    {(onOpenSMTPConfig || onOpenEmailJSConfig) && (
                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          if (onOpenSMTPConfig) {
                            onOpenSMTPConfig();
                          } else if (onOpenEmailJSConfig) {
                            onOpenEmailJSConfig();
                          }
                        }}
                        className="w-full flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-amber-300 py-2.5 rounded-2xl text-xs font-bold border border-amber-500/40"
                      >
                        <Mail className="w-4 h-4 text-amber-400" />
                        <span>{lang === 'zh' ? 'SMTP 郵件伺服器設定' : 'SMTP Email Configuration'}</span>
                      </button>
                    )}
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (onLogoutAdmin) onLogoutAdmin();
                      }}
                      className="w-full flex items-center justify-center space-x-1.5 bg-slate-800 text-rose-300 py-2 rounded-2xl text-xs"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>{lang === 'zh' ? `登出 (${adminEmail})` : `Logout (${adminEmail})`}</span>
                    </button>
                  </div>
                ) : (
                  onOpenAdminLogin && (
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenAdminLogin();
                      }}
                      className="w-full flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-slate-300 py-2.5 rounded-2xl text-xs font-medium border border-slate-700"
                    >
                      <Lock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{lang === 'zh' ? '管理員登入 (web@canaannewlife.org)' : 'Admin Login'}</span>
                    </button>
                  )
                )}

                <a
                  href={CHURCH_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-slate-850 text-slate-300 py-2 rounded-2xl text-xs font-medium"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>25226 Western Ave, Harbor City, CA 90710</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

