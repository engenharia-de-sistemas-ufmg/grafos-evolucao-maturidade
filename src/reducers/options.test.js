import options from './options';

import { defaultOptions } from '../commons/consts';

describe('options reducer', () => {
  test('should handle UPDATE_OPTIONS', () => {
    expect(options(undefined, { type: 'UPDATE_OPTIONS', options: defaultOptions }))
      .toEqual(defaultOptions);
  });
  test('should handle default', () => {
    expect(options(undefined, undefined))
      .toEqual(defaultOptions);
  });
});