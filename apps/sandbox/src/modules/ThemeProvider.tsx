'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

enum Theme {
	Dark = 'dark',
	Light = 'light',
}

const ThemeProvider = ({
	children,
	attribute = 'class',
	defaultTheme = Theme.Dark,
	disableTransitionOnChange = false,
	...props
}: ThemeProviderProps) => (
	<NextThemesProvider
		{...props}
		attribute={attribute}
		defaultTheme={defaultTheme}
		disableTransitionOnChange={disableTransitionOnChange}
	>
		{children}
	</NextThemesProvider>
)

export { Theme, ThemeProvider }
export { useTheme } from 'next-themes'
