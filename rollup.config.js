import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import nodeResolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'index.js',
  plugins: [
    commonjs(),
    nodeResolve({ preferBuiltins: true }),
    json(),
    terser()
  ],
  output: {
    file: 'build/index.js',
    format: 'esm',
    sourcemap: true
  }
}
