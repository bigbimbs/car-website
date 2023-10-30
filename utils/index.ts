export function formatMoney(
  amount: number,
  decimalPlaces = 2,
  currencySymbol = "₦"
) {
  if (typeof amount !== "number") {
    return "Invalid Input";
  }

  const options = {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  };

  return currencySymbol + amount.toLocaleString(undefined, options);
}
