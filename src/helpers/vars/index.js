/**
 * Export
 */
export function getAlertType(index) {
	// success, info, warning, error of elements-ui component
	let alertType = ['success', 'info', 'warning', 'error', 'http']
	return alertType[index]
}

export function cv(absoluteZero) {
	return absoluteZero * 3
}
