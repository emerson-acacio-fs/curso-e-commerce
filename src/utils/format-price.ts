export function formatPrice(price: number | bigint): string {
  if (!price) {
    return 'FREE';
  }
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}
