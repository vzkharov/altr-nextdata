import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { MountainIcon } from '~/components/ui/icons'

const Logo = ({ style, className }: StyleProps) => (
	<MountainIcon
		style={style}
		className={cn('h-6 w-6', className)}
	/>
)

export { Logo }
