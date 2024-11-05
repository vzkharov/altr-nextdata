import React, { Fragment, useMemo } from 'react'
import type { DefaultError, UseQueryResult } from '@tanstack/react-query'

import { isUndefined } from './utils'
import type { ComponentWithData, ComponentWithoutData, WithDataSharedOptions } from './types'

type WithQueryOptions<Props, TData, TError> = WithDataSharedOptions<Props, TData> & {
	useData: (args: Props) => UseQueryResult<TData, TError>
}

const withQuery = <Props, TData, TError extends DefaultError = DefaultError>(
	Component: ComponentWithData<Props, TData>,
	{ useData, components }: WithQueryOptions<Omit<Props, 'data'>, TData, TError>,
): ComponentWithoutData<Props> => {
	if (
		isUndefined(Component) ||
		isUndefined(components) ||
		isUndefined(components.Error) ||
		isUndefined(components.Loading)
	) {
		throw new Error('>> components must have Loading and Error components')
	}

	const { Layout = Fragment, Error: ErrorComponent, Loading: LoadingComponent } = components

	return (props) => {
		const { data, error, isError, isSuccess, isPending } = useData(props)

		const content = useMemo(() => {
			if (isPending) {
				return <LoadingComponent />
			}

			if (isSuccess) {
				return (
					// @ts-expect-error Omit<P, 'key'> & { key: any } !== P & { key: any }
					<Component
						{...props}
						data={data}
					/>
				)
			}

			if (isError) {
				return <ErrorComponent />
			}

			return null
		}, [props, data, error, isError, isSuccess, isPending])

		return <Layout {...props}>{content}</Layout>
	}
}

export { withQuery }
