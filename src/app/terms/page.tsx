import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the Inhaus Khakhra website and orders.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="TERMS OF SERVICE" updated="[Insert Date]">
      <LegalSection heading="Acceptance of Terms">
        <p>
          By using inhauskhakhra.com or placing an order with us, you agree to these
          Terms of Service. If you don&apos;t agree, please don&apos;t use the site.
        </p>
      </LegalSection>

      <LegalSection heading="Products & Availability">
        <p>
          We describe our products as accurately as possible, but flavours, packaging and
          availability may change without notice. We reserve the right to limit quantities
          or discontinue any product at any time.
        </p>
      </LegalSection>

      <LegalSection heading="Orders & Payment">
        <p>
          Placing an order is an offer to purchase, which we may accept or decline. Payment
          is processed securely through our third-party payment provider at checkout; we do
          not store your full card details.
        </p>
      </LegalSection>

      <LegalSection heading="Pricing">
        <p>
          All prices are listed in Indian Rupees (₹) and are subject to change without
          notice. We make reasonable efforts to ensure prices are accurate, but errors may
          occur — if they do, we&apos;ll contact you before processing an affected order.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual Property">
        <p>
          All content on this site — including the Inhaus Khakhra name, logo, packaging
          design, illustrations, and copy — belongs to us and may not be reproduced without
          permission.
        </p>
      </LegalSection>

      <LegalSection heading="User Conduct">
        <p>
          You agree not to misuse the site, attempt to disrupt its operation, or use it for
          any unlawful purpose.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Inhaus Khakhra is not liable for indirect,
          incidental, or consequential damages arising from your use of the site or our
          products, beyond the value of the relevant order.
        </p>
      </LegalSection>

      <LegalSection heading="Governing Law">
        <p>
          These terms are governed by the laws of India, and any disputes will be subject
          to the exclusive jurisdiction of the courts of [Insert City].
        </p>
      </LegalSection>

      <LegalSection heading="Changes to These Terms">
        <p>
          We may update these terms from time to time. Continued use of the site after
          changes are posted means you accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection heading="Contact Us">
        <p>
          Questions about these terms? Write to us at{" "}
          <a href="mailto:hello@inhauskhakhra.com" className="underline">
            hello@inhauskhakhra.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
