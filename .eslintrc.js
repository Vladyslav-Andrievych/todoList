module.exports = {
  extends: 'eslint-config-airbnb-base',
  rules: {
    'import/prefer-default-export': 0,
    'func-names': 0,
  },
  env: {
    browser: true,
    jest: true,
  },
};
