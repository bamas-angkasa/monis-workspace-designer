import type { Product, WorkspaceConfig } from "@/types/product";

export function formatIdr(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function findProduct(products: Product[], id: string) {
  return products.find((product) => product.id === id);
}

export function calculateMonthlyTotal(
  products: Product[],
  config: WorkspaceConfig,
) {
  const selectedIds = [config.deskId, config.chairId, ...config.accessoryIds];

  return selectedIds.reduce((total, id) => {
    const product = findProduct(products, id);
    return total + (product?.priceMonthly ?? 0);
  }, 0);
}
