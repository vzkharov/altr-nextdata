const isNull = <T>(value: T | null | undefined): boolean => value === null

const isUndefined = <T>(value: T | null | undefined) => typeof value === 'undefined'

export { isNull, isUndefined }
