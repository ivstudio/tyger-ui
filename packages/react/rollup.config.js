import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
const createStyledComponentsTransformer =
    require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

export default {
    input: ['src/index.ts'],
    output: [
        {
            dir: './dist',
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
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
    preserveModules: true,
    external: ['react', 'react-dom', 'styled-components, @tyger-ui/system'],
};
