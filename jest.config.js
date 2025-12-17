/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  extensionsToTreatAsEsm: ['.ts'],
  transformIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/tests/**/*.test.ts'],
  globals: {
    'ts-jest': {
      useESM: true
    }
  },
};
