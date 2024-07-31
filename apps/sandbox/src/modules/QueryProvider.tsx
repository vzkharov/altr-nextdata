'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import type { Provider } from '~/lib/types'

const queryClient = new QueryClient()

type QueryProviderProps = {}

const QueryProvider: Provider<QueryProviderProps> = ({ children }) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

export { QueryProvider }
export type { QueryProviderProps }
