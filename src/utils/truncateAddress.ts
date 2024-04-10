export const truncateAddress = (
  address: string | undefined,
  start = 0,
  end = 5
): string => {
  if (!address) return "";
  const addressLength = address.length;
  return `${address.slice(0, start)}...${address.slice(addressLength - end)}`;
};
