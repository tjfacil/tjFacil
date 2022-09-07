import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import useHttp from '../../hooks/use-http';
import {
  emptyReqOptions,
  expectedPostReqOptions,
  mockEmptyRes,
  mockErrRes,
  mockOkRes,
  postReqOptions,
} from './use-http-data';

window.fetch = jest.fn();

describe('use-http hook tests', () => {
  test('use-http initial states', () => {
    const { result } = renderHook(() => useHttp());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(false);
  });

  test('sendRequest calls fetch with the right url and options', async () => {
    (window.fetch as jest.Mock).mockResolvedValueOnce(mockEmptyRes);

    const { result } = renderHook(() => useHttp());

    await act(async () => {
      result.current.sendRequest({ url: 'testUrl' }, jest.fn());
      result.current.sendRequest(postReqOptions, jest.fn());
    });

    expect(window.fetch).toHaveBeenCalledTimes(2);
    expect(window.fetch).toHaveBeenNthCalledWith(1, 'testUrl', emptyReqOptions);
    expect(window.fetch).toHaveBeenNthCalledWith(
      2,
      'testUrl2',
      expectedPostReqOptions
    );
  });

  test('sendRequest executes the callback properly', async () => {
    (window.fetch as jest.Mock).mockResolvedValueOnce(mockOkRes);
    const callback = jest.fn();

    const { result } = renderHook(() => useHttp());

    await act(async () => {
      result.current.sendRequest({ url: 'testUrl' }, callback);
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('fetch fails', async () => {
    (window.fetch as jest.Mock).mockResolvedValueOnce(mockErrRes);

    const { result } = renderHook(() => useHttp());

    await act(async () => {
      result.current.sendRequest({ url: 'testUrl' }, jest.fn());
    });

    expect(result.current.error).toBe('Request failed!');
  });
});
