# Sabitha — 50 Years of Love

A scroll-driven birthday film for Mumma's 50th (10 November 2026), built with
Next.js, GSAP + ScrollTrigger and Lenis.

---

## 1. Run it on your computer

You need **Node.js 18 or newer** (download from nodejs.org).

```bash
cd sabitha-50
npm install
npm run dev
```

Open http://localhost:3000 and scroll.

## 2. Add the photographs

Put each photo in `public/assets/photos/` using the exact file name listed in
**`public/assets/README.md`**. Every placeholder on the site also shows the path it expects.
Refresh the page and the photo replaces the placeholder. Nothing else to edit.

Chapter 8's heart has 27 tiles that cycle through your family photos. Name them
`family-01.jpg`, `family-02.jpg`, … and set `familyPhotoCount` in `config/site.js` to how many you added.

## 3. Add the family birthday video

Save the final compilation as `public/assets/video/family-wishes.mp4`
(optionally a still as `family-wishes-poster.jpg`).

- It never autoplays. Mumma presses play.
- Pressing play fades the music out. The video plays to the end with normal controls.
- When it ends, the music returns softly and the page glides to the final screen.

Large videos: keep it under ~100 MB on Vercel/Netlify free plans (1080p H.264 at about 6–8 Mbps is a good balance).
If yours is bigger, upload it somewhere that gives a direct `.mp4` link and paste that full `https://…` link as
`video` in `config/site.js`.

## 4. Add background music

Save your track as `public/assets/audio/soundtrack.mp3`. It loops, starts when Mumma presses
"Let's take a walk down memory lane", has a play/pause and volume control at the top right, gets
softer for the letter (Ch 9), and fades out for the video.

Until you add a file, a gentle generated piano plays so the site is never silent.
Use music you have the right to use: royalty-free libraries such as Pixabay Music, the YouTube Audio Library,
or a licensed track. "Emotional piano" or "nostalgic acoustic" searches work well.

## 5. Deploy (put it online)

The site builds to plain static files:

```bash
npm run build
```

This creates the `out/` folder. Any of these work:

- **Vercel (easiest):** push the folder to a GitHub repo, then "Add New Project" at vercel.com and import it.
  No settings needed. Or run `npx vercel` inside the folder.
- **Netlify:** drag the `out/` folder onto app.netlify.com/drop.
- **GitHub Pages (in a sub-folder):** build with
  `NEXT_PUBLIC_BASE_PATH=/your-repo-name npm run build` and publish `out/`.

To preview the built version locally: `npm run build` then `npm start`.

---

## How the code is organised

```
app/                 layout, page, all styles (globals.css)
components/
  Experience.jsx     the film in order + starts the animations
  chapters/          one component per chapter (all the words live here)
  Photo.jsx          photo slot with automatic placeholder
  MusicPlayer.jsx    play/pause + volume pill
  ProgressRail.jsx   chapter dots + scroll progress
  VideoPlayer.jsx    the Chapter 11 video
lib/
  experience.js      every scroll animation (desktop pinned timelines + phone reveals)
  music.js           soundtrack, fades, generated-piano fallback
  chapters.js        chapter order + rail labels
config/site.js       file names for music, video, portrait, family photo count
public/assets/       your photos, video and music
```

- **Change any wording:** edit the matching file in `components/chapters/`.
- **Change pacing:** in `lib/experience.js`, each `scene('ch04', 300, …)` takes the scroll length in % of
  screen height. Bigger means slower.
- **Phones** get vertical reveals instead of pinned scenes. People with "reduce motion" turned on
  get the content without scroll animation.
