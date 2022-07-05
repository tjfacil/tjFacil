export const mockFetchOkEmpty = {
  ok: true,
  json: async () => {
    return {
      total: 0,
      courts: [],
    };
  },
};

export const mockFetchErr = {
  json: async () => {
    return {
      error: true,
    };
  },
};

export const mockFetchOkData = {
  ok: true,
  json: async () => {
    return {
      total: 2,
      courts: mockCourtsData,
    };
  },
};

export const mockCourtsData = [
  {
    _id: 'testMongoId1',
    id: 'testId1',
    code: 'testCode1',
    abbr: 'testAbbr1',
    name: 'testName1',
    mainPage: 'testMainPage1',
    firstPhysicalSearchPage: 'testFirstPhysicalSearchPage1',
    firstElectronicSearchPage: 'testFirstElectronicSearchPage1',
    secondPhysicalSearchPage: 'testSecondPhysicalSearchPage1',
    secondElectronicSearchPage: 'testSecondElectronicSearchPage1',
  },
  {
    _id: 'testMongoId2',
    id: 'testId2',
    code: 'testCode2',
    abbr: 'testAbbr2',
    name: 'testName2',
    mainPage: 'testMainPage2',
    firstPhysicalSearchPage: 'testFirstPhysicalSearchPage2',
    firstElectronicSearchPage: 'testFirstElectronicSearchPage2',
    secondPhysicalSearchPage: 'testSecondPhysicalSearchPage2',
    secondElectronicSearchPage: 'testSecondElectronicSearchPage2',
  },
  {
    _id: 'testMongoId3',
    id: 'testId3',
    code: 'testCode3',
    abbr: 'testAbbr3',
    name: 'testName3',
    mainPage: 'testMainPage3',
    firstPhysicalSearchPage: 'testFirstPhysicalSearchPage3',
    firstElectronicSearchPage: 'testFirstElectronicSearchPage3',
    secondPhysicalSearchPage: 'testSecondPhysicalSearchPage3',
    secondElectronicSearchPage: 'testSecondElectronicSearchPage3',
  },
];
