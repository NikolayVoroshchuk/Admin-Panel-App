import { ITableItem } from './table.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'

import { useTheme } from '@/hooks/useTheme'

import styles from './Table.module.scss'

const TableItem: FC<{ item: ITableItem }> = ({ item }) => {
	const { name, description, image, viewLink, editLink, removeHandler } = item
	const { isDarkTheme } = useTheme()
	return (
		<div className={styles.tableItem}>
			<div className={styles.info}>
				{image && <Image src={image} alt={name} width={40} height={61} />}
				<a href={viewLink} target="blank">
					<div>{name}</div>
				</a>
				{description && <div>{description}</div>}
			</div>
			<div className={styles.actions}>
				{editLink && (
					<Link href={editLink}>
						<a className={isDarkTheme ? 'text-sky-300' : 'text-sky-500'}>
							<HiOutlinePencil />
						</a>
					</Link>
				)}
				<button onClick={removeHandler}>
					<HiOutlineTrash />
				</button>
			</div>
		</div>
	)
}

export default TableItem
