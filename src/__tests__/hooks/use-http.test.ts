import { renderHook } from '@testing-library/react';
import useHttp from '../../hooks/use-http';

describe('use-http hook tests', () => {
  test('use-http initial states', () => {
    const { result } = renderHook(() => useHttp());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(false);
  });

  test('sendRequest calls fetch with the right url and options', () => {

  });

  test('sendRequest executes the callback properly', () => {

  });

  test('fetch fails', () => {

  });
});
