import { builtinModules } from 'module';
import { defineConfig } from 'vite';
import pkg from '../../package.json';

export default defineConfig({
    root: __dirname,
    build: {
        outDir: '../../dist/main',
        lib: {
            entry: 'index.ts',
            formats: ['cjs'],
            fileName: () => '[name].cjs'
        },
        minify: process.env.NODE_ENV === 'production',
        sourcemap: process.env.NODE_ENV === 'debug',
        rollupOptions: {
            external: [
                'electron',
                ...builtinModules,
                ...Object.keys(pkg.dependencies || {})
            ]
        }
    }
});
