module.exports = {
  // testEnvironment: 'jest-environment-jsdom',
  // setupFiles: ['./jest.setup.js'], // solo si se utiliza fetch
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+\\.(css|less|scss)$': 'babel-jest'
  }
}
