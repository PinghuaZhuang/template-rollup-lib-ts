import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
// import { terser } from 'rollup-plugin-terser';

const dist = './dist/';
const name = 'focusoverlay';

export default {
  input: './src/index.js',
  output: [
    {
      name: 'FocusOverlay',
      file: `${dist}${name}.js`,
      format: 'umd',
    },
  ],
  plugins: [
    resolve(),
    getBabelOutputPlugin({
      allowAllFormats: true,
      configFile: path.resolve(process.cwd(), './.babelrc'),
    }),
    commonjs(),
    // terser()
  ],
};
