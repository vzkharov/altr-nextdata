import { memo, useMemo } from 'react'

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import type { User } from '~/entities/user'

import { Card } from '~/components/ui/card'
import { IconText } from '~/components/ui/icon-text'
import { Separator } from '~/components/ui/separator'
import { Avatar, AvatarFallback } from '~/components/ui/avatar'
import { PhoneIcon, LocateIcon, MailOpenIcon } from '~/components/ui/icons'

import styles from './styles.module.css'

type UserCardProps = StyleProps & User

const UserCard = memo<UserCardProps>(({ style, className, ...user }) => {
	const userInfo = useMemo(
		() => [
			{ Icon: MailOpenIcon, text: user.email },
			{ Icon: PhoneIcon, text: user.phone },
			{ Icon: LocateIcon, text: user.address },
		],
		[user.phone, user.email, user.address],
	)

	return (
		<Card
			style={style}
			className={cn(styles.card, className)}
		>
			<div className={styles.card__header}>
				<Avatar className={styles.user__avatar}>
					<AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
				</Avatar>

				<div className="flex-1 min-w-0">
					<h3 className={styles.user__fullname}>{user.name}</h3>
					<p className={styles.user__name}>@{user.username}</p>
				</div>
			</div>

			<Separator />

			<div className={styles.card__body}>
				{userInfo.map(({ text, Icon }, idx) => (
					<IconText
						key={idx}
						text={text}
						icon={<Icon className="h-4 w-4" />}
					/>
				))}
			</div>
		</Card>
	)
})

UserCard.displayName = 'UserCard'

export { UserCard }
export type { UserCardProps }
