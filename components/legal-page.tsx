import type { ReactNode } from 'react';

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="legal-page">
      <article className="legal-shell">
        <a className="legal-back" href="/">← Back to SGDietz</a>
        <h1>{title}</h1>
        <p className="legal-date">Effective and last updated: September 9, 2026</p>
        <p className="legal-note">This is a practical, site-specific draft for the current SGDietz website and should be reviewed by a qualified attorney before production publication.</p>
        {children}
        <footer className="legal-note">
          <p>SGDietz is operated by DietzX LLC. Questions may be directed through the official SGDietz X profile or by phone at <a href="tel:+18552532727">855-253-2727</a>.</p>
        </footer>
      </article>
    </main>
  );
}
