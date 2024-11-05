/** @type {import('next').NextConfig} */
const nextConfig = {
	// transpilePackages: ['@alterdepression/nextdata'],
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	staticPageGenerationTimeout: 100,
	experimental: {
		swcMinify: true,
	},

	reactStrictMode: true,
	productionBrowserSourceMaps: true,

	/** Enables hot reloading for local packages without a build step */
	/** We already do linting and typechecking as separate tasks in CI */
	eslint: { ignoreDuringBuilds: true },
	typescript: { ignoreBuildErrors: true },
}

export default nextConfig
