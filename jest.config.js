const { defaults } = require('jest-config');

module.exports = {
    ...defaults,
    collectCoverage: true,
    coverageDirectory: 'js-coverage',
    setupFiles: ['<rootDir>/jest.setup.js'],
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "enzyme.js"
      ],
};