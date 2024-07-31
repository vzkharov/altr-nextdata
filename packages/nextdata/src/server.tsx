import React, { Fragment, Suspense } from 'react'
import { ErrorBoundary, type ErrorBoundaryPropsWithFallback } from 'react-error-boundary'

import { isUndefined } from './utils/boolean'
import type { ComponentWithData, ComponentWithoutData, WithDataSharedOptions } from './types'

type WithDataOptions<Props, TData> = WithDataSharedOptions<Props, TData> & {
	fetchData: (args: Props) => Promise<TData>
	callbacks?: Partial<Pick<ErrorBoundaryPropsWithFallback, 'onError' | 'onReset'>>
}

const withRSC = <Props extends {}, TData = {}>(
	Component: ComponentWithData<Props, TData>,
	{ fetchData, components, callbacks }: WithDataOptions<Omit<Props, 'data'>, TData>,
): ComponentWithoutData<Props> => {
	if (
		isUndefined(Component) ||
		isUndefined(components) ||
		isUndefined(components.Error) ||
		isUndefined(components.Loading)
	) {
		throw new Error('>> components must have Loading and Error components')
	}

	const { onError, onReset } = callbacks || {}
	const { Layout = Fragment, Error: ErrorComponent, Loading: LoadingComponent } = components

	return (props) => {
		const ServerComponent = async () => {
			const data = await fetchData(props)

			return (
				// @ts-expect-error Omit<P, 'key'> & { key: any } !== P & { key: any }
				<Component
					{...props}
					data={data}
				/>
			)
		}

		return (
			<Layout {...props}>
				<ErrorBoundary
					onReset={onReset}
					onError={onError}
					fallback={<ErrorComponent />}
				>
					<Suspense fallback={<LoadingComponent />}>
						{/** @ts-expect-error RSC */}
						<ServerComponent />
					</Suspense>
				</ErrorBoundary>
			</Layout>
		)
	}
}

export { withRSC }
