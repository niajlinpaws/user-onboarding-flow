const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@typography-title-margin-bottom': '0.1em',
      '@layout-body-background': '#F5F6FA',
      '@layout-header-background': '#FFF',
      '@input-border-color': 'transparent',
      '@input-hover-border-color': 'transparent',
      '@input-bg': '#F9F9FE',
      '@text-color-secondary': '#BDC2C8'
    },
  }),
);