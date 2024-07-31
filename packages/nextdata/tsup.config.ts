import { defineConfig } from 'tsup'

const buildConfig = defineConfig({
	outDir: './lib',
	platform: 'node',
	format: ['cjs', 'esm'],
	entry: ['./src/client.tsx', './src/server.tsx'],
	dts: true,
	clean: true,
	minify: true,
	bundle: true,
	keepNames: true,
	sourcemap: true,
	minifyWhitespace: true,
})

export default buildConfig
