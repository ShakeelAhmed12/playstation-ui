const { defaults } = require('jest-config');

module.exports = {
    ...defaults,
    collectCoverage: true,
    coverageDirectory: 'js-coverage',
    setupFiles: ['<rootDir>/setupTest.js'],
};