export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function capitalize(s) {
  return s && s[0].toUpperCase() + s.slice(1);
}

export function truncateWithEllipsis(str, maxLength) {
  return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
}
