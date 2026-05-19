import type { CurrencyCode, Product, WorkspaceConfig } from "@/types/product";

const currencyRatesFromIdr: Record<CurrencyCode, number> = {
  USD: 0.000062,
  EUR: 0.000057,
  JPY: 0.0097,
  IDR: 1,
  THB: 0.0023,
  RUB: 0.0055,
  CNY: 0.00045,
  VND: 1.58,
};

const currencyLocales: Record<CurrencyCode, string> = {
  USD: "en-US",
  EUR: "de-DE",
  JPY: "ja-JP",
  IDR: "id-ID",
  THB: "th-TH",
  RUB: "ru-RU",
  CNY: "zh-CN",
  VND: "vi-VN",
};

export const currencyOptions: {
  code: CurrencyCode;
  label: string;
  region: string;
}[] = [
  { code: "IDR", label: "IDR", region: "Indonesian rupiah" },
  { code: "USD", label: "USD", region: "US dollar" },
  { code: "EUR", label: "EUR", region: "Euro" },
  { code: "THB", label: "THB", region: "Thai baht" },
  { code: "JPY", label: "JPY", region: "Japanese yen" },
  { code: "CNY", label: "CNY", region: "Chinese yuan" },
  { code: "VND", label: "VND", region: "Vietnamese dong" },
  { code: "RUB", label: "RUB", region: "Russian ruble" },
];

export function formatIdr(value: number) {
  return formatPrice(value, "IDR");
}

export function formatPrice(valueInIdr: number, currency: CurrencyCode) {
  const converted = valueInIdr * currencyRatesFromIdr[currency];

  return new Intl.NumberFormat(currencyLocales[currency], {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(converted);
}

export function findProduct(products: Product[], id: string) {
  return products.find((product) => product.id === id);
}

export function calculateMonthlyTotal(
  products: Product[],
  config: WorkspaceConfig,
) {
  const selectedIds = [
    config.deskId,
    config.chairId,
    ...config.accessoryIds,
  ].filter((id): id is string => Boolean(id));

  return selectedIds.reduce((total, id) => {
    const product = findProduct(products, id);
    return total + (product?.priceMonthly ?? 0);
  }, 0);
}
