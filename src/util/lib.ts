export interface Court {
  _id: string;
  id: string;
  code: string;
  abbr: string;
  name: string;
  mainPage: string;
  firstPhysicalSearchPage: string;
  firstElectronicSearchPage: string;
  secondPhysicalSearchPage: string;
  secondElectronicSearchPage: string;
}

export const getCourtUrl = (
  courtData: Court[],
  inputText: string,
  instance: string,
  mode: string
): string => {
  let court;
  if (isFirstCharNumeric(inputText)) {
    const courtCode = getCourtCodeFromSuitNumber(inputText);
    court = courtData.find((court) => court.code === courtCode);
    if (court) {
      return getSuitSearchUrl(court, instance, mode);
    }
  } else {
    court = courtData.find((court) => court.abbr === inputText.toUpperCase());
    if (court) {
      return court.mainPage;
    }
  }
  return '';
};

const getSuitSearchUrl = (
  court: Court,
  instance: string,
  mode: string
): string => {
  if (instance === 'first' && mode === 'physical') {
    return court.firstPhysicalSearchPage;
  } else if (instance === 'first' && mode === 'electronic') {
    return court.firstElectronicSearchPage;
  } else if (instance === 'second' && mode === 'physical') {
    return court.secondPhysicalSearchPage;
  } else if (instance === 'second' && mode === 'electronic') {
    return court.secondElectronicSearchPage;
  } else {
    return '';
  }
};

const getCourtCodeFromSuitNumber = (inputText: string): string => {
  const suitNumber = getSuitNumberFromInput(inputText);
  const courtCode = suitNumber.slice(13, -4);
  const courtCodeIdChar = courtCode.charAt(0);
  const regionCode = suitNumber.slice(-4, -2);

  // STM and TSE
  if (courtCodeIdChar === '6' || courtCodeIdChar === '7') {
    return courtCodeIdChar + '00';
  }

  // TRFs
  if (courtCodeIdChar === '4') {
    return courtCode + regionCode;
  }

  // All others
  return courtCode;
};

const getSuitNumberFromInput = (inputText: string): string => {
  const suitNumber = inputText.replace(/\D/g, '');
  if (inputText.length > 20) {
    return suitNumber.slice(-20);
  }
  return suitNumber.padStart(20, '0');
};

export const validateInput = (inputText: string): boolean => {
  if (inputText === '') {
    return false;
  }
  const firstChar = inputText.charAt(0);
  return !!firstChar.match(/[a-z0-9]/i);
};

export const isFirstCharNumeric = (s: string): boolean => {
  return !!s.trim().charAt(0).match(/[0-9]/)
}