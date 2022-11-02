module.exports = {
  plugins: {
    autoprefixer: {},
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
    },
    'postcss-px-to-viewport-8-plugin': {
      viewportWidth: 375,
    }
  },
}
