import { Sermon } from '../types';
import * as SermonsData from '../data/sermonsData';

/**
 * Strict Church Policy:
 * 主日講道永遠保留最後時間（最新日期由新至舊排序）的 9 個，嚴格排重（同一主日僅一筆，依最新日期保留）。
 */
export const MAX_SERMONS = 9;

export const INITIAL_SERMONS: Sermon[] = 
  (SermonsData as any).SERMON_CONTENT_LIST || 
  (SermonsData as any).INITIAL_SERMONS || 
  (SermonsData as any).RECENT_SERMONS || 
  [];

export const SERMON_CONTENT_LIST: Sermon[] = INITIAL_SERMONS;

export const SERMONS_DATA_VERSION: string = 
  (SermonsData as any).SERMONS_DATA_VERSION || 
  `v-${INITIAL_SERMONS.length}-${INITIAL_SERMONS[0]?.date || 'master'}`;

/**
 * Enforces strict sorting descending by date, deduplication by date/id,
 * and limits strictly to the 9 most recent sermons.
 */
export function sanitizeAndLimitSermons(sermons: Sermon[]): Sermon[] {
  if (!Array.isArray(sermons)) return [];

  // 1. Filter valid entries and sort descending by date (latest first)
  const valid = sermons.filter(s => s && typeof s === 'object');
  const sorted = [...valid].sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  // 2. Strict deduplication by date, then ID
  const seenDates = new Set<string>();
  const seenIds = new Set<string>();
  const deduped: Sermon[] = [];

  for (const s of sorted) {
    const dateKey = s.date?.trim();
    const idKey = s.id?.trim();
    if (dateKey && seenDates.has(dateKey)) continue;
    if (idKey && seenIds.has(idKey)) continue;
    if (dateKey) seenDates.add(dateKey);
    if (idKey) seenIds.add(idKey);
    deduped.push(s);
    if (deduped.length >= MAX_SERMONS) break;
  }

  return deduped;
}

/**
 * Generate a deterministic fingerprint of the compiled master sermons.
 * Any change in titles, dates, speakers, scriptures, passcodes, video/audio visibility or count in code triggers an immediate refresh.
 */
export function getMasterDataFingerprint(): string {
  try {
    return `${SERMONS_DATA_VERSION}::` + INITIAL_SERMONS.map(s => 
      `${s.id}:${s.date}:${s.titleZh}:${s.speakerZh}:${s.videoUrl || ''}:${s.videoPasscode || ''}:${s.showVideo !== false}:${s.showAudio !== false}`
    ).join('|');
  } catch {
    return `${SERMONS_DATA_VERSION}::${INITIAL_SERMONS.length}`;
  }
}

/**
 * Authoritative sermon loader.
 * Validates cache against compiled master version and fingerprint.
 * Guarantees that any turned-off visibility flags (showVideo: false, showAudio: false) in the
 * deployed master take immediate effect across all deployment environments (Cloudflare Pages, GitHub).
 */
export function loadAndSyncSermons(): Sermon[] {
  try {
    const currentFingerprint = getMasterDataFingerprint();
    const cachedFingerprint = localStorage.getItem('canaan_sermons_master_fingerprint');
    const cachedVersion = localStorage.getItem('canaan_sermons_data_version');
    const saved = localStorage.getItem('canaan_sermons_data');

    if (!saved || cachedFingerprint !== currentFingerprint || cachedVersion !== SERMONS_DATA_VERSION) {
      const list = sanitizeAndLimitSermons(INITIAL_SERMONS);
      try {
        localStorage.setItem('canaan_sermons_data', JSON.stringify(list));
        localStorage.setItem('canaan_sermons_master_fingerprint', currentFingerprint);
        localStorage.setItem('canaan_sermons_data_version', SERMONS_DATA_VERSION);
      } catch {}
      return list;
    }

    const parsed: Sermon[] = JSON.parse(saved);
    if (Array.isArray(parsed) && parsed.length > 0) {
      const reconciled = parsed.map(s => {
        const master = INITIAL_SERMONS.find(m => m.id === s.id || m.date === s.date);
        if (master) {
          return {
            ...s,
            showVideo: master.showVideo === false ? false : s.showVideo,
            showAudio: master.showAudio === false ? false : s.showAudio
          };
        }
        return s;
      });
      return sanitizeAndLimitSermons(reconciled);
    }
  } catch (e) {
    // ignore
  }
  return sanitizeAndLimitSermons(INITIAL_SERMONS);
}

/**
 * Force reset cache to the latest deployed INITIAL_SERMONS version.
 */
export function resetSermonsToDeployedMaster(): Sermon[] {
  const list = sanitizeAndLimitSermons(INITIAL_SERMONS);
  try {
    localStorage.setItem('canaan_sermons_data', JSON.stringify(list));
    localStorage.setItem('canaan_sermons_master_fingerprint', getMasterDataFingerprint());
    localStorage.setItem('canaan_sermons_data_version', SERMONS_DATA_VERSION);
  } catch {}
  return list;
}

