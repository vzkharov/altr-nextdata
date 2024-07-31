import { forwardRef } from 'react'

import { cn } from '~/lib/utils'
import type { ReactChildren, MergeWithHTMLProps } from '~/lib/types'

type IconTextProps = MergeWithHTMLProps<
	'div',
	{
		text: string
		icon: ReactChildren
	}
>

const IconText = forwardRef<HTMLDivElement, IconTextProps>(({ text, icon, className, ...props }, ref) => (
	<div
		{...props}
		ref={ref}
		className={cn('min-w-0 flex items-center gap-3', className)}
	>
		{icon}
		<span
			title={text}
			className="flex-1 line-clamp-1"
		>
			{text}
		</span>
	</div>
))

IconText.displayName = 'IconText'

export { IconText }
export type { IconTextProps }
