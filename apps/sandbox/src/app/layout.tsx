import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import type { Layout } from '~/lib/types'

import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

const RootLayout: Layout = ({ children }) => (
	<html
		lang="en"
		suppressHydrationWarning
		suppressContentEditableWarning
	>
		<body className={inter.className}>
			<Providers>{children}</Providers>
		</body>
	</html>
)

const metadata: Metadata = {
	title: 'Sandbox — Next Wrapper',
	description: '',
}

export { metadata }
export default RootLayout
