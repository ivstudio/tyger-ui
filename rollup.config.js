import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const packageJson = require('./package.json');

export default [
    {
        input: ['src/index.ts', 'src/theme/theme.ts'],
        output: {
            dir: 'dist',
            sourcemap: true,
            format: 'esm',
            preserveModules: true,
        },
        plugins: [
            peerDepsExternal(),
            resolve(),
            typescript({ tsconfig: './tsconfig.json' }),
            terser(),
        ],
        external: ['react', 'react-dom', 'styled-components'],
    },
];
