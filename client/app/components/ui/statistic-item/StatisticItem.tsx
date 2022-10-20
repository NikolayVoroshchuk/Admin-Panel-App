import AnimatedCounter from '../AnimatedCounter'
import { IStatisticItem } from './statistic-item.interface'
import { getIcon } from './statistics.util'
import cn from 'classnames'
import React, { FC } from 'react'

import styles from './StatisticItem.module.scss'

const StatisticItem: FC<{ item: IStatisticItem }> = ({ item }) => {
	const { name, value, id } = item
	const Icon = getIcon(id)

	return (
		<div className={cn(styles.item, styles[`color_${id}`])}>
			<div className={styles.icon}>
				<Icon />
			</div>
			<div className={styles.name}>{name}</div>
			<div className={styles.value}>
				<AnimatedCounter to={value} />
			</div>
		</div>
	)
}

export default StatisticItem
