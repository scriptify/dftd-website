'use client';

export default function Ticker({ items }: { items: string[] }) {
  const content = items.join(' \u2022 ');
  return (
    <div
      className="py-3 overflow-hidden"
      style={{ background: 'var(--gradient-accent)' }}
    >
      <div className="ticker-wrap">
        <div className="ticker-content">
          {[0, 1].map(i => (
            <span key={i} className="inline-block px-4 text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--bg-primary)' }}>
              {content} &bull; {content} &bull;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
