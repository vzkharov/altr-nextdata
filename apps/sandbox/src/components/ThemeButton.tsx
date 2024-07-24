'use client'

import { memo, useCallback } from 'react'

import { Theme, useTheme } from '~/modules/ThemeProvider'

import { Button } from '~/components/ui/button'
import { SunIcon, MoonIcon, type IconProps } from '~/components/ui/icons'

const ThemeButton = memo(() => {
	const { theme, setTheme } = useTheme()
	const currentTheme = theme || Theme.Dark

	const toggleTheme = useCallback(() => {
		const newTheme = currentTheme === Theme.Light ? Theme.Dark : Theme.Light
		setTheme(newTheme)
	}, [currentTheme, setTheme])

	const Icon = ICON_BY_THEME[currentTheme as Theme]
	const hint = `Switch to ${currentTheme === Theme.Light ? Theme.Dark : Theme.Light} mode`

	return (
		<Button
			size="icon"
			variant="ghost"
			title={hint}
			aria-label={hint}
			onClick={toggleTheme}
		>
			{<Icon className="h-5 w-5" />}
		</Button>
	)
})

ThemeButton.displayName = 'ThemeButton'

const ICON_BY_THEME: Record<Theme, React.FC<IconProps>> = {
	[Theme.Dark]: SunIcon,
	[Theme.Light]: MoonIcon,
}

export { ThemeButton }
