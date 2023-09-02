import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import preserveDirectives from 'rollup-plugin-preserve-directives';
const createStyledComponentsTransformer =
    require('typescript-plugin-styled-components').default;

const styledComponentsTransformer = createStyledComponentsTransformer();

const packageJson = require('./package.json');

export default {
    input: ['src/index.ts'],
    output: [
        {
            dir: 'dist/cjs/',
            format: 'cjs',
            sourcemap: true,
            preserveModules: true,
        },
        {
            dir: 'dist/esm/',
            format: 'esm',
            sourcemap: true,
            preserveModules: true,
        },
    ],
    onwarn(warning, warn) {
        if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') {
            warn(warning);
        }
    },
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
        preserveDirectives(),
        terser(),
    ],
    external: [
        'react',
        'react-dom',
        'styled-components',
        '@tyger-ui/system',
        '@tyger-ui/hooks',
    ],
};
