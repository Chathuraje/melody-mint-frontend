export const truncateAddress = (
  address: string | undefined,
  start = 5,
  end = 4
): string => {
  if (!address) return "";
  const addressLength = address.length;
  return `${address.slice(0, start)}...${address.slice(addressLength - end)}`;
};
