'use client';
// A photograph slot. Shows the real photo from public/assets/<file> when it exists
// (as .jpg, .jpeg or .png); otherwise shows a labelled placeholder saying which file belongs here.
import { useEffect, useRef, useState } from 'react';
import { photoCandidates } from '../config/site';

export default function Photo({ file, label, dark = false, style, children }) {
  const urls = photoCandidates(file);
  const img = useRef(null);
  const [i, setI] = useState(0);
  const tryNext = () => setI((n) => n + 1);

  useEffect(() => {
    // the first image may have failed before React attached its error handler
    const el = img.current;
    if (el && el.complete && el.naturalWidth === 0) tryNext();
  }, []);

  return (
    <div className={'ph' + (dark ? ' dark' : '')} data-label={label} data-file={'public/assets/' + file} style={style}>
      {i < urls.length && (
        <img key={urls[i]} ref={img} src={urls[i]} alt={label} loading="lazy" decoding="async" onError={tryNext} />
      )}
      {children}
    </div>
  );
}