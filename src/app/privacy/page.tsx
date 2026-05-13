import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | famebysheeraz.com",
  description:
    "How Fame by Sheeraz collects, uses, and protects your personal data.",
};

const lastUpdated = "May 1, 2026";

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="font-[family-name:var(--font-inter)] text-[#EEEEEE]/55 text-sm mb-12">
          Last updated: {lastUpdated}
        </p>

        <div className="space-y-8 font-[family-name:var(--font-inter)] text-[#EEEEEE]/80 text-base leading-relaxed">
          <p>
            Fame by Sheeraz (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
            respects your privacy. This policy explains what information we
            collect when you visit famebysheeraz.com or contact us, how we use
            it, and the choices you have.
          </p>

          <div>
            <h2 className="font-[family-name:var(--font-barlow)] font-bold text-white text-xl mb-3 uppercase tracking-wide">
              1. Information we collect
            </h2>
            <p>
              When you fill out our contact or audit forms, book a call, or
              reach us by email or WhatsApp, we collect the information you
              provide — typically name, email, phone number, social handles,
              and the message you send us. When you browse the site we also
              receive standard log data (IP, browser, pages viewed) and
              cookie-based analytics.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-barlow)] font-bold text-white text-xl mb-3 uppercase tracking-wide">
              2. How we use it
            </h2>
            <p>
              We use your information to respond to your inquiry, deliver the
              services you ask for, improve the site, and occasionally send
              you relevant updates. We do not sell your personal data to third
              parties.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-barlow)] font-bold text-white text-xl mb-3 uppercase tracking-wide">
              3. Cookies &amp; analytics
            </h2>
            <p>
              The site uses cookies and similar technologies for analytics,
              performance, and remembering your preferences. You can disable
              non-essential cookies in your browser at any time; some features
              may not work as well without them.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-barlow)] font-bold text-white text-xl mb-3 uppercase tracking-wide">
              4. Sharing
            </h2>
            <p>
              We share data only with trusted service providers we rely on to
              run the business (hosting, email, scheduling, CRM, analytics),
              and only to the extent they need it to do their job. We may
              disclose information when required by law or to protect our
              rights.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-barlow)] font-bold text-white text-xl mb-3 uppercase tracking-wide">
              5. Your rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal data. You may also opt out of marketing communications
              at any time. Email us at{" "}
              <a
                href="mailto:info@fame.me"
                className="text-[#F14312] underline-offset-4 hover:underline"
              >
                info@fame.me
              </a>{" "}
              to make a request.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-barlow)] font-bold text-white text-xl mb-3 uppercase tracking-wide">
              6. Data retention &amp; security
            </h2>
            <p>
              We keep personal data only for as long as we need it for the
              purposes described above, then we delete or anonymise it. We use
              industry-standard safeguards to protect data in transit and at
              rest. No system is perfectly secure, but we take reasonable
              steps to keep your information safe.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-barlow)] font-bold text-white text-xl mb-3 uppercase tracking-wide">
              7. Changes
            </h2>
            <p>
              We may update this policy from time to time. The &quot;Last
              updated&quot; date at the top of the page reflects the most
              recent revision.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-barlow)] font-bold text-white text-xl mb-3 uppercase tracking-wide">
              8. Contact
            </h2>
            <p>
              Questions about this policy? Reach us at{" "}
              <a
                href="mailto:info@fame.me"
                className="text-[#F14312] underline-offset-4 hover:underline"
              >
                info@fame.me
              </a>{" "}
              or via WhatsApp on{" "}
              <a
                href="https://wa.me/971585131664"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F14312] underline-offset-4 hover:underline"
              >
                +971 58 513 1664
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
