'use strict'

module.exports = {
  hooks: {
    'pre-commit': 'npm run prettier && npm run build && npm test',
    'pre-push': 'npm run prettier && npm run build && npm test',
  },
}
