/**
 * Truncate the address
 * @param {string} address - The address to truncate
 * @param {number} start - The number of characters to show at the start
 * @param {number} end - The number of characters to show at the end
 * @returns {string} - The truncated address
 */

interface truncateAddressParams {
  address: string | undefined;
  start?: number;
  end?: number;
}

export const truncateAddress = (params: truncateAddressParams): string => {
  const { address, start = 5, end = 4 } = params;

  if (!address) return "";
  const addressLength = address.length;
  return `${address.slice(0, start)}...${address.slice(addressLength - end)}`;
};
