import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = { title: 'Terms of Use — SGDietz' };

export default function TermsOfUse() {
  return <LegalPage title="Terms of Use">
    <section><h2>Acceptance and Permitted Use</h2><p>By using this site, you agree to these terms. You may browse the site and use its links for personal, lawful, noncommercial purposes. Do not disrupt the site, attempt unauthorized access, misuse its content, introduce malicious code, or use it in a way that violates another person’s rights or applicable law.</p></section>
    <section><h2>Content and Intellectual Property</h2><p>Unless otherwise indicated, the site’s text, design, branding, music-related materials, photographs, artwork, and other original content are owned by or licensed to SGDietz and are protected by applicable intellectual-property laws. No ownership rights are transferred to you. Written permission is required to reproduce, distribute, sell, modify, publicly perform, or create derivative works from protected site content, except where applicable law permits otherwise.</p></section>
    <section><h2>Third-Party Services</h2><p>The site links to or embeds services operated by others, including YouTube, music platforms, social platforms, and album-link services. Those services are provided under their own terms and policies. SGDietz does not control their availability, security, content, or practices and is not responsible for them.</p></section>
    <section><h2>No Warranties</h2><p>The site and its content are provided “as is” and “as available.” To the fullest extent permitted by law, SGDietz disclaims warranties of accuracy, availability, merchantability, fitness for a particular purpose, noninfringement, and uninterrupted or error-free operation. Nothing on the site is professional advice.</p></section>
    <section><h2>Limitation of Liability</h2><p>To the fullest extent permitted by law, SGDietz will not be liable for indirect, incidental, special, consequential, or punitive damages arising from use of, inability to use, or reliance on this site or a third-party destination. Some jurisdictions do not allow certain exclusions, so portions of this section may not apply to you.</p></section>
    <section><h2>Changes and Availability</h2><p>Site content, links, features, and these terms may change or be removed without notice. Continued use after updated terms are posted means you accept the updated terms to the extent permitted by law.</p></section>
    <section><h2>Contact</h2><p>Questions about these terms may be directed through the official <a href="https://x.com/SGDietzX">SGDietz X profile</a>. X controls which contact or messaging options are available.</p></section>
  </LegalPage>;
}
