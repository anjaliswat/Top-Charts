module.exports = {
    extends: 'airbnb',
    env: {
      browser: true
    },
    rules: {
      'react/jsx-filename-extension': 'off',
      'no-plusplus' : 'off',
      'no-param-reassign': ['error', { 'props': false }],
      'no-console' : 'off',
    }
};
