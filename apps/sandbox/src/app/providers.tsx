'use client'

import type { Provider } from '~/lib/types'

import { ThemeProvider } from '~/modules/ThemeProvider'

type Props = {}

const Providers: Provider<Props> = ({ children }) => <ThemeProvider>{children}</ThemeProvider>

export { Providers }
export type { Props }
