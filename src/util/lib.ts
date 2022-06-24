export interface Court {
  id: string;
  code: string;
  name: string;
  abbr: string;
  mainPage: string;
  search: {
    first: Instance;
    second: Instance;
  };
}

interface Instance {
  physical: string;
  electronic: string;
}

export const getCourtUrl = (
  courtData: Court[],
  inputText: string,
  instance: string,
  mode: string
): string => {
  let court;
  if (inputText.charAt(0).match(/[0-9]/)) {
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
    return court.search.first.physical;
  } else if (instance === 'first' && mode === 'electronic') {
    return court.search.first.electronic;
  } else if (instance === 'second' && mode === 'physical') {
    return court.search.second.physical;
  } else if (instance === 'second' && mode === 'electronic') {
    return court.search.second.electronic;
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
