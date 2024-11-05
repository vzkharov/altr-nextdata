import { defineConfig } from 'tsup'

const buildConfig = defineConfig({
	outDir: './lib',
	platform: 'neutral',
	target: ['es2020', 'node16'],
	format: ['cjs', 'esm'],
	entry: ['./src/*.ts', './src/*.tsx'],
	dts: true,
	clean: true,
	minify: true,
	bundle: false,
	keepNames: true,
	sourcemap: true,
	minifyWhitespace: true,
})

export default buildConfig
