// module.exports = {
//   presets: [
//     "@babel/preset-env",  
//     "@babel/preset-react",
//     'babel-preset-expo', // or 'module:metro-react-native-babel-preset'
//       '@babel/preset-flow',
//   ],
  // plugins: [
  //         '@babel/plugin-proposal-export-namespace-from',
  //         'react-native-worklets/plugin',
  //     ],
// };

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      '@babel/preset-flow',
    ],
  };
};
