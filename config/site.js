// ─────────────────────────────────────────────────────────────
//  Everything you might want to change lives here.
//  All media files go in  public/assets/  (see public/assets/README.md).
// ─────────────────────────────────────────────────────────────

// Leave empty unless you host the site in a sub-folder (e.g. GitHub Pages: "/sabitha-50").
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const SITE = {
  // Background music. If this file is missing, a soft generated piano plays instead.
  music: 'audio/soundtrack.mp3',

  // The family birthday video (Chapter 11). If missing, an 8-second stand-in plays.
  // Can also be a full https:// link to an .mp4 hosted elsewhere.
  video: 'video/family-wishes.mp4',
  videoPoster: 'video/family-wishes-poster.jpg',

  // Chapter 9: this portrait is cut into the tiles that drift together beside the letter.
  portrait: 'photos/09-letter/mumma-portrait.jpg',

  // Chapter 8: how many photos you put in photos/08-family/ (family-01.jpg, family-02.jpg, …).
  // The 27 tiles of the heart cycle through them.
  familyPhotoCount: 12,
};

export const asset = (path) => `${BASE}/assets/${path}`;

export const familyPhoto = (n) =>
  `photos/08-family/family-${String(((n - 1) % SITE.familyPhotoCount) + 1).padStart(2, '0')}.jpg`;
