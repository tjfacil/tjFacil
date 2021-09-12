export const validateInput = (inputText) => {
  if (inputText === "") {
    return false;
  }
  const firstChar = inputText.charAt(0);
  return firstChar.match(/[a-z0-9]/i);
};

export const getCourtUrl = (courtData, inputText, instance, mean) => {
  let court;
  if (inputText.charAt(0).match(/[0-9]/)) {
    const courtCode = getCourtCodeFromSuitNumber(inputText);
    court = courtData.find((court) => court.code === courtCode);
    if (court) {
      return court.search[instance][mean];
    }
  } else {
    court = courtData.find((court) => court.abbr === inputText.toUpperCase());
    if (court) {
      return court.mainPage;
    }
  }
  return null;
};

const getCourtCodeFromSuitNumber = (inputText) => {
  const suitNumber = getSuitNumberFromInput(inputText);
  const courtCode = suitNumber.slice(13, -4);
  const courtCodeIdChar = courtCode.charAt(0);
  const regionCode = suitNumber.slice(-4, -2);

  // STM and TSE
  if (courtCodeIdChar === "6" || courtCodeIdChar === "7") {
    return courtCodeIdChar + "00";
  }

  // TRFs
  if (courtCodeIdChar === "4") {
    return courtCode + regionCode;
  }

  // All others
  return courtCode;
};

const getSuitNumberFromInput = (inputText) => {
  const suitNumber = inputText.replace(/\D/g, "");
  if (inputText.length > 20) {
    return suitNumber.slice(-20);
  }
  return suitNumber.padStart(20, "0");
};
