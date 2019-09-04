module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: 'current',
        },
        useBuiltIns: false,
      },

    ],
  ],
  plugins: [
    '@babel/plugin-proposal-throw-expressions'
  ]
};
