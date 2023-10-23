import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { getBabelOutputPlugin, getBabelInputPlugin } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import _ from 'lodash';
import pkg from './package.json' assert { type: 'json' };
import path from 'path';

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.ts',
    output: {
      name: _.camelCase(pkg.name),
      file: pkg.browser,
      format: 'umd',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      getBabelOutputPlugin({
				allowAllFormats: true,
        configFile: path.resolve(process.cwd(), './.babelrc'),
      }),
      commonjs(),
      typescript(),
      // getBabelInputPlugin({
      //   include: 'node_modules/core-js',
      // }),
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // {
  //   input: 'src/index.ts',
  //   external: ['ms'],
  //   output: [
  //     { file: pkg.main, format: 'cjs' },
  //     { file: pkg.module, format: 'es' },
  //   ],
  // 	plugins: [
  // 		typescript(),
  // 	],
  // },
];
