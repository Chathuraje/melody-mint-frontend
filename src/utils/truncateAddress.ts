export const truncateAddress = (address: string | undefined): string => {
  if (!address) return "";
  const addressLength = address.length;
  return `${address.slice(0, 4)}...${address.slice(addressLength - 4)}`;
};
