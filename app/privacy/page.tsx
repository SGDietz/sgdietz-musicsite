import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = { title: 'Privacy Policy — SGDietz' };

export default function PrivacyPolicy() {
  return <LegalPage title="Privacy Policy">
    <section><h2>Scope</h2><p>This policy describes privacy practices for the SGDietz website. The current site presents music, artwork, an embedded YouTube video, links to third-party music and social platforms, and a link to the official SGDietz X profile.</p></section>
    <section><h2>Information the Site May Process</h2><p>The current site does not provide an account, contact form, mailing-list form, checkout, payment flow, or user-upload feature. When the site is hosted, the hosting and network providers may automatically process technical information such as an IP address, browser and device information, requested pages, timestamps, and security logs to deliver and protect the site.</p></section>
    <section><h2>YouTube Embed</h2><p>The page includes a video player supplied by YouTube, a Google service. Loading or interacting with that player may allow Google or YouTube to receive device, browser, network, and interaction information and to use cookies or similar technologies under their own policies. Your YouTube or Google account settings may also affect that processing.</p></section>
    <section><h2>Outbound Links</h2><p>Links to music services, social platforms, album-link services, and other external destinations take you away from this site. Those services control their own privacy practices. Review their notices before providing information to them.</p></section>
    <section><h2>Contact Through X</h2><p>The site’s direct-contact link leads to the official <a href="https://x.com/SGDietzX">SGDietz X profile</a>. If you interact there, X controls how your account information, public posts, messages, and other activity are processed under its own policies. Do not send sensitive personal information through a public post.</p></section>
    <section><h2>Security and Retention</h2><p>Reasonable measures may be used to protect information associated with the site, but no internet transmission is completely secure. Technical logs and communications received through third-party services should be kept only as long as reasonably needed for site operation, security, communication, recordkeeping, or legal requirements.</p></section>
    <section><h2>Your Choices and Rights</h2><p>You may avoid the YouTube player and external links. Depending on where you live, applicable law may give you rights concerning personal information. To ask a privacy question or make a request, contact SGDietz through the official <a href="https://x.com/SGDietzX">X profile</a>. X controls which contact or messaging options are available. Identity verification may be required before acting on a request.</p></section>
    <section><h2>Changes</h2><p>This policy may be updated as the site or its services change. The date above identifies the current draft.</p></section>
  </LegalPage>;
}
