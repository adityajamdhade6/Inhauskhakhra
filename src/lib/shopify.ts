import type { FlavorId } from "./flavors";

// Fill these in once your Shopify products exist:
// 1. NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN — e.g. "inhaus-khakhra.myshopify.com"
// 2. One NEXT_PUBLIC_SHOPIFY_VARIANT_* per flavour — the numeric variant ID
//    from each product's Shopify admin URL, or via the Storefront API.
// Until these are set, "Shop" buttons fall back to on-page anchor links.
export const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN ?? "";

export const SHOPIFY_VARIANT_IDS: Record<FlavorId, string> = {
  "magic-masala": process.env.NEXT_PUBLIC_SHOPIFY_VARIANT_MAGIC_MASALA ?? "",
  "pani-puri": process.env.NEXT_PUBLIC_SHOPIFY_VARIANT_PANI_PURI ?? "",
  jeera: process.env.NEXT_PUBLIC_SHOPIFY_VARIANT_JEERA ?? "",
  methi: process.env.NEXT_PUBLIC_SHOPIFY_VARIANT_METHI ?? "",
  schezwan: process.env.NEXT_PUBLIC_SHOPIFY_VARIANT_SCHEZWAN ?? "",
};

/** Shopify's cart permalink: redirects straight to hosted checkout, no SDK needed. */
export function shopifyCartUrl(variantIds: (string | undefined)[]): string | null {
  if (!SHOPIFY_STORE_DOMAIN) return null;
  const ids = variantIds.filter((id): id is string => Boolean(id));
  if (ids.length === 0) return null;
  const items = ids.map((id) => `${id}:1`).join(",");
  return `https://${SHOPIFY_STORE_DOMAIN}/cart/${items}`;
}

export function shopUrlFor(flavorId: FlavorId): string {
  return shopifyCartUrl([SHOPIFY_VARIANT_IDS[flavorId]]) ?? "#flavours";
}

export function shopUrlForAll(): string {
  return shopifyCartUrl(Object.values(SHOPIFY_VARIANT_IDS)) ?? "#flavours";
}
