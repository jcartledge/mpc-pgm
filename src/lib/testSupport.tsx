import { AppState } from './types';
import { AppContextValue, emptyState } from '../lib/AppContext';

export const setupState = (overrides: Partial<AppState> = {}): AppState => ({
  ...emptyState,
  ...overrides,
});

export const setupContext = (
  overrides: Partial<AppContextValue> = {},
): AppContextValue => ({
  dispatch: jest.fn(),
  state: setupState(),
  ...overrides,
});
