import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = { title: 'Cookie Notice — SGDietz' };

export default function CookieNotice() {
  return <LegalPage title="Cookie Notice">
    <section><h2>Current Site Use</h2><p>Based on the current implementation, this site does not intentionally deploy site-owned analytics or advertising cookies. The site does not currently provide accounts, a shopping cart, payments, a contact form, or a mailing-list form.</p></section>
    <section><h2>Embedded and Linked Services</h2><p>The site embeds a YouTube video player. YouTube, Google, and other third parties may use cookies, local storage, pixels, or similar technologies when their content loads or when you interact with it. External music, social, and album links may do the same after you leave this site. Those technologies are controlled by the relevant third party, not by this site.</p></section>
    <section><h2>Your Controls</h2><p>You can avoid interacting with the embedded player, adjust your browser’s cookie controls, clear stored data, or use the privacy controls offered by Google, YouTube, and other linked services. Blocking some technologies may affect third-party media or link functionality.</p></section>
    <section><h2>Changes and Contact</h2><p>If site-owned analytics, advertising, accounts, forms, commerce, or other features are added, this notice should be updated before or when those technologies are introduced. Questions may be directed through the official <a href="https://x.com/SGDietzX">SGDietz X profile</a>. X controls which contact or messaging options are available.</p></section>
  </LegalPage>;
}
