import { Sermon } from '../types';
import * as SermonsData from '../data/sermonsData';

export const INITIAL_SERMONS: Sermon[] = 
  (SermonsData as any).SERMON_CONTENT_LIST || 
  (SermonsData as any).INITIAL_SERMONS || 
  (SermonsData as any).RECENT_SERMONS || 
  [];

export const SERMON_CONTENT_LIST: Sermon[] = INITIAL_SERMONS;

export const SERMONS_DATA_VERSION: string = 
  (SermonsData as any).SERMONS_DATA_VERSION || 
  `version-2026-09-12-clean-v3`;

/**
 * Generate a deterministic fingerprint of the compiled master sermons.
 * Any change in titles, dates, speakers, scriptures, passcodes, video/audio visibility or count in code triggers an immediate refresh.
 */
export function getMasterDataFingerprint(): string {
  try {
    return `${SERMONS_DATA_VERSION}::` + INITIAL_SERMONS.map(s => 
      `${s.id}:${s.date}:${s.titleZh}:${s.speakerZh}:${s.videoUrl || ''}:${s.videoPasscode || ''}:${s.showVideo === true}:${s.showAudio === true}`
    ).join('|');
  } catch {
    return `${SERMONS_DATA_VERSION}::${INITIAL_SERMONS.length}`;
  }
}

/**
 * Authoritative sermon loader.
 * Validates cache against compiled master version and fingerprint.
 * Guarantees that any turned-off visibility flags (showVideo: false, showAudio: false) in the
 * deployed master take immediate, unconditional effect across all deployment environments (Cloudflare Pages, GitHub).
 */
export function loadAndSyncSermons(): Sermon[] {
  const masterList = [...INITIAL_SERMONS].sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  try {
    const currentFingerprint = getMasterDataFingerprint();
    const cachedFingerprint = localStorage.getItem('canaan_sermons_master_fingerprint');
    const cachedVersion = localStorage.getItem('canaan_sermons_data_version');
    const saved = localStorage.getItem('canaan_sermons_data');

    // If cache is missing or version/fingerprint does not match the clean master, purge obsolete cache
    if (!saved || cachedFingerprint !== currentFingerprint || cachedVersion !== SERMONS_DATA_VERSION) {
      try {
        localStorage.setItem('canaan_sermons_data', JSON.stringify(masterList));
        localStorage.setItem('canaan_sermons_master_fingerprint', currentFingerprint);
        localStorage.setItem('canaan_sermons_data_version', SERMONS_DATA_VERSION);
      } catch {}
      return masterList;
    }

    const parsed: Sermon[] = JSON.parse(saved);
    if (Array.isArray(parsed) && parsed.length > 0) {
      const reconciled = parsed.map(s => {
        const master = masterList.find(m => m.id === s.id || m.date === s.date);
        if (master) {
          return {
            ...s,
            // If master in code has showVideo === false, force false
            showVideo: master.showVideo === false ? false : Boolean(s.showVideo),
            // If master in code has showAudio === false, force false
            showAudio: master.showAudio === false ? false : Boolean(s.showAudio)
          };
        }
        return s;
      });
      return reconciled;
    }
  } catch (e) {
    // ignore
  }

  return masterList;
}

/**
 * Force reset cache to the latest deployed INITIAL_SERMONS version.
 */
export function resetSermonsToDeployedMaster(): Sermon[] {
  const list = [...INITIAL_SERMONS].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  try {
    localStorage.removeItem('canaan_sermons_data');
    localStorage.setItem('canaan_sermons_data', JSON.stringify(list));
    localStorage.setItem('canaan_sermons_master_fingerprint', getMasterDataFingerprint());
    localStorage.setItem('canaan_sermons_data_version', SERMONS_DATA_VERSION);
  } catch {}
  return list;
}
