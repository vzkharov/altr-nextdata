'use client'

import { useQuery } from '@tanstack/react-query'
import { withQuery } from '@alterdepression/nextdata/client'

import { fetchUsers } from '~/fetchers/user'

import { Component } from './component'
import { ErrorComponent } from './error'
import { LoadingComponent } from './loading'

const UserList = withQuery(Component, {
	useData: () => useQuery({ queryKey: ['users'], queryFn: () => fetchUsers(9) }),
	components: {
		Error: ErrorComponent,
		Loading: LoadingComponent,
	},
})

export { UserList }
