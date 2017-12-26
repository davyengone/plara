module.exports = function (w) {
  return {
    files: [
      'lib/*.ts'
    ],

    tests: [
      'test/*.spec.ts'
    ],

    env: {
      type: 'node'
    },

    compilers: {
      '**/*.ts': w.compilers.typeScript({ module: 'commonjs', target: 'es6' })
    }
  };
};