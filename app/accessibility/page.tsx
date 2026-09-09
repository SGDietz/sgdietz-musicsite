import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = { title: 'Accessibility Statement — SGDietz' };

export default function AccessibilityStatement() {
  return <LegalPage title="Accessibility Statement">
    <section><h2>Commitment</h2><p>SGDietz intends this website to be usable by as many people as reasonably possible, including people who use keyboards, screen readers, magnification, captions, or other assistive technologies.</p></section>
    <section><h2>Current Approach</h2><p>The site uses semantic headings, descriptive link text, alternative text for key images, visible focus behavior supplied by the browser, responsive layouts, and reduced-motion support for the moving genre rail. Accessibility is an ongoing effort, not a one-time certification.</p></section>
    <section><h2>Known Third-Party Limitation</h2><p>The embedded YouTube player and linked third-party platforms are controlled by their respective providers. Their accessibility features and limitations may differ from this site.</p></section>
    <section><h2>No Conformance Certification</h2><p>This statement does not claim formal certification or complete conformance with a particular accessibility standard. The site should continue to be evaluated as content and technology change.</p></section>
    <section><h2>Report a Barrier</h2><p>If you have difficulty using the site or need information in another reasonable format, contact SGDietz through the official <a href="https://x.com/SGDietzX">X profile</a>. X controls which contact or messaging options are available. Please describe the page, the problem, and the assistive technology or browser involved if you are comfortable doing so, and do not include sensitive personal information in a public post.</p></section>
  </LegalPage>;
}
