import sha256 from "crypto-js/sha256";

export const generateHash = (data: string): string => {
  const hashValue = sha256(data).toString();
  return hashValue;
};
