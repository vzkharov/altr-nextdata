'use client'

import type { Provider } from '~/lib/types'

import { QueryProvider } from '~/modules/QueryProvider'
import { ThemeProvider } from '~/modules/ThemeProvider'

type Props = {}

const Providers: Provider<Props> = ({ children }) => (
	<QueryProvider>
		<ThemeProvider>{children}</ThemeProvider>
	</QueryProvider>
)

export { Providers }
export type { Props }
