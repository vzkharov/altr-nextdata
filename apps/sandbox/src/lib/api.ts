import { createFetch, type FetchOptions } from '~/lib/fetch'

const fetchPlaceholder = createFetch('https://jsonplaceholder.typicode.com')

/**
 * @future add other api...
 */

export { fetchPlaceholder }
export type { FetchOptions }
