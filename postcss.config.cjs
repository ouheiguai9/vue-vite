module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
      exclude: function (file) {
        console.log('file')
        return file.indexOf('mobile') === -1;
      }
    },
    'postcss-sorting': {
      order: [
        'custom-properties',
        'dollar-variables',
        'declarations',
        'at-rules',
        'rules',
      ],
      'properties-order': 'alphabetical',
      'unspecified-properties-position': 'bottom',
    }
  },
}
