import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description: "Shipping timelines, order tracking, and our returns policy.",
};

export default function ShippingReturnsPage() {
  return (
    <LegalLayout title="SHIPPING & RETURNS" updated="[Insert Date]">
      <LegalSection heading="Shipping">
        <p>
          Orders are typically processed within [1–2] business days. Delivery times vary by
          location and are generally [3–7] business days across India. Shipping charges, if
          any, are shown at checkout before you pay.
        </p>
      </LegalSection>

      <LegalSection heading="Order Tracking">
        <p>
          Once your order ships, you&apos;ll receive a tracking link by email or SMS so you
          can follow it to your door.
        </p>
      </LegalSection>

      <LegalSection heading="Returns & Replacements">
        <p>
          Because our khakhra is a fresh, perishable food product, we&apos;re unable to
          accept returns of opened packs. If your order arrives damaged, incorrect, or with
          a manufacturing issue, contact us within [48 hours] of delivery with a photo of
          the product and packaging, and we&apos;ll arrange a replacement or refund.
        </p>
      </LegalSection>

      <LegalSection heading="Refunds">
        <p>
          Approved refunds are issued to your original payment method and typically appear
          within [5–7] business days, depending on your bank or payment provider.
        </p>
      </LegalSection>

      <LegalSection heading="Damaged or Missing Items">
        <p>
          If a package arrives visibly damaged or is missing items, please reach out right
          away so we can resolve it quickly.
        </p>
      </LegalSection>

      <LegalSection heading="Contact Us">
        <p>
          For any shipping or return questions, email us at{" "}
          <a href="mailto:hello@inhauskhakhra.com" className="underline">
            hello@inhauskhakhra.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
