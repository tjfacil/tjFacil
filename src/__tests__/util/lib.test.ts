import {
  getCourtCodeFromSuitNumber,
  getCourtUrl,
  getSuitNumberFromInput,
  getSuitSearchUrl,
  isFirstCharNumeric,
  validateInput,
} from '../../util/lib';
import { mockCourtsData } from '../app-data';

describe('lib tests', () => {
  test('isFirstCharNumeric', () => {
    expect(isFirstCharNumeric('test123')).toBe(false);
    expect(isFirstCharNumeric('')).toBe(false);
    expect(isFirstCharNumeric('one')).toBe(false);
    expect(isFirstCharNumeric('123test')).toBe(true);
    expect(isFirstCharNumeric('   123test')).toBe(true);
  });

  test('validateInput', () => {
    expect(validateInput('')).toBe(false);
    expect(validateInput('  123test')).toBe(false);
    expect(validateInput('!test')).toBe(false);
    expect(validateInput('test123')).toBe(true);
    expect(validateInput('123test')).toBe(true);
  });

  test('getSuitNumberFromInput', () => {
    const long1 = '00000000000000000000000000000';
    const long2 = '00000000000000000000000000123';
    expect(getSuitNumberFromInput(long1)).toBe('00000000000000000000');
    expect(getSuitNumberFromInput(long2)).toBe('00000000000000000123');
    expect(getSuitNumberFromInput('123')).toBe('00000000000000000123');
    expect(getSuitNumberFromInput('abc')).toBe('00000000000000000000');
    expect(getSuitNumberFromInput('')).toBe('00000000000000000000');
  });

  test('getCourtCodeFromSuitNumber', () => {
    expect(getCourtCodeFromSuitNumber('')).toBe('000');
    expect(getCourtCodeFromSuitNumber('00000000000008190000')).toBe('819');
    expect(getCourtCodeFromSuitNumber('00000000000008130000')).toBe('813');
    expect(getCourtCodeFromSuitNumber('00000000000006000000')).toBe('600');
    expect(getCourtCodeFromSuitNumber('00000000000006120000')).toBe('600');
    expect(getCourtCodeFromSuitNumber('00000000000007000000')).toBe('700');
    expect(getCourtCodeFromSuitNumber('00000000000007120000')).toBe('700');
    expect(getCourtCodeFromSuitNumber('00000000000004000000')).toBe('40000');
    expect(getCourtCodeFromSuitNumber('00000000000004123400')).toBe('41234');
  });

  test('getSuitSearchUrl', () => {
    const court = mockCourtsData[0];
    expect(getSuitSearchUrl(court, '', '')).toBe('');
    expect(getSuitSearchUrl(court, 'test', 'test')).toBe('');
    expect(getSuitSearchUrl(court, 'first', 'physical')).toBe(
      'testFirstPhysicalSearchPage1'
    );
    expect(getSuitSearchUrl(court, 'first', 'electronic')).toBe(
      'testFirstElectronicSearchPage1'
    );
    expect(getSuitSearchUrl(court, 'second', 'physical')).toBe(
      'testSecondPhysicalSearchPage1'
    );
    expect(getSuitSearchUrl(court, 'second', 'electronic')).toBe(
      'testSecondElectronicSearchPage1'
    );
  });

  test('getCourtUrl', () => {
    expect(getCourtUrl(mockCourtsData, '', '', '')).toBe('');
    expect(getCourtUrl(mockCourtsData, '1230000', '', '')).toBe('');
    expect(getCourtUrl(mockCourtsData, '1230000', 'first', '')).toBe('');
    expect(getCourtUrl(mockCourtsData, '1230000', 'first', 'electronic')).toBe(
      'testFirstElectronicSearchPage1'
    );
    expect(getCourtUrl(mockCourtsData, '3450000', 'second', 'physical')).toBe(
      'testSecondPhysicalSearchPage3'
    );
    expect(getCourtUrl(mockCourtsData, 'testAbbr1', '', '')).toBe(
      'testMainPage1'
    );
    expect(getCourtUrl(mockCourtsData, 'testAbbr3', '', '')).toBe(
      'testMainPage3'
    );
  });
});
