import type { User } from '~/entities/user'

import { UserCard } from '~/components/(user)/User.Card'

import { EmptyComponent } from './empty'

import styles from './styles.module.css'

type ComponentProps = {
	data: User[]
	limit?: number
}

const Component = ({ data }: ComponentProps) =>
	data.length ? (
		<section className={styles.list}>
			{data.map((user) => (
				<UserCard
					key={user.id}
					{...user}
				/>
			))}
		</section>
	) : (
		<EmptyComponent />
	)

export { Component }
export type { ComponentProps }
