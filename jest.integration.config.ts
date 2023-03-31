export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: './output/coverage/jest',
  preset: 'ts-jest',
  reporters: ['default'],
  rootDir: './',
  testEnvironment: 'node',
  testRegex: ['\\.spec\\.ts$'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};
