export interface ITableItem {
	id: number
	image?: string
	name: string
	description?: string
	viewLink: string
	editLink?: string
	removeHandler: () => void
}
