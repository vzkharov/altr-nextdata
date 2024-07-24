import type { User } from '~/entities/user'

import type { UserResponse } from './types'

const transformUserResponse = (user: UserResponse): User => ({
	id: user.id,
	name: user.name,
	email: user.email,
	phone: user.phone,
	website: user.website,
	username: user.username,
	companyName: user.company.name,
	address: [user.address.suite, user.address.street, user.address.city].join(', '),
})

export { transformUserResponse }
