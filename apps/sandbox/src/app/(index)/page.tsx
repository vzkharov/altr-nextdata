import { UserList } from '~/modules/UserList/index.client'

const Home = () => <UserList />

export const revalidate = 0
export const dynamic = 'force-dynamic'

export default Home
