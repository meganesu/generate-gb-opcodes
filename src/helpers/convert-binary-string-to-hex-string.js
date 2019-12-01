const convertBinaryStringToHexString = (binaryString) => {
  const decimalValue = parseInt(binaryString, 2);
  const hexString = decimalValue.toString(16).padStart(2, '0');
  return hexString.toUpperCase();
};

export default convertBinaryStringToHexString;
