export const convertBinaryStringToHexString = (binaryString) => {
  const decimalValue = parseInt(binaryString, 2);
  const hexString = decimalValue.toString(16);
  return hexString.toUpperCase();
};
