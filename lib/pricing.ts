import type { CurrencyCode, Option } from "@/types/product";

const currencyRatesFromIdr: Record<CurrencyCode, number> = {
  IDR: 1,
  USD: 0.000061,
  EUR: 0.000056,
  SGD: 0.000083,
  AUD: 0.000092,
};

const currencyLocales: Record<CurrencyCode, string> = {
  IDR: "id-ID",
  USD: "en-US",
  EUR: "de-DE",
  SGD: "en-SG",
  AUD: "en-AU",
};

export const currencyOptions: {
  code: CurrencyCode;
  label: string;
  region: string;
}[] = [
  { code: "IDR", label: "IDR", region: "Indonesian rupiah" },
  { code: "USD", label: "USD", region: "US dollar" },
  { code: "EUR", label: "EUR", region: "Euro" },
  { code: "SGD", label: "SGD", region: "Singapore dollar" },
  { code: "AUD", label: "AUD", region: "Australian dollar" },
];

export function formatPrice(valueInIdr: number, currency: CurrencyCode) {
  const converted = valueInIdr * currencyRatesFromIdr[currency];
  const rounded = Math.round(converted);

  if (currency === "IDR") {
    return `Rp ${new Intl.NumberFormat("id-ID").format(rounded)}`;
  }

  return new Intl.NumberFormat(currencyLocales[currency], {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(rounded);
}

export function calculateMonthlyTotal(options: Option[]) {
  return options.reduce((total, option) => total + option.price, 0);
}
