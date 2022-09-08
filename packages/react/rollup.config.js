import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const createStyledComponentsTransformer =
    require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

const packageJson = require('./package.json');

export default {
    input: ['src/index.ts'],
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({
            tsconfig: 'tsconfig.json',
            transformers: [
                () => ({
                    before: [styledComponentsTransformer],
                }),
            ],
        }),
        terser(),
    ],
    external: ['react', 'react-dom', 'styled-components, @tyger-ui/system'],
};
