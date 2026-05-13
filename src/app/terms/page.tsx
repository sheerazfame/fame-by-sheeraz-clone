import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | famebysheeraz.com",
  description:
    "The terms that govern your use of famebysheeraz.com and Fame by Sheeraz services.",
};

const lastUpdated = "May 1, 2026";

export default function TermsPage() {
  return (
    <section className="bg-[#01060D] text-[#EEEEEE] pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <p className="text-[#EE4223] font-[family-name:var(--font-inter)] text-xs uppercase tracking-widest font-semibold mb-4">
          Legal
        </p>
        <h1
          className="font-[family-name:var(--font-barlow)] font-black italic mb-3"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", lineHeight: "1.05" }}
        >
          Terms &amp; Conditions
        </h1>
        <p className="font-[family-name:var(--font-inter)] text-[#EEEEEE]/55 text-sm mb-12">
          Last updated: {lastUpdated}
        </p>

        <div className="space-y-8 font-[family-name:var(--font-inter)] text-[#EEEEEE]/80 text-base leading-relaxed">
          <p>
            These terms govern your use of famebysheeraz.com (the
            &quot;Site&quot;) and any services we provide through it. By using
            the Site you agree to these terms.
          </p>

          <div>
            <h2 className="font-[family-name:var(--font-barlow)] font-bold text-white text-xl mb-3 uppercase tracking-wide">
              1. The site &amp; the content
            </h2>
            <p>
              All copy, images, video, logos, and other materials on this Site
              are owned by Fame by Sheeraz or licensed to us. You may view and
              share them for personal, non-commercial purposes. Republishing,
              reselling, or scraping the content for commercial use without
              written permission is not allowed.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-barlow)] font-bold text-white text-xl mb-3 uppercase tracking-wide">
              2. Services &amp; engagements
            </h2>
            <p>
              Any service we deliver — strategy, PR, media, fundraising
              introductions, audits — is covered by a separate written
              agreement that takes precedence over these Site terms in case
              of conflict. Marketing copy on this Site is not a binding offer
              by itself; outcomes referenced are historical, not guaranteed.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-barlow)] font-bold text-white text-xl mb-3 uppercase tracking-wide">
              3. Accuracy
            </h2>
            <p>
              We do our best to keep the Site accurate and up to date, but we
              do not warrant that it is error-free or always available. We
              reserve the right to change or remove content at any time.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-barlow)] font-bold text-white text-xl mb-3 uppercase tracking-wide">
              4. Third-party links
            </h2>
            <p>
              The Site may link to third-party websites, social media
              accounts, and tools (WhatsApp, Calendly, etc.). We are not
              responsible for the content, privacy, or security of those
              external sites.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-barlow)] font-bold text-white text-xl mb-3 uppercase tracking-wide">
              5. Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Fame by Sheeraz is not
              liable for any indirect, incidental, or consequential damages
              arising from your use of the Site or any content on it.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-barlow)] font-bold text-white text-xl mb-3 uppercase tracking-wide">
              6. Governing law
            </h2>
            <p>
              These terms are governed by the laws of the Emirate of Dubai,
              United Arab Emirates, without regard to conflict-of-law
              principles. Any dispute will be resolved in the courts of
              Dubai, UAE.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-barlow)] font-bold text-white text-xl mb-3 uppercase tracking-wide">
              7. Changes to these terms
            </h2>
            <p>
              We may update these terms occasionally. The &quot;Last
              updated&quot; date at the top shows the most recent revision.
              Continued use of the Site after a change means you accept the
              new terms.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-barlow)] font-bold text-white text-xl mb-3 uppercase tracking-wide">
              8. Contact
            </h2>
            <p>
              Questions about these terms? Reach us at{" "}
              <a
                href="mailto:info@fame.me"
                className="text-[#F14312] underline-offset-4 hover:underline"
              >
                info@fame.me
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10">
          <Link
            href="/"
            className="font-[family-name:var(--font-inter)] text-sm text-[#EEEEEE]/60 hover:text-[#EEEEEE]"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
