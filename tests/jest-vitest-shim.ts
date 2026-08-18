// Jest-Vitest compatibility shim for unit test migration
export const describe = (global as any).describe;
export const it = (global as any).it;
export const test = (global as any).test;
export const expect = (global as any).expect;
export const beforeEach = (global as any).beforeEach;
export const afterEach = (global as any).afterEach;
export const beforeAll = (global as any).beforeAll;
export const afterAll = (global as any).afterAll;

export const vi = {
  fn: (global as any).jest?.fn || jest.fn,
  spyOn: (global as any).jest?.spyOn || jest.spyOn,
  clearAllMocks: (global as any).jest?.clearAllMocks || jest.clearAllMocks,
  resetAllMocks: (global as any).jest?.resetAllMocks || jest.resetAllMocks,
  restoreAllMocks:
    (global as any).jest?.restoreAllMocks || jest.restoreAllMocks,
  useFakeTimers: (global as any).jest?.useFakeTimers || jest.useFakeTimers,
  useRealTimers: (global as any).jest?.useRealTimers || jest.useRealTimers,
  advanceTimersByTime:
    (global as any).jest?.advanceTimersByTime || jest.advanceTimersByTime,
};
