// eslint-disable-next-line @typescript-eslint/no-var-requires
const nxPreset = require('@nrwl/jest/preset').default;

module.exports = {
  ...nxPreset,
  coverageThreshold: {
    global: {
      statements: 75,
      lines: 75,
      branches: 40,
      functions: 40,
    },
  },
  // coveragePathIgnorePatterns: ['**.*.dto.ts']
};
