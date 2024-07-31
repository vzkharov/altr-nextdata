import React from 'react'

type ErrorComponentProps<TError = void> = TError extends void
	? {}
	: {
			error: TError
			refresh: any
		}

type WithDataSharedOptions<Props, TData, TError = void> = {
	components: {
		/**
		 * @default React.Fragment
		 */
		Layout?: React.FC<Props>

		Error: React.FC
		Loading: React.FC
	}
}

type ComponentWithData<Props, TData> = React.FC<
	Props & {
		data: TData
	}
>

type ComponentWithoutData<Props> = React.FC<Omit<Props, 'data'>>

export type { ComponentWithData, ComponentWithoutData, WithDataSharedOptions, ErrorComponentProps }
