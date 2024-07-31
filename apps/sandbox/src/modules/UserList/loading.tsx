import { memo } from 'react'

import { UserSkeleton } from '~/components/(user)/User.Skeleton'

import styles from './styles.module.css'

const LoadingComponent = memo(() => (
	<section className={styles.list}>
		{new Array(9).fill(0).map((_, idx) => (
			<UserSkeleton key={idx} />
		))}
	</section>
))

LoadingComponent.displayName = '@user-list/loading'

export { LoadingComponent }
