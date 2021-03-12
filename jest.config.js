module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: ['js', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: ['**/tests/*.js'],
  setupFilesAfterEnv: ['./src/setupTests.js']
};
