'use client';
// A photograph slot. Shows the real photo from public/assets/<file> when it exists;
// otherwise shows a labelled placeholder saying exactly which file belongs here.
import { useEffect, useRef, useState } from 'react';
import { asset } from '../config/site';

export default function Photo({ file, label, dark = false, style, children }) {
  const img = useRef(null);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    // the image may have failed before React attached its error handler
    const el = img.current;
    if (el && el.complete && el.naturalWidth === 0) setMissing(true);
  }, []);

  return (
    <div className={'ph' + (dark ? ' dark' : '')} data-label={label} data-file={'public/assets/' + file} style={style}>
      {!missing && (
        <img ref={img} src={asset(file)} alt={label} loading="lazy" decoding="async" onError={() => setMissing(true)} />
      )}
      {children}
    </div>
  );
}
