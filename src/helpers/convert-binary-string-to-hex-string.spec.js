import { convertBinaryStringToHexString } from './convert-binary-string-to-hex-string';

describe('convertBinaryStringToHexString', () => {
  it('converts a string from binary to hex correctly', () => {
    const binaryString = '00101100';
    expect(convertBinaryStringToHexString(binaryString)).toBe('2C');
  });
  it('pads a one-digit hex string to be two digits', () => {
    const binaryString = '1100';
    expect(convertBinaryStringToHexString(binaryString)).toBe('0C');
  });
  it('converts a binary string to a 4-digit hex string correctly', () => {
    const binaryString = '1100110011001100';
    expect(convertBinaryStringToHexString(binaryString)).toBe('CCCC');
  });
});