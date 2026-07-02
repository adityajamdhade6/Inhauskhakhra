import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Inhaus Khakhra collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="PRIVACY POLICY" updated="[Insert Date]">
      <LegalSection heading="Overview">
        <p>
          Inhaus Khakhra (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your
          privacy. This policy explains what information we collect when you visit
          inhauskhakhra.com or place an order, how we use it, and the choices you have.
        </p>
      </LegalSection>

      <LegalSection heading="Information We Collect">
        <ul className="list-disc space-y-1 pl-5">
          <li>Contact details you give us, such as name, email, phone number and shipping address.</li>
          <li>Order details, including items purchased and payment confirmation (we do not store full card numbers).</li>
          <li>Usage data collected automatically, such as pages visited, device and browser type, and approximate location, typically via cookies or similar technologies.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="How We Use Your Information">
        <ul className="list-disc space-y-1 pl-5">
          <li>To process and deliver your orders.</li>
          <li>To respond to customer support requests.</li>
          <li>To send order updates and, if you opt in, occasional marketing emails.</li>
          <li>To improve our website and understand how it&apos;s used.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Cookies">
        <p>
          We use cookies and similar technologies to keep the site working properly and to
          understand aggregate traffic patterns. You can disable cookies in your browser
          settings, though some features of the site may not work as intended.
        </p>
      </LegalSection>

      <LegalSection heading="Sharing Your Information">
        <p>
          We share information only with service providers who help us run the business —
          for example, payment processors, shipping and logistics partners, and analytics
          providers — and only to the extent needed for them to perform their service. We
          do not sell your personal information to third parties.
        </p>
      </LegalSection>

      <LegalSection heading="Data Security">
        <p>
          We use reasonable technical and organisational measures to protect your
          information. No method of transmission or storage is completely secure, so we
          cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection heading="Your Rights">
        <p>
          You can ask us to access, correct, or delete the personal information we hold
          about you, or to opt out of marketing communications at any time, by contacting
          us using the details below.
        </p>
      </LegalSection>

      <LegalSection heading="Children's Privacy">
        <p>
          Our website and products are not directed at children, and we do not knowingly
          collect personal information from anyone under the age of 18.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to This Policy">
        <p>
          We may update this policy from time to time. Material changes will be reflected
          by an updated &ldquo;last updated&rdquo; date at the top of this page.
        </p>
      </LegalSection>

      <LegalSection heading="Contact Us">
        <p>
          Questions about this policy? Write to us at{" "}
          <a href="mailto:hello@inhauskhakhra.com" className="underline">
            hello@inhauskhakhra.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
