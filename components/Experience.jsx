'use client';
// The whole film, in order. Each chapter is its own component in ./chapters.
// After mount, lib/experience.js wires up smooth scrolling and every scroll-driven animation.
import { useEffect } from 'react';
import { initExperience } from '../lib/experience';
import MusicPlayer from './MusicPlayer';
import ProgressRail from './ProgressRail';
import Opening from './chapters/Opening';
import Ch01GoodLuck from './chapters/Ch01GoodLuck';
import Ch02Papa from './chapters/Ch02Papa';
import Ch03BeforeMumma from './chapters/Ch03BeforeMumma';
import Ch04LoveStory from './chapters/Ch04LoveStory';
import Ch05Lollipop from './chapters/Ch05Lollipop';
import Ch05AndThenMe from './chapters/Ch05AndThenMe';
import Ch05SchoolRun from './chapters/Ch05SchoolRun';
import Ch06TwoOfUs from './chapters/Ch06TwoOfUs';
import Ch06Height from './chapters/Ch06Height';
import Ch07Tiffin from './chapters/Ch07Tiffin';
import Ch08Favourite from './chapters/Ch08Favourite';
import Ch09Letter from './chapters/Ch09Letter';
import Ch10Fifty from './chapters/Ch10Fifty';
import Ch11Message from './chapters/Ch11Message';
import Final from './chapters/Final';

export default function Experience() {
  useEffect(() => initExperience(), []);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
      <MusicPlayer />
      <ProgressRail />
      <main>
        <Opening />
        <Ch01GoodLuck />
        <Ch02Papa />
        <Ch03BeforeMumma />
        <Ch04LoveStory />
        <Ch05Lollipop />
        <Ch05AndThenMe />
        <Ch05SchoolRun />
        <Ch06TwoOfUs />
        <Ch06Height />
        <Ch07Tiffin />
        <Ch08Favourite />
        <Ch09Letter />
        <Ch10Fifty />
        <Ch11Message />
        <Final />
      </main>
    </>
  );
}
