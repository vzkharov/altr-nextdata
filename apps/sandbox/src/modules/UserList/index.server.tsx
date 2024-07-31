import { withRSC } from '@alterdepression/nextdata/server'

import { fetchUsers } from '~/fetchers/user'

import { Component } from './component'
import { ErrorComponent } from './error'
import { LoadingComponent } from './loading'

const UserList = withRSC(Component, {
	fetchData: () => fetchUsers(9),
	components: {
		Error: ErrorComponent,
		Loading: LoadingComponent,
	},
})

export { UserList }
