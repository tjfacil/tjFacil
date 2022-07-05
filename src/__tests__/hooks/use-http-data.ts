export const mockEmptyRes = {
  ok: true,
  json: jest.fn(),
};

export const mockOkRes = {
  ok: true,
  json: () => {
    return {
      some: 'data',
    };
  },
};

export const mockErrRes = {
  json: () => {
    return {
      error: 'error',
    };
  },
};

export const emptyReqOptions = {
  method: 'GET',
  headers: {},
  body: null,
};

export const postReqOptions = {
  url: 'testUrl2',
  method: 'POST',
  headers: { some: 'header' },
  body: JSON.stringify({ test: 'test' }),
};

export const expectedPostReqOptions = {
  method: 'POST',
  headers: { some: 'header' },
  body: '"{\\"test\\":\\"test\\"}"',
};
