export const pathJoin = (...args) => {
	const paths = [...args]

	return paths.map(x => x.replace(/(\.\/|\.\/)/g, '')).join('/')
}

export const urlJoin = (...args) => {
	const paths = [...args]

	return paths.map(x => x.replace(/(^\/|\/$)/g, '')).join('/')
}