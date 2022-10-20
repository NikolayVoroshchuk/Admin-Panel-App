import Loader from '../Loader'
import TableItem from './TableItem'
import { ITableItem } from './table.interface'
import React, { FC } from 'react'

const Table: FC<{ items: ITableItem[]; isLoading: boolean }> = ({
	items,
	isLoading,
}) => {
	return (
		<div className="mt-6">
			{isLoading ? (
				<Loader count={3} />
			) : items.length ? (
				items.map((item) => <TableItem item={item} key={item.id} />)
			) : (
				<div>Items not found</div>
			)}
		</div>
	)
}

export default Table
